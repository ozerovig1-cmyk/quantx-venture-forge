import { Button } from "@/components/ui/button";
import ValueCard from "@/components/ValueCard";
import { Target, Shield, Brain, ArrowRight } from "lucide-react";
const Startups = () => {
  const scrollToForm = () => {
    const element = document.getElementById("startup-form");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="startups" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Customers, not just capital
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            Direct access to enterprise decision-makers, pilot budgets, and a path to purchase orders under a venture-client model (corporate buys/uses your tech without needing equity).
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <ValueCard icon={Target} title="Enterprise GTM" description="Security, compliance, and procurement readiness reviews to shorten sales cycles and accelerate your path to revenue." />
            <ValueCard icon={Brain} title="AI Advantage" description="Hands-on guidance on evaluation rubrics, MLOps, data governance, and model risk management." accentColor="teal" />
            <ValueCard icon={Shield} title="Founder-First" description="A practical, no-fluff approach to ship, learn, and win enterprise usage. Build products customers actually pay for." />
          </div>

          <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 mb-8">
            <blockquote className="text-lg italic text-foreground">
              "They didn't just mentor us — they got our pilot budget approved and helped us pass security on the first try."
            </blockquote>
            <p className="text-sm text-muted-foreground mt-2">— Series A Founder, Enterprise AI</p>
          </div>

          <Button size="lg" onClick={scrollToForm} className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base ">
            Apply Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>;
};
export default Startups;