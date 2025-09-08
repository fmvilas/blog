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
          <div className="mx-auto aspect-[4/5] overflow-hidden p-20 flex items-center justify-center opacity-0 animate-fade-in animate-delay-300">
            <img src="/static/images/book-mockup.png" alt="Shift: The Playbook for Event-Driven Architecture Advocacy" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
