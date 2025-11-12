import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { VoiceInputWrapper } from "@/components/VoiceInputWrapper";

const startupSchema = z.object({
  company: z.string().min(1, "Company name is required").max(100),
  website: z.string().url("Must be a valid URL").max(255),
  icp: z.string().min(10, "Please describe your ideal customer").max(500),
  problem: z.string().min(10, "Please describe the problem you solve").max(1000),
  traction: z.string().min(10, "Please share your current traction").max(1000),
  team: z.string().min(10, "Please describe your team").max(500),
  region: z.string().min(1, "Region is required").max(100),
  email: z.string().email("Must be a valid email").max(255),
  linkedin: z.string().url("Must be a valid URL").max(255),
  security: z.string().max(200),
  demo: z.string().url("Must be a valid URL").max(255).optional().or(z.literal("")),
});

const corporateSchema = z.object({
  company: z.string().min(1, "Company name is required").max(100),
  businessUnit: z.string().min(1, "Business unit is required").max(200),
  domains: z.string().min(10, "Please describe your domains of interest").max(500),
  problems: z.string().max(1000).optional(),
  budget: z.string().min(1, "Budget guardrails are required").max(200),
  dataLevel: z.string().min(1, "Data classification level is required").max(100),
  email: z.string().email("Must be a valid email").max(255),
});

const investorSchema = z.object({
  firmType: z.string().min(1, "Firm type is required").max(100),
  checkSize: z.string().min(1, "Check size is required").max(100),
  stage: z.string().min(1, "Stage focus is required").max(200),
  geography: z.string().min(1, "Geography is required").max(100),
  email: z.string().email("Must be a valid email").max(255),
});

export const StartupForm = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
    resolver: zodResolver(startupSchema),
  });

  const onSubmit = async (data: z.infer<typeof startupSchema>) => {
    setLoading(true);
    try {
      // Mock API endpoint - logs to console and returns success
      console.log("Startup Application Submitted:", JSON.stringify(data, null, 2));
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      toast({ title: "Application submitted!", description: "We'll be in touch soon." });
      reset();
    } catch (error) {
      toast({ title: "Error", description: "Something went wrong", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" id="startup-form">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="company">Company Name *</Label>
          <Input id="company" {...register("company")} aria-invalid={!!errors.company} />
          {errors.company && <p className="text-sm text-destructive mt-1">{String(errors.company.message)}</p>}
        </div>
        <div>
          <Label htmlFor="website">Website/Demo Link *</Label>
          <Input id="website" type="url" {...register("website")} aria-invalid={!!errors.website} />
          {errors.website && <p className="text-sm text-destructive mt-1">{String(errors.website.message)}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="icp">Ideal Customer Profile *</Label>
        <VoiceInputWrapper onTranscript={(text) => setValue("icp", text)}>
          <Textarea id="icp" {...register("icp")} rows={3} aria-invalid={!!errors.icp} className="pr-12" />
        </VoiceInputWrapper>
        {errors.icp && <p className="text-sm text-destructive mt-1">{String(errors.icp.message)}</p>}
      </div>

      <div>
        <Label htmlFor="problem">Problem You Solve *</Label>
        <VoiceInputWrapper onTranscript={(text) => setValue("problem", text)}>
          <Textarea id="problem" {...register("problem")} rows={4} aria-invalid={!!errors.problem} className="pr-12" />
        </VoiceInputWrapper>
        {errors.problem && <p className="text-sm text-destructive mt-1">{String(errors.problem.message)}</p>}
      </div>

      <div>
        <Label htmlFor="traction">Current Traction *</Label>
        <VoiceInputWrapper onTranscript={(text) => setValue("traction", text)}>
          <Textarea id="traction" {...register("traction")} rows={3} aria-invalid={!!errors.traction} className="pr-12" />
        </VoiceInputWrapper>
        {errors.traction && <p className="text-sm text-destructive mt-1">{String(errors.traction.message)}</p>}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="team">Team Background *</Label>
          <VoiceInputWrapper onTranscript={(text) => setValue("team", text)}>
            <Textarea id="team" {...register("team")} rows={3} aria-invalid={!!errors.team} className="pr-12" />
          </VoiceInputWrapper>
          {errors.team && <p className="text-sm text-destructive mt-1">{String(errors.team.message)}</p>}
        </div>
        <div>
          <Label htmlFor="region">Region *</Label>
          <Input id="region" {...register("region")} aria-invalid={!!errors.region} />
          {errors.region && <p className="text-sm text-destructive mt-1">{String(errors.region.message)}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="email">Contact Email *</Label>
          <Input id="email" type="email" {...register("email")} aria-invalid={!!errors.email} />
          {errors.email && <p className="text-sm text-destructive mt-1">{String(errors.email.message)}</p>}
        </div>
        <div>
          <Label htmlFor="linkedin">LinkedIn Profile *</Label>
          <Input id="linkedin" type="url" {...register("linkedin")} aria-invalid={!!errors.linkedin} />
          {errors.linkedin && <p className="text-sm text-destructive mt-1">{String(errors.linkedin.message)}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="security">Security Posture</Label>
          <Input id="security" {...register("security")} placeholder="SOC2, ISO27001, or none" />
        </div>
        <div>
          <Label htmlFor="demo">Additional Demo Link</Label>
          <Input id="demo" type="url" {...register("demo")} />
        </div>
      </div>

      <Button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
        {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</> : "Submit Application"}
      </Button>
    </form>
  );
};

export const CorporateForm = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
    resolver: zodResolver(corporateSchema),
  });

  const onSubmit = async (data: z.infer<typeof corporateSchema>) => {
    setLoading(true);
    try {
      // Mock API endpoint - logs to console and returns success
      console.log("Corporate Partnership Request Submitted:", JSON.stringify(data, null, 2));
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      toast({ title: "Partnership request submitted!", description: "We'll contact you shortly." });
      reset();
    } catch (error) {
      toast({ title: "Error", description: "Something went wrong", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" id="corporate-form">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="corp-company">Company Name *</Label>
          <Input id="corp-company" {...register("company")} aria-invalid={!!errors.company} />
          {errors.company && <p className="text-sm text-destructive mt-1">{String(errors.company.message)}</p>}
        </div>
        <div>
          <Label htmlFor="businessUnit">Business Unit(s)/Site(s) *</Label>
          <Input id="businessUnit" {...register("businessUnit")} aria-invalid={!!errors.businessUnit} />
          {errors.businessUnit && <p className="text-sm text-destructive mt-1">{String(errors.businessUnit.message)}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="domains">Domains of Interest *</Label>
        <VoiceInputWrapper onTranscript={(text) => setValue("domains", text)}>
          <Textarea id="domains" {...register("domains")} rows={3} aria-invalid={!!errors.domains} className="pr-12" />
        </VoiceInputWrapper>
        {errors.domains && <p className="text-sm text-destructive mt-1">{String(errors.domains.message)}</p>}
      </div>

      <div>
        <Label htmlFor="problems">Problem Statements (Optional)</Label>
        <VoiceInputWrapper onTranscript={(text) => setValue("problems", text)}>
          <Textarea id="problems" {...register("problems")} rows={4} className="pr-12" />
        </VoiceInputWrapper>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="budget">Pilot Budget Guardrails *</Label>
          <Input id="budget" {...register("budget")} placeholder="e.g., $50K-200K" aria-invalid={!!errors.budget} />
          {errors.budget && <p className="text-sm text-destructive mt-1">{String(errors.budget.message)}</p>}
        </div>
        <div>
          <Label htmlFor="dataLevel">Data Classification Level *</Label>
          <Input id="dataLevel" {...register("dataLevel")} placeholder="e.g., Public, Confidential" aria-invalid={!!errors.dataLevel} />
          {errors.dataLevel && <p className="text-sm text-destructive mt-1">{String(errors.dataLevel.message)}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="corp-email">Contact Email *</Label>
        <Input id="corp-email" type="email" {...register("email")} aria-invalid={!!errors.email} />
        {errors.email && <p className="text-sm text-destructive mt-1">{String(errors.email.message)}</p>}
      </div>

      <Button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
        {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</> : "Submit Partnership Request"}
      </Button>
    </form>
  );
};

export const InvestorForm = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(investorSchema),
  });

  const onSubmit = async (data: z.infer<typeof investorSchema>) => {
    setLoading(true);
    try {
      // Mock API endpoint - logs to console and returns success
      console.log("Investor Deck Request Submitted:", JSON.stringify(data, null, 2));
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      toast({ title: "Deck request received!", description: "We'll send it over shortly." });
      reset();
    } catch (error) {
      toast({ title: "Error", description: "Something went wrong", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" id="investor-form">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="firmType">Firm Type *</Label>
          <Input id="firmType" {...register("firmType")} placeholder="VC, Angel, Family Office, LP" aria-invalid={!!errors.firmType} />
          {errors.firmType && <p className="text-sm text-destructive mt-1">{String(errors.firmType.message)}</p>}
        </div>
        <div>
          <Label htmlFor="checkSize">Check Size *</Label>
          <Input id="checkSize" {...register("checkSize")} placeholder="e.g., $250K-2M" aria-invalid={!!errors.checkSize} />
          {errors.checkSize && <p className="text-sm text-destructive mt-1">{String(errors.checkSize.message)}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="stage">Stage Focus *</Label>
          <Input id="stage" {...register("stage")} placeholder="Pre-seed, Seed, Series A, etc." aria-invalid={!!errors.stage} />
          {errors.stage && <p className="text-sm text-destructive mt-1">{String(errors.stage.message)}</p>}
        </div>
        <div>
          <Label htmlFor="geography">Geography *</Label>
          <Input id="geography" {...register("geography")} placeholder="e.g., North America, Global" aria-invalid={!!errors.geography} />
          {errors.geography && <p className="text-sm text-destructive mt-1">{String(errors.geography.message)}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="inv-email">Contact Email *</Label>
        <Input id="inv-email" type="email" {...register("email")} aria-invalid={!!errors.email} />
        {errors.email && <p className="text-sm text-destructive mt-1">{String(errors.email.message)}</p>}
      </div>

      <Button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
        {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</> : "Request Investor Deck"}
      </Button>
    </form>
  );
};
