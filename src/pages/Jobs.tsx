import Notice from '@/components/Notice';
import Footer from '@/components/Footer';
import { PageSEO } from '@/components/SEO'
import { Button } from "@/components/ui/button";
import { MapPin, Euro, Briefcase, ArrowRight } from 'lucide-react';

const Jobs = () => {
  const jobOpenings = [
    {
      id: 'social-media-and-content-manager',
      title: 'Social Media & Content Manager',
      location: '100% Remote | Badajoz, Spain Preferred',
      compensation: '€1200 - €2000/month (Net)',
      type: 'Full-Time, Permanent',
      description: 'Join me as my right-hand person to manage content strategy, video production, and distribution across LinkedIn, Bluesky, and YouTube.',
      url: '/jobs/social-media-and-content-manager',
      isOpen: true
    }
  ];

  const openPositions = jobOpenings.filter(job => job.isOpen);

  return (
    <>
      <Notice />
      <main className="relative w-screen py-4">
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="absolute h-full w-full bg-[radial-gradient(#1D3557_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        </div>
        <PageSEO 
          path="/jobs" 
          title="Join My Team - Fran Méndez" 
          description="Explore open positions and join me in building something great. 100% remote opportunities available." 
        />
        <div className="relative max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0 z-10">
          {/* Header */}
          <header className="flex justify-between items-center mb-8 md:mb-16">
            <a href="/" className="w-full flex">
              <img
                src="/static/images/signature.png"
                alt="Fran Méndez"
                className="h-16"
              />
            </a>
          </header>

          {/* Page Header */}
          <div className="mb-12 md:mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
              <span>💼</span>
              Careers
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Join My Team
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
              I'm building something great and looking for talented people to join the journey. All positions are 100% remote.
            </p>
          </div>

          {/* Job Listings */}
          <div className="mb-16">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Open Positions
              </h2>
              <p className="text-foreground/70">
                {openPositions.length} {openPositions.length === 1 ? 'position' : 'positions'} available
              </p>
            </div>

            {openPositions.length > 0 ? (
              <div className="space-y-6">
                {openPositions.map((job) => (
                  <div 
                    key={job.id}
                    className="group bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:border-indigo-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-indigo-600 transition-colors">
                              {job.title}
                            </h3>
                            <div className="flex flex-wrap gap-4 text-sm text-foreground/70 mb-4">
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>{job.location}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Euro className="w-4 h-4" />
                                <span>{job.compensation}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Briefcase className="w-4 h-4" />
                                <span>{job.type}</span>
                              </div>
                            </div>
                            <p className="text-foreground/80 leading-relaxed">
                              {job.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <Button 
                          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 w-full md:w-auto"
                          onClick={() => window.location.href = job.url}
                        >
                          View Details
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-gray-50 rounded-2xl">
                <p className="text-foreground/60 text-lg">
                  No open positions at the moment. Check back soon!
                </p>
              </div>
            )}
          </div>

          {/* Why Join Section */}
          <div className="mb-16 p-8 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl border border-indigo-100">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              Why Work With Me?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🌍</div>
                <h3 className="font-semibold text-foreground mb-2">100% Remote</h3>
                <p className="text-sm text-foreground/70">
                  Work from anywhere. I trust you to manage your time and deliver great results.
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🏖️</div>
                <h3 className="font-semibold text-foreground mb-2">Unlimited Holidays</h3>
                <p className="text-sm text-foreground/70">
                  Take the time you need to rest and recharge. No arbitrary limits.
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="font-semibold text-foreground mb-2">Real Ownership</h3>
                <p className="text-sm text-foreground/70">
                  I'm looking for partners, not employees. Your ideas and expertise matter.
                </p>
              </div>
            </div>
          </div>
          
          <Footer />
        </div>
      </main>
    </>
  )
}

export default Jobs;
