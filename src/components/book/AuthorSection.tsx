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
                My journey with event-driven architecture wasn't theoretical. I created AsyncAPI because I was dealing with the real-world mess of distributed systems and couldn't find a good way to manage it. I needed a way to bring order to the chaos.
              </p>
              <p className="leading-relaxed">
                Turning that idea into the AsyncAPI Initiative, and eventually a Linux Foundation project, taught me a ton. The biggest lesson? Building great technology is only half the battle. The other half—the harder half—is getting people to understand, adopt, and agree on it. I had to learn how to navigate corporate pushback, build a community, and create a standard from scratch.
              </p>
              <p className="leading-relaxed">
                This book is where I share everything I learned from that process. It’s not just about the tech; it's the playbook of battle-tested strategies that helped teams all over the world succeed with EDA, even when it felt like an uphill climb.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
