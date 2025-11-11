import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StartupForm, CorporateForm, InvestorForm } from "@/components/Forms";

const ApplicationForms = () => {
  return (
    <section id="apply" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-center">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Choose your path below. We review applications on a rolling basis and respond within 48 hours.
          </p>

          <Tabs defaultValue="startup" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="startup">Startup</TabsTrigger>
              <TabsTrigger value="corporate">Corporate</TabsTrigger>
              <TabsTrigger value="investor">Investor</TabsTrigger>
            </TabsList>

            <TabsContent value="startup" className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h3 className="text-2xl font-bold mb-6">Apply as a Startup</h3>
              <StartupForm />
            </TabsContent>

            <TabsContent value="corporate" className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h3 className="text-2xl font-bold mb-6">Partner as a Corporate</h3>
              <CorporateForm />
            </TabsContent>

            <TabsContent value="investor" className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h3 className="text-2xl font-bold mb-6">Request Investor Deck</h3>
              <InvestorForm />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForms;
