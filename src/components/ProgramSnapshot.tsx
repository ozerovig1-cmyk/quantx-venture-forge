import { Search, ListChecks, Lightbulb, Rocket, DollarSign } from "lucide-react";

const ProgramSnapshot = () => {
  const steps = [
    { icon: Search, title: "Discover", description: "Match startups to corporate use-cases" },
    { icon: ListChecks, title: "Shortlist", description: "Technical and business fit review" },
    { icon: Lightbulb, title: "Design POC", description: "Define success criteria and KPIs" },
    { icon: Rocket, title: "Run Pilot", description: "Execute in production environment" },
    { icon: DollarSign, title: "Convert", description: "Paid deployment and MSA" },
  ];

  return (
    <section id="program" className="py-12 md:py-16 bg-gradient-to-br from-accent/10 via-brand/10 to-accent/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
            Program Snapshot
          </h2>

          <div className="grid md:grid-cols-5 gap-6 mb-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-accent text-accent-foreground rounded-full p-4 mb-4">
                      <Icon size={32} />
                    </div>
                    <h3 className="font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold mb-6 text-card-foreground">What we provide</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Matchmaking to enterprise sponsors",
                "Pilot design & success criteria",
                "Security & compliance coaching",
                "AI/ML technical advisory",
                "Procurement navigation",
                "Fundraising preparation",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-brand/20 text-brand rounded-full p-1 mt-0.5">
                    <ListChecks size={16} />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSnapshot;
