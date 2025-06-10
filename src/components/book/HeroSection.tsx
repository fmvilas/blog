import { Subscribe } from "./Subscribe";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-24 lg:py-32 text-book-darkGray">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4 opacity-0 animate-fade-in">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                <span className="text-book-secondary">Shift:</span> The Playbook for Event-Driven Architecture Advocacy
              </h1>
              <p className="max-w-[700px] text-book-darkGray/80 md:text-xl">
                Unlock your organization's potential through effective event-driven advocacy and actionable techniques.
              </p>
            </div>
            <div className="flex flex-col gap-3 pt-8 sm:flex-row opacity-0 animate-fade-in animate-delay-300">
              <Subscribe uid="e046de302e" formId="7915370" />
            </div>
          </div>
          <div className="mx-auto aspect-[4/5] overflow-hidden rounded-xl bg-gradient-to-br from-book-lightGreen/30 to-book-gold/20 border border-book-primary/30 p-8 flex items-center justify-center shadow-2xl opacity-0 animate-fade-in animate-delay-300">
            <div className="relative w-full h-full bg-white border border-book-primary/20 shadow-lg flex items-center justify-center rounded-md overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute h-full w-full bg-[linear-gradient(to_right,transparent_0%,#E63946_20%,transparent_40%)] [animation:shine_1.5s_infinite]"></div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-book-secondary text-lg font-medium mb-2">Coming Soon</h3>
                <h2 className="text-3xl font-bold mb-4">Shift</h2>
                <p className="text-sm text-book-darkGray/70">The Playbook for Event-Driven Architecture Advocacy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
