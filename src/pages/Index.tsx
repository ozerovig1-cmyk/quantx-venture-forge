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
const Index = () => {
  useEffect(() => {
    document.title = "QuantXlr8 | Venture-Client Accelerator - From Pilot to Paid Deployment";
  }, []);
  return <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content">
        <Hero />
        <Startups />
        <Corporates />
        <Investors />
        <ProgramSnapshot />
        <CaseStudies />
        <FAQ className="mx-0 my-0" />
        <ApplicationForms />
        <MegaCTA />
      </main>
      <Footer />
    </div>;
};
export default Index;