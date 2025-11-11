const CaseStudies = () => {
  const cases = [
    {
      title: "Industrial AI",
      image: "/images/industrial-ai.jpg",
      problem: "Unplanned downtime on critical assets",
      solution: "Edge model for anomaly detection",
      pilot: "30-day data ingest; success = 15% false-positive reduction",
      outcome: "21% reduction; extended to 3 plants with paid MSA",
      next: "Multi-year rollout plan signed",
    },
    {
      title: "Customer Ops Automation",
      image: "/images/customer-ops.jpg",
      problem: "High handle times in service center",
      solution: "LLM-assisted agent copilot with retrieval-augmented knowledge",
      pilot: "Sandbox integration; success = AHT −20%",
      outcome: "−24% AHT; purchase order issued for BU-wide deployment",
      next: "Full production deployment across 3 regions",
    },
  ];

  return (
    <section id="case-studies" className="py-20 md:py-32 bg-background">
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
