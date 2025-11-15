import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const MegaCTA = () => {
  const scrollToApply = (tabValue: string) => {
    // Update URL hash to trigger tab change
    window.location.hash = `apply-${tabValue}`;

    // Scroll to the application section
    const element = document.getElementById("apply");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="py-12 md:py-20 bg-gradient-to-br from-primary via-accent to-teal relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/data-infrastructure.jpg')] bg-cover bg-center opacity-10" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 rounded-none">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            From Pilot to Paid Deployment
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join the accelerator where enterprise validation meets revenue acceleration
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={() => scrollToApply("startup")} className="bg-white hover:bg-white/90 shadow-xl text-slate-700 font-medium text-base">
              Apply as Startup
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" onClick={() => scrollToApply("corporate")} variant="outline" className="border-white hover:bg-white text-slate-700 font-medium text-base">
              Partner as Corporate
            </Button>
            <Button size="lg" onClick={() => scrollToApply("investor")} variant="outline" className="border-white hover:bg-white text-slate-700 font-medium text-base">
              Invest with Us
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default MegaCTA;