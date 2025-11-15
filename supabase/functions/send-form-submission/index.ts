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

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { formType, data }: FormSubmission = await req.json();

    console.log(`Processing ${formType} form submission:`, data);

    let emailSubject = "";
    let emailContent = "";

    // Format email based on form type
    switch (formType) {
      case "startup":
        emailSubject = `New Startup Application: ${data.company}`;
        emailContent = `
          <h2>New Startup Application</h2>
          <p><strong>Company:</strong> ${data.company}</p>
          <p><strong>Website:</strong> <a href="${data.website}">${data.website}</a></p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>LinkedIn:</strong> <a href="${data.linkedin}">${data.linkedin}</a></p>
          <p><strong>Region:</strong> ${data.region}</p>
          ${data.demo ? `<p><strong>Demo Link:</strong> <a href="${data.demo}">${data.demo}</a></p>` : ''}
          
          <h3>Ideal Customer Profile</h3>
          <p>${data.icp}</p>
          
          <h3>Problem Statement</h3>
          <p>${data.problem}</p>
          
          <h3>Traction</h3>
          <p>${data.traction}</p>
          
          <h3>Team</h3>
          <p>${data.team}</p>
          
          <h3>Security & Compliance</h3>
          <p>${data.security}</p>
        `;
        break;

      case "corporate":
        emailSubject = `New Corporate Partnership: ${data.company}`;
        emailContent = `
          <h2>New Corporate Partnership Request</h2>
          <p><strong>Company:</strong> ${data.company}</p>
          <p><strong>Business Unit:</strong> ${data.businessUnit}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          
          <h3>Domains of Interest</h3>
          <p>${data.domains}</p>
          
          ${data.problems ? `<h3>Specific Problems</h3><p>${data.problems}</p>` : ''}
          
          <h3>Budget Guardrails</h3>
          <p>${data.budget}</p>
          
          <h3>Data Classification Level</h3>
          <p>${data.dataLevel}</p>
        `;
        break;

      case "investor":
        emailSubject = "New Investor Deck Request";
        emailContent = `
          <h2>New Investor Deck Request</h2>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Firm Type:</strong> ${data.firmType}</p>
          <p><strong>Check Size:</strong> ${data.checkSize}</p>
          <p><strong>Stage Focus:</strong> ${data.stage}</p>
          <p><strong>Geography:</strong> ${data.geography}</p>
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

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-form-submission function:", error);
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
