import { CheckCircle } from 'lucide-react';

const AudienceSection = () => {
  return (
    <section id="audience" className="py-16 md:py-24 bg-book-primary text-book-darkGray">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 opacity-0 animate-slide-up">
          <h2 className="text-book-lightPink text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Who This Book Is For</h2>
          <p className="mt-4 text-book-lightPink/80 md:text-xl">
            Shift is specifically crafted for experienced software professionals who want to lead architectural transformation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 animate-slide-up animate-delay-300">
          <div className="bg-white/90 backdrop-blur-sm border border-book-primary/30 rounded-xl p-6 hover:bg-white transition-colors shadow-md">
            <h3 className="text-xl font-bold text-book-secondary mb-3">Senior Software Engineers</h3>
            <ul className="space-y-3">
              {[
                "Looking to expand their architectural influence",
                "Tasked with modernizing legacy systems",
                "Building credibility for technical decisions",
                "Seeking to align technical direction with business goals"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-book-gold flex-shrink-0 mt-0.5" />
                  <span className="text-book-darkGray">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm border border-book-primary/30 rounded-xl p-6 hover:bg-white transition-colors shadow-md">
            <h3 className="text-xl font-bold text-book-secondary mb-3">Software Architects</h3>
            <ul className="space-y-3">
              {[
                "Advocating for modern architectural approaches",
                "Building consensus across engineering teams",
                "Creating roadmaps for incremental adoption",
                "Balancing technical debt with new initiatives"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-book-gold flex-shrink-0 mt-0.5" />
                  <span className="text-book-darkGray">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm border border-book-primary/30 rounded-xl p-6 hover:bg-white transition-colors shadow-md md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold text-book-secondary mb-3">Engineering Leaders</h3>
            <ul className="space-y-3">
              {[
                "Sponsoring architectural transformation initiatives",
                "Managing the organizational impact of technical change",
                "Building capabilities for future scalability",
                "Translating technical benefits to business outcomes"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-book-gold flex-shrink-0 mt-0.5" />
                  <span className="text-book-darkGray">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
