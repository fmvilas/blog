const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          <div className="space-y-6 opacity-0 animate-slide-up">
            <h2 className="text-book-darkGray text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About the Book</h2>
            <div className="space-y-4 text-book-darkGray">
              <p className="leading-relaxed">
                <span className="font-semibold text-book-secondary">Shift</span>, by Fran Méndez, the creator of the AsyncAPI specification, is the definitive guide for senior engineers, architects, and technology leaders aiming to master and drive the successful adoption of event-driven architecture (EDA) within their organizations.
              </p>
              <p className="leading-relaxed">
                Many technical books focus narrowly on implementation specifics. Shift offers a more comprehensive and strategic playbook, forged from Fran's unparalleled experience in conceiving, developing, and fostering a global standard for event-driven APIs.
              </p>
              <p className="leading-relaxed">
                Drawing from his foundational work in establishing AsyncAPI (now a Linux Foundation standard) and his continued leadership in shaping the future of event-driven practices, Fran Méndez bridges the critical gap. <span className="font-semibold text-book-secondary">Shift</span> connects cutting-edge technical strategy with the pragmatic realities of enacting lasting organizational change, empowering you to lead your organization into the next era of distributed systems.
              </p>
            </div>
            {/* <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-book-secondary"></div>
                <span className="text-book-darkGray font-medium">400+ pages</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-book-secondary"></div>
                <span className="text-book-darkGray font-medium">25+ case studies</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-book-secondary"></div>
                <span className="text-book-darkGray font-medium">Code examples</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-book-secondary"></div>
                <span className="text-book-darkGray font-medium">Architecture diagrams</span>
              </div>
            </div> */}
          </div>
          <div className="space-y-12 opacity-0 animate-slide-up animate-delay-300">
            <div className="space-y-4">
              <h3 className="text-book-darkGray text-2xl font-bold">This book uniquely equips you to:</h3>
              <ul className="space-y-4">
                {[
                  <span><strong>Champion the value of EDA:</strong> Learn how to effectively advocate for event-driven approaches by articulating their benefits with the clarity and authority that comes from the creator of a foundational EDA specification.</span>,
                  <span><strong>Design with foresight:</strong> Move beyond ad-hoc solutions and design robust, scalable, and interoperable event-driven systems, informed by the principles that underpin AsyncAPI.</span>,
                  <span><strong>Implement for impact:</strong> Navigate the complexities of integrating EDA in real-world enterprise environments, drawing on insights from the ongoing evolution of AsyncAPI and its adoption across diverse industries.</span>,
                ].map((topic, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-medium">{index + 1}</span>
                    </div>
                    <span className="text-book-darkGray">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-book-darkGray text-2xl font-bold">Key Topics</h3>
              <ul className="space-y-4">
                {[
                  "Building the business case for event-driven architecture",
                  "Navigating organizational resistance to architectural change",
                  "Technical patterns for incremental adoption",
                  "Selecting the right technologies for your context",
                  "Measuring success and demonstrating value",
                  "Common pitfalls and how to avoid them",
                  "Scaling teams and knowledge across your organization"
                ].map((topic, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-medium">{index + 1}</span>
                    </div>
                    <span className="text-book-darkGray">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
