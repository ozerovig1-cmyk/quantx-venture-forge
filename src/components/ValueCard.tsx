import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor?: "accent" | "teal";
}

const ValueCard = ({ icon: Icon, title, description, accentColor = "accent" }: ValueCardProps) => {
  const colorClass = accentColor === "teal" ? "text-teal" : "text-accent";
  const bgClass = accentColor === "teal" ? "bg-teal/10" : "bg-accent/10";

  return (
    <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-xl transition-shadow border border-border">
      <div className={`${bgClass} ${colorClass} rounded-xl p-3 w-fit mb-4`}>
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold mb-3 text-card-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default ValueCard;
