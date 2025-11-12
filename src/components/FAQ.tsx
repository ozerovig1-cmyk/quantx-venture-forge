import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const FAQ = () => {
  const faqs = [{
    question: "Who should apply?",
    answer: "Early to growth-stage startups with B2B/enterprise focus, working on AI, data infrastructure, automation, or vertical SaaS. If you're solving real enterprise problems, we want to hear from you."
  }, {
    question: "What about equity and fees?",
    answer: "We operate venture-client pilots where corporates become customers first. Equity arrangements depend on deal type and are not required for pilot participation. Our focus is on getting you revenue, not just investment."
  }, {
    question: "How do you handle IP and data security?",
    answer: "We follow enterprise data-handling standards and BU-approved scopes. All pilots include clear IP ownership terms, data classification protocols, and security reviews aligned with corporate requirements."
  }, {
    question: "What do corporate partners need to commit?",
    answer: "A sponsoring business unit, clear pilot KPIs, defined success criteria, and a decision gate for paid deployment. We work with you to structure pilots that have real budget and procurement pathways."
  }, {
    question: "How can investors participate?",
    answer: "Access to cohort data room, detailed pilot KPIs and traction metrics, and co-invest opportunities where applicable. We provide transparency into enterprise validation signals that matter for B2B investing."
  }, {
    question: "What makes this different from other accelerators?",
    answer: "We're venture-client focused: corporates engage as customers, not just observers. Every pilot is designed with a clear path to paid deployment, not just a demo day presentation. Revenue > runway."
  }, {
    question: "What stage should startups be at?",
    answer: "Ideal for startups with an MVP or early product, some initial traction, and serious about enterprise GTM. Pre-seed to Series A typically fits best, but we evaluate based on fit rather than strict stage criteria."
  }];
  return <section id="faqs" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-foreground text-center md:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => <Accordion key={index} type="single" collapsible>
                <AccordionItem value={`item-${index}`} className="bg-card border border-border rounded-2xl px-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-lg text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>)}
          </div>
        </div>
      </div>
    </section>;
};
export default FAQ;