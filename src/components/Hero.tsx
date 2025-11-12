import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent py-12 md:py-20">
      <div className="absolute inset-0 bg-[url('/images/hero-collaboration.jpg')] bg-cover bg-center opacity-10" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">From MVP to ScaleUp</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed">We're a thematic Corporate Venture Accelerator: we strategiclaly select aligned startups with MVP to large enterprise BUs to run real-life corporate pilots that convert into revenue generating Scaleups — not a typical Spray and Pray approach</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" onClick={() => scrollToSection("startup-form")} className="bg-white hover:bg-white/90 font-semibold shadow-xl text-slate-700 text-base">
              Apply as Startup
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" onClick={() => scrollToSection("corporate-form")} variant="outline" className="border-white hover:bg-white text-slate-700 font-semibold text-base">
              Partner as Corporate
            </Button>
            <Button size="lg" onClick={() => scrollToSection("investor-form")} variant="outline" className="border-white hover:bg-white font-semibold text-slate-700 text-base">Invest with Us</Button>
          </div>

          
        </div>
      </div>
    </section>;
};
export default Hero;