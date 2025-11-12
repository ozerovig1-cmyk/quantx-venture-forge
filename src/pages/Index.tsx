import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Startups from "@/components/Startups";
import Corporates from "@/components/Corporates";
import Investors from "@/components/Investors";
import ProgramSnapshot from "@/components/ProgramSnapshot";
import CaseStudies from "@/components/CaseStudies";
import FAQ from "@/components/FAQ";
import ApplicationForms from "@/components/ApplicationForms";
import MegaCTA from "@/components/MegaCTA";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
};

const Index = () => {
  useEffect(() => {
    document.title = "QuantXlr8 | Venture-Client Accelerator - From Pilot to Paid Deployment";
  }, []);
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content">
        <Hero />
        <AnimatedSection delay={100}>
          <Startups />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <Corporates />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <Investors />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <ProgramSnapshot />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <CaseStudies />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <FAQ />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <ApplicationForms />
        </AnimatedSection>
        <MegaCTA />
      </main>
      <Footer />
    </div>
  );
};
export default Index;