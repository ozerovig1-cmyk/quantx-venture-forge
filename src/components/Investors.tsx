import { Button } from "@/components/ui/button";
import ValueCard from "@/components/ValueCard";
import { Telescope, TrendingUp, Award, ArrowRight } from "lucide-react";

const Investors = () => {
  const scrollToForm = () => {
    const element = document.getElementById("investor-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="investors" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Enterprise-validated deal flow
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <ValueCard
              icon={Telescope}
              title="Proprietary Pipeline"
              description="Deal flow built from real corporate problem statements and active pilots. See what enterprises are actually buying."
            />
            <ValueCard
              icon={TrendingUp}
              title="Strong Signal"
              description="Paid usage and BU diligence provide early traction validation. Optional co-invest and sidecar opportunities."
              accentColor="teal"
            />
            <ValueCard
              icon={Award}
              title="Portfolio Discipline"
              description="Focus on B2B traction and enterprise monetization. Every startup is prepared for enterprise sales cycles."
            />
          </div>

          <Button 
            size="lg" 
            onClick={scrollToForm}
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
          >
            Request Investor Deck
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Investors;
