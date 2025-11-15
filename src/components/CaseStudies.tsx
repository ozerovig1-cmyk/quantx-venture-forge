const CaseStudies = () => {
  const cases = [
    {
      title: "Real-Time Fraud Detection",
      image: "/images/industrial-ai.jpg",
      problem: "Growing fraud losses and false positives impacting customer experience",
      solution: "ML-powered real-time transaction monitoring with behavioral analytics",
      pilot: "90-day integration with payment gateway; success = 40% fraud detection improvement",
      outcome: "47% fraud reduction, 35% fewer false positives; enterprise license signed",
      next: "Multi-market expansion with cross-border payment integration",
    },
    {
      title: "AI-Powered Credit Risk Assessment",
      image: "/images/customer-ops.jpg",
      problem: "Manual underwriting bottlenecks and limited data utilization",
      solution: "Alternative data scoring model with explainable AI for regulatory compliance",
      pilot: "Pilot with 10K loan applications; success = 30% faster decisions",
      outcome: "42% reduction in processing time, 18% improved approval accuracy; production rollout approved",
      next: "Integration with core banking system across all business units",
    },
    {
      title: "Intelligent Document Processing",
      image: "/images/data-infrastructure.jpg",
      problem: "Manual KYC document verification causing 5-day customer onboarding delays",
      solution: "Computer vision + NLP for automated document extraction and verification",
      pilot: "60-day test with 5K accounts; success = 70% automation rate",
      outcome: "85% automation achieved, onboarding reduced to 24 hours; scaled to wealth management division",
      next: "Regional expansion with multi-language support for 12 markets",
    },
    {
      title: "Personalized Wealth Management",
      image: "/images/hero-collaboration.jpg",
      problem: "Low engagement with robo-advisor platform and declining AUM",
      solution: "Generative AI financial advisor with personalized portfolio recommendations",
      pilot: "3-month beta with 2K high-value clients; success = 25% engagement increase",
      outcome: "38% engagement lift, $120M AUM growth; full platform integration approved",
      next: "White-label solution for partner banks across 5 countries",
    },
  ];

  return (
    <section id="case-studies" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Case Studies
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            <strong>Venture-client in action:</strong> Pilots designed to convert to supplier relationships, transforming corporate innovation from exploration to execution.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {cases.map((caseStudy, index) => (
              <article key={index} className="bg-card rounded-2xl shadow-card overflow-hidden border border-border">
                <div className="aspect-video bg-muted relative">
                  <img 
                    src={caseStudy.image} 
                    alt={`${caseStudy.title} case study visualization`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-card-foreground">{caseStudy.title} (anonymized)</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-accent mb-1">Problem</h4>
                      <p className="text-muted-foreground">{caseStudy.problem}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-teal mb-1">Solution</h4>
                      <p className="text-muted-foreground">{caseStudy.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Pilot Setup</h4>
                      <p className="text-muted-foreground">{caseStudy.pilot}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-accent mb-1">Outcome</h4>
                      <p className="text-muted-foreground font-medium">{caseStudy.outcome}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-teal mb-1">Next Step</h4>
                      <p className="text-muted-foreground">{caseStudy.next}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
