import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const MegaCTA = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-accent to-teal relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/data-infrastructure.jpg')] bg-cover bg-center opacity-10" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 rounded-none">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            From Pilot to Paid Deployment
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join the accelerator where enterprise validation meets revenue acceleration
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mx-[33px] my-[2px] px-[11px] py-0">
            <Button size="lg" onClick={() => scrollToSection("startup-form")} className="bg-white text-primary hover:bg-white/90 font-semibold shadow-xl text-lg px-8 my-0 mx-[300px]">
              Apply as Startup
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" onClick={() => scrollToSection("corporate-form")} variant="outline" className="border-2 border-white hover:bg-white font-semibold px-8 text-slate-600 text-lg mx-[300px]">
              Partner as Corporate
            </Button>
            <Button size="lg" onClick={() => scrollToSection("investor-form")} variant="outline" className="border-2 border-white hover:bg-white font-semibold px-8 text-lg text-slate-600 mx-[300px]">Invest with Us</Button>
          </div>
        </div>
      </div>
    </section>;
};
export default MegaCTA;