import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface FormSubmission {
  formType: "startup" | "corporate" | "investor";
  data: Record<string, any>;
}

// Rate limiting: Track submissions by IP address
const rateLimits = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimits.get(ip);
  
  // Reset if time window has passed
  if (!limit || now > limit.resetAt) {
    rateLimits.set(ip, { count: 1, resetAt: now + 3600000 }); // 1 hour window
    return true;
  }
  
  // Block if exceeded limit
  if (limit.count >= 5) {
    return false;
  }
  
  // Increment count
  limit.count++;
  return true;
}

// HTML escaping to prevent XSS
function escapeHtml(unsafe: string): string {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// URL sanitization
function sanitizeUrl(url: string): string {
  if (!url) return '#';
  try {
    const parsed = new URL(url);
    // Only allow http/https protocols
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return '#';
    }
    return escapeHtml(url);
  } catch {
    return '#';
  }
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Extract IP address for rate limiting
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 
               req.headers.get('x-real-ip') || 
               'unknown';
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      console.log(`Rate limit exceeded for IP: ${ip}`);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { formType, data }: FormSubmission = await req.json();

    console.log(`Processing ${formType} form submission`);

    let emailSubject = "";
    let emailContent = "";

    // Format email based on form type with proper HTML escaping
    switch (formType) {
      case "startup":
        emailSubject = `New Startup Application: ${escapeHtml(data.company)}`;
        emailContent = `
          <h2>New Startup Application</h2>
          <p><strong>Company:</strong> ${escapeHtml(data.company)}</p>
          <p><strong>Website:</strong> <a href="${sanitizeUrl(data.website)}">${escapeHtml(data.website)}</a></p>
          <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
          <p><strong>LinkedIn:</strong> <a href="${sanitizeUrl(data.linkedin)}">${escapeHtml(data.linkedin)}</a></p>
          <p><strong>Region:</strong> ${escapeHtml(data.region)}</p>
          ${data.demo ? `<p><strong>Demo Link:</strong> <a href="${sanitizeUrl(data.demo)}">${escapeHtml(data.demo)}</a></p>` : ''}
          
          <h3>Ideal Customer Profile</h3>
          <p>${escapeHtml(data.icp)}</p>
          
          <h3>Problem Statement</h3>
          <p>${escapeHtml(data.problem)}</p>
          
          <h3>Traction</h3>
          <p>${escapeHtml(data.traction)}</p>
          
          <h3>Team</h3>
          <p>${escapeHtml(data.team)}</p>
          
          <h3>Security & Compliance</h3>
          <p>${escapeHtml(data.security)}</p>
        `;
        break;

      case "corporate":
        emailSubject = `New Corporate Partnership: ${escapeHtml(data.company)}`;
        emailContent = `
          <h2>New Corporate Partnership Request</h2>
          <p><strong>Company:</strong> ${escapeHtml(data.company)}</p>
          <p><strong>Business Unit:</strong> ${escapeHtml(data.businessUnit)}</p>
          <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
          
          <h3>Domains of Interest</h3>
          <p>${escapeHtml(data.domains)}</p>
          
          ${data.problems ? `<h3>Specific Problems</h3><p>${escapeHtml(data.problems)}</p>` : ''}
          
          <h3>Budget Guardrails</h3>
          <p>${escapeHtml(data.budget)}</p>
          
          <h3>Data Classification Level</h3>
          <p>${escapeHtml(data.dataLevel)}</p>
        `;
        break;

      case "investor":
        emailSubject = "New Investor Deck Request";
        emailContent = `
          <h2>New Investor Deck Request</h2>
          <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
          <p><strong>Firm Type:</strong> ${escapeHtml(data.firmType)}</p>
          <p><strong>Check Size:</strong> ${escapeHtml(data.checkSize)}</p>
          <p><strong>Stage Focus:</strong> ${escapeHtml(data.stage)}</p>
          <p><strong>Geography:</strong> ${escapeHtml(data.geography)}</p>
        `;
        break;
    }

    // Send email to Forms@QuanXlr8.com
    const emailResponse = await resend.emails.send({
      from: "QuantXlr8 Forms <onboarding@resend.dev>",
      to: ["Forms@QuanXlr8.com"],
      subject: emailSubject,
      html: emailContent,
    });

    console.log("Email sent successfully");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-form-submission function");
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
