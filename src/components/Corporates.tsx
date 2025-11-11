import { Button } from "@/components/ui/button";
import ValueCard from "@/components/ValueCard";
import { Filter, TrendingUp, Zap, ArrowRight } from "lucide-react";

const Corporates = () => {
  const scrollToForm = () => {
    const element = document.getElementById("corporate-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="corporates" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            De-risked innovation that maps to your P&L
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            Curated deal flow aligned to your use-cases and BU mandates — not spray-and-pray scouting.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <ValueCard
              icon={Filter}
              title="Curated Pipeline"
              description="Pre-vetted startups aligned to your specific use-cases and business unit requirements. No noise, just signal."
            />
            <ValueCard
              icon={TrendingUp}
              title="Trend Intelligence"
              description="Comprehensive insights across your vertical to inform roadmaps and strategic partner choices."
              accentColor="teal"
            />
            <ValueCard
              icon={Zap}
              title="Venture-Clienting"
              description="Buy/try before equity. Faster discovery to deployment cycle with clear ROI gates and measurable outcomes."
            />
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 mb-8">
            <blockquote className="text-lg italic text-foreground">
              "The pipeline was pre-vetted to our requirements and the pilot translated cleanly into a paid rollout."
            </blockquote>
            <p className="text-sm text-muted-foreground mt-2">— Innovation Director, Fortune 500 Industrial</p>
          </div>

          <Button 
            size="lg" 
            onClick={scrollToForm}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
          >
            Become a Corporate Partner
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Corporates;
