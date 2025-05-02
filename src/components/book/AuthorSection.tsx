
import React from 'react';

const AuthorSection = () => {
  return (
    <section id="author" className="py-16 md:py-24 bg-book-primary/10">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16 items-center">
          <div className="mx-auto lg:mx-0 opacity-0 animate-slide-up">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-gradient-to-br from-book-lightPink to-book-secondary p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <div className="text-center p-4">
                  <span className="block text-book-secondary text-5xl font-bold">A.D.</span>
                  <span className="block text-book-darkGray text-sm mt-2">Author Photo</span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6 opacity-0 animate-slide-up animate-delay-300">
            <div>
              <h4 className="text-book-secondary text-lg font-medium">Meet the Author</h4>
              <h2 className="text-book-darkGray text-3xl font-bold tracking-tighter mt-1">Alex Dornfeld</h2>
              <p className="text-book-darkGray mt-2">Principal Architect & Event-Driven Systems Expert</p>
            </div>
            <div className="space-y-4 text-book-darkGray">
              <p className="leading-relaxed">
                With over 15 years of experience designing and implementing event-driven systems at scale, Alex has helped dozens of organizations transform their architecture to meet the demands of modern digital business.
              </p>
              <p className="leading-relaxed">
                As the former Chief Architect at TechCorp and advisor to multiple Fortune 500 companies, Alex has navigated the complex landscape of technical debt, organizational resistance, and scaling challenges that come with architectural evolution.
              </p>
              <p className="leading-relaxed">
                Now, Alex shares the battle-tested strategies that have helped teams succeed where others have failed, providing a blueprint for advocating and implementing event-driven architecture in even the most resistant organizations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
