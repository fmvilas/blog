import EarlyReaderNotice from '@/components/book/EarlyReaderNotice';
import { Subscribe } from '@/components/book/Subscribe';
import Footer from '@/components/Footer';
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <EarlyReaderNotice />
      <main className="relative w-screen py-4">
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="absolute h-full w-full bg-[radial-gradient(#1D3557_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        </div>
        <PageSEO path="/" title={siteMetadata.title} description={siteMetadata.description} />
        <div className="relative max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-6xl xl:px-0 z-10">
          <header className="flex justify-between items-center mb-8">
            <div className="w-full flex">
              <img
                src="/static/images/signature.png"
                alt="Fran Méndez"
                className="h-16"
              />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="/shift"
                className="flex items-center gap-2 shrink-0 text-sm font-semibold text-book-darkGray hover:text-book-secondary"
                rel="noopener noreferrer"
              >
                Buy Shift
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-book-darkGray"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </header>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md border border-gray-200/20 rounded-lg mb-8 shadow-lg">
              <div className="px-4 py-2">
                <a
                  href="/shift"
                  className="block py-4 text-center text-base font-medium text-book-darkGray hover:text-book-secondary transition-colors border-b border-gray-200/30"
                  onClick={() => setMobileMenuOpen(false)}
                  rel="noopener noreferrer"
                >
                  Buy Shift
                </a>
              </div>
            </div>
          )}

          <div className="flex flex-col items-center mb-16 md:mb-32 md:mt-24">
            <div className="flex flex-col w-full items-center justify-between">
              <div className="flex w-full">
                <div className="flex flex-col xl:mr-16">
                  <h1 className="text-3xl md:text-5xl md:leading-normal xl:text-5xl xl:leading-normal font-bold text-book-darkGray mb-4">
                    Go behind the scenes of writing <a className="text-secondary" href="/shift">Shift</a> and get expert takes on <span className="text-indigo-600">Event-Driven Architecture</span> every week.
                  </h1>
                  <p className="text-book-darkGray text-lg mb-8 md:text-xl xl:text-2xl">
                    I'm Fran Méndez, creator of <a
                      href="https://asyncapi.com?utm_source=fmvilas.me&utm_medium=website&utm_campaign=homepage&utm_content=hero"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-indigo-600 hover:text-indigo-400"
                    >
                      AsyncAPI
                    </a> (the industry standard). Each week, I share what I'm learning in the EDA space, my direct thoughts on new tech, and practical advice for engineers.
                    {' '}
                    <span className="font-semibold">
                      Subscribe below
                    </span>
                    {' '}
                    for useful insights you can apply to your work.
                  </p>
                  <Subscribe uid="8e4cf78d34" formId="8024741" />
                </div>
                <img
                  src="/static/images/fran-illustration-hello.png"
                  alt="Welcome illustration"
                  className="hidden xl:block w-72"
                />
              </div>
            </div>
          </div>
          
          {/* Coming Soon: Shift Workshop Section */}
          <div className="hidden mb-16 md:mb-24">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-indigo-100">
              <div className="max-w-3xl mx-auto text-center">
                <div className="mb-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
                    <span>🚀</span>
                    Coming Soon
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-book-darkGray mb-4">
                    The <span className="text-indigo-600">Shift</span> Workshop
                  </h2>
                  <p className="text-lg md:text-xl text-book-darkGray/80 leading-relaxed">
                    I'm preparing an exclusive hands-on workshop based on my upcoming book. Get ready to dive deep into Event-Driven Architecture with practical exercises, real-world examples, and expert guidance.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 mb-6 border border-indigo-200">
                  <p className="text-book-darkGray font-medium mb-4">
                    Want to be the first to know when registration opens?
                  </p>
                  <p className="text-sm text-book-darkGray/70 mb-6">
                    Subscribe to my newsletter and get exclusive early access to workshop details, pricing, and registration.
                  </p>
                  <Subscribe uid="0304a946c9" formId="8168245" alignment="center" />
                </div>
                
                <p className="text-sm text-book-darkGray/60">
                  Workshop details and dates will be announced soon to newsletter subscribers.
                </p>
              </div>
            </div>
          </div>
          
          {/* Testimonials Section */}
          <div className="hidden mb-16 md:mb-24">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-book-darkGray mb-4">
                  What People <span className="text-indigo-600">Say</span>
                </h2>
                <p className="text-lg md:text-xl text-book-darkGray/80 max-w-2xl mx-auto">
                  Trusted by industry leaders and developers worldwide
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Testimonial 1 */}
                <div className="group bg-gradient-to-br from-white via-indigo-50/30 to-blue-50/30 rounded-2xl p-8 border border-indigo-100/50 shadow-sm transition-all duration-300">
                  <div className="flex flex-col h-full relative">
                    <div className="absolute -top-2 left-0 text-6xl text-indigo-200/50 font-serif">"</div>
                    <blockquote className="flex-grow relative">
                      <p className="text-lg text-book-darkGray/80 leading-relaxed mb-8 pt-6">
                        When I first learned how AsyncAPI came to be, I knew Fran was someone I wanted to connect with and collaborate with. His deep expertise in event-driven architecture has not only shaped an industry-standard specification, but also cultivated a thriving community around it. Whenever I need to have a deep, insightful conversation about event-driven systems, Fran is the person I turn to. Having worked with him, I can confidently recommend Fran for any organization looking to lead in this space.
                      </p>
                    </blockquote>
                    <footer className="mt-auto pt-4 border-t border-indigo-100/30">
                      <div className="flex items-center">
                        <img
                          src="/static/images/testimonials/david-boyne.png"
                          alt="David Boyne"
                          className="w-14 h-14 rounded-full mr-4 ring-2 ring-indigo-100 ring-offset-2"
                        />
                        <div>
                          <div className="font-semibold text-book-darkGray">David Boyne</div>
                          <div className="text-sm text-book-darkGray/70">Creator of EventCatalog</div>
                        </div>
                      </div>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>          
          
          <Footer />
        </div>
      </main>
    </>
  )
}

export default Home;