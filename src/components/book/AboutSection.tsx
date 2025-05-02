
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6 opacity-0 animate-slide-up">
            <h2 className="text-book-navy text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About the Book</h2>
            <div className="space-y-4 text-book-gray">
              <p className="leading-relaxed">
                <span className="font-semibold text-book-teal">Shift</span> is a comprehensive guide for senior engineers and architects who want to drive the adoption of event-driven architecture in their organizations.
              </p>
              <p className="leading-relaxed">
                Unlike other technical books that focus only on implementation details, Shift provides a complete playbook for advocating, designing, and implementing event-driven systems in complex enterprise environments.
              </p>
              <p className="leading-relaxed">
                Drawing from real-world experience across Fortune 500 companies and high-growth startups, this book bridges the gap between technical excellence and organizational change management.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-book-teal"></div>
                <span className="text-book-navy font-medium">400+ pages</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-book-teal"></div>
                <span className="text-book-navy font-medium">25+ case studies</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-book-teal"></div>
                <span className="text-book-navy font-medium">Code examples</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-book-teal"></div>
                <span className="text-book-navy font-medium">Architecture diagrams</span>
              </div>
            </div>
          </div>
          <div className="space-y-6 opacity-0 animate-slide-up animate-delay-300">
            <h3 className="text-book-navy text-2xl font-bold">Key Topics</h3>
            <ul className="space-y-4">
              {[
                "Building the business case for event-driven architecture",
                "Navigating organizational resistance to architectural change",
                "Technical patterns for incremental adoption",
                "Event storming and domain-driven design practices",
                "Selecting the right technologies for your context",
                "Measuring success and demonstrating value",
                "Common pitfalls and how to avoid them",
                "Scaling teams and knowledge across your organization"
              ].map((topic, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-book-amber flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-medium">{index + 1}</span>
                  </div>
                  <span className="text-book-gray">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
