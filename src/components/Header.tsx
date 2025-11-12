import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };
  return <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus-ring">
        Skip to main content
      </a>
      
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          <img src="/brand/logo.svg" alt="QuantXlr8 logo" className="h-12" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          <button onClick={() => scrollToSection("startups")} className="text-sm font-medium text-foreground hover:text-accent transition-colors focus-ring">
            Startups
          </button>
          <button onClick={() => scrollToSection("corporates")} className="text-sm font-medium text-foreground hover:text-accent transition-colors focus-ring">
            Corporates
          </button>
          <button onClick={() => scrollToSection("investors")} className="text-sm font-medium text-foreground hover:text-accent transition-colors focus-ring">
            Investors
          </button>
          <button onClick={() => scrollToSection("program")} className="text-sm font-medium text-foreground hover:text-accent transition-colors focus-ring">
            Program
          </button>
          <button onClick={() => scrollToSection("case-studies")} className="text-sm font-medium text-foreground hover:text-accent transition-colors focus-ring">
            Case Studies
          </button>
          <button onClick={() => scrollToSection("faqs")} className="text-sm font-medium text-foreground hover:text-accent transition-colors focus-ring">
            FAQs
          </button>
          <Button onClick={() => scrollToSection("apply")} className="bg-accent text-accent-foreground hover:bg-accent/90">
            Apply
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden focus-ring p-2" aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={mobileMenuOpen}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && <nav className="md:hidden border-t border-border bg-card" aria-label="Mobile navigation">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection("startups")} className="text-left text-sm font-medium text-foreground hover:text-accent transition-colors focus-ring py-2">
              Startups
            </button>
            <button onClick={() => scrollToSection("corporates")} className="text-left text-sm font-medium text-foreground hover:text-accent transition-colors focus-ring py-2">
              Corporates
            </button>
            <button onClick={() => scrollToSection("investors")} className="text-left text-sm font-medium text-foreground hover:text-accent transition-colors focus-ring py-2">
              Investors
            </button>
            <button onClick={() => scrollToSection("program")} className="text-left text-sm font-medium text-foreground hover:text-accent transition-colors focus-ring py-2">
              Program
            </button>
            <button onClick={() => scrollToSection("case-studies")} className="text-left text-sm font-medium text-foreground hover:text-accent transition-colors focus-ring py-2">
              Case Studies
            </button>
            <button onClick={() => scrollToSection("faqs")} className="text-left text-sm font-medium text-foreground hover:text-accent transition-colors focus-ring py-2">
              FAQs
            </button>
            <Button onClick={() => scrollToSection("apply")} className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
              Apply
            </Button>
          </div>
        </nav>}
    </header>;
};
export default Header;