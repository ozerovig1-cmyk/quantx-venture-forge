import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  const scrollToApply = (tabValue: string) => {
    window.location.hash = `apply-${tabValue}`;
    const element = document.getElementById("apply");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="relative overflow-hidden py-12 md:py-20 bg-gradient-to-br from-accent via-accent/80 to-brand">
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">From Idea to ScaleUp</h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl leading-relaxed">We're a thematic Corporate Venture Accelerator: we strategically select aligned rockstar founders to address large enterprise pain points to run real-life corporate pilots that convert into revenue generating Scaleups                                                                                                                                                                                                                                                                                                                                  </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => scrollToApply("startup")} className="bg-white hover:bg-white/90 font-semibold shadow-xl text-base text-accent">
              Apply as Startup
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" onClick={() => scrollToApply("corporate")} variant="outline" className="bg-white hover:bg-white/90 font-semibold shadow-xl text-base text-accent border-white">
              Partner as Corporate
            </Button>
            <Button size="lg" onClick={() => scrollToApply("investor")} variant="outline" className="bg-white hover:bg-white/90 font-semibold shadow-xl text-base text-accent border-white">
              Invest with Us
            </Button>
          </div>

          
        </div>
      </div>
    </section>;
};
export default Hero;