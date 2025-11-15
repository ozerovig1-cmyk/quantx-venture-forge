import { Calendar } from "lucide-react";

const Timeline = () => {
  const timeline = [
    { phase: "Applications open", date: "January 15, 2025" },
    { phase: "Shortlist & interviews", date: "Week of Jan 29" },
    { phase: "Pilot design sprint", date: "Weeks 1–3 (Feb)" },
    { phase: "Pilot execution", date: "Weeks 4–10 (Feb-Apr)" },
    { phase: "Buy Day / Demo Day", date: "Week 12 (Late April)" },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-accent/20 via-brand/20 to-accent/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-center">
            Cohort Timeline
          </h2>

          <div className="space-y-6 mb-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-card p-6 rounded-xl border border-border">
                <div className="bg-accent/20 text-accent rounded-full p-3 mt-1">
                  <Calendar size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">{item.phase}</h3>
                  <p className="text-muted-foreground">{item.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-accent/20 to-brand/20 border border-accent/30 rounded-xl p-6 text-center">
            <p className="text-foreground font-medium">
              <span className="text-accent font-bold">Rolling acceptance</span> for exceptional fits — reach out anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
