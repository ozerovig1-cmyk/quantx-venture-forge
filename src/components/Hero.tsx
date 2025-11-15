import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import floralBanner from "@/assets/floral-banner-1.jpg";
import floralAccent from "@/assets/floral-accent.jpg";
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="relative overflow-hidden py-12 md:py-20">
      {/* Gradient Background with Flowers */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand via-accent to-accent"></div>
      
      {/* Floral Banner Overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${floralBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'multiply'
        }}
      ></div>

      {/* Floral Accent - Bottom Right */}
      <div 
        className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 opacity-40"
        style={{
          backgroundImage: `url(${floralAccent})`,
          backgroundSize: 'contain',
          backgroundPosition: 'bottom right',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">From MVP to ScaleUp</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed">We're a thematic Corporate Venture Accelerator: we strategically select aligned startups with MVP to address large enterprise pain points to run real-life corporate pilots that convert into revenue generating Scaleups </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => scrollToSection("startup-form")} className="bg-white hover:bg-white/90 font-semibold shadow-xl text-base text-[#6470a4]">
              Apply as Startup
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" onClick={() => scrollToSection("corporate-form")} variant="outline" className="bg-white hover:bg-white/90 font-semibold shadow-xl text-base bg-white text-[#6470a4]">
              Partner as Corporate
            </Button>
            <Button size="lg" onClick={() => scrollToSection("investor-form")} variant="outline" className="bg-white hover:bg-white/90 font-semibold shadow-xl text-base bg-white text-[#6470a4]">
              Invest with Us
            </Button>
          </div>

          
        </div>
      </div>
    </section>;
};
export default Hero;