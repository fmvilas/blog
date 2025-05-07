const AuthorSection = () => {
  return (
    <section id="author" className="py-16 md:py-24 bg-book-primary/10">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16 items-center">
          <div className="mx-auto lg:mx-0 opacity-0 animate-slide-up">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-gradient-to-br from-book-lightPink to-book-lightGreen p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <div className="text-center">
                  <img src="/fran.png" alt="Fran Mendez" className="w-full h-full object-cover rounded-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6 opacity-0 animate-slide-up animate-delay-300">
            <div>
              <h4 className="text-book-secondary text-lg font-medium">Meet the Author</h4>
              <h2 className="text-book-darkGray text-3xl font-bold tracking-tighter mt-1">Fran M&eacute;ndez</h2>
              <p className="text-book-darkGray mt-2">Creator of AsyncAPI</p>
            </div>
            <div className="space-y-4 text-book-darkGray">
              <p className="leading-relaxed">
                As the creator of AsyncAPI, Fran M&eacute;ndez has been pivotal in designing and fostering the adoption of event-driven systems at scale. Through this initiative, he has empowered countless organizations globally to transform their architectures and effectively meet the demands of modern digital business.
              </p>
              <p className="leading-relaxed">
                As the founder of the AsyncAPI Initiative (now a Linux Foundation project), Fran has navigated the complex landscape of establishing a new standard for asynchronous APIs, addressing the challenges of interoperability, and guiding the evolution of event-driven practices across the industry. His work stems from a direct need to solve the complexities he encountered in real-world distributed systems.
              </p>
              <p className="leading-relaxed">
                Now, through the AsyncAPI specification, its tools, and a vibrant community, Fran shares the battle-tested strategies and a clear blueprint that have helped teams worldwide succeed in advocating for and implementing robust event-driven architectures, even in organizations initially resistant to such transformative change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
