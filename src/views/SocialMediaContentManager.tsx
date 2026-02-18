import Notice from '@/components/Notice';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { MapPin, Euro, Briefcase, Mail, ArrowLeft } from 'lucide-react';

const SocialMediaContentManager = () => {
  return (
    <>
      <Notice />
      <main className="relative w-screen py-4">
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="absolute h-full w-full bg-[radial-gradient(#1D3557_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        </div>
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

          {/* Back to Jobs */}
          <div className="mb-8">
            <a href="/jobs" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Open Positions
            </a>
          </div>

          {/* Job Header */}
          <div className="mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
              <span>🟢</span>
              I'm Hiring
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Social Media & Content Manager
            </h1>
            <div className="flex flex-wrap gap-4 text-foreground/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-indigo-600" />
                <span>100% Remote | Badajoz, Spain Preferred</span>
              </div>
              <div className="flex items-center gap-2">
                <Euro className="w-5 h-5 text-indigo-600" />
                <span>€1200 - €2000/month (Net)</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-indigo-600" />
                <span>Full-Time, Permanent</span>
              </div>
            </div>
          </div>

          {/* Apply CTA - Top */}
          <div className="mb-12 p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl border border-indigo-100">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Ready to Apply?
              </h3>
              <Button 
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-6 text-lg"
                onClick={() => window.location.href = 'mailto:fran@fmvilas.me?subject=Social Media %26 Content Manager Application'}
              >
                <Mail className="w-5 h-5 mr-2" />
                Apply Now
              </Button>
              <p className="text-sm text-foreground/60 mt-3">
                Email: fran@fmvilas.me
              </p>
            </div>
          </div>

          {/* Job Content */}
          <div className="prose prose-lg max-w-none">
            {/* Who I Am */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Who I Am
              </h2>
              <div className="text-foreground/80 leading-relaxed space-y-4">
                <p>
                  I'm Fran Mendez, an entrepreneur, creator, and thought leader. I'm building a personal brand and new businesses.
                </p>
                <p>
                  My content is about my journey: building a business, lifestyle design, mental health, and what it means to be a creator today. I also share some insights from my background in engineering, but this is not the main focus.
                </p>
                <p>
                  This is a 100% remote position.
                </p>
                <p>
                  That said, I am based in Badajoz, Spain. If you are also in Badajoz, that's a huge plus, as we'll be able to meet and collaborate in person. This is a preference, not a requirement.
                </p>
                <p className="font-medium">
                  To be clear: I create the content. You are the expert who takes my raw material—my essays, my recorded thoughts, and my videos—and turns it into compelling, valuable content for the world. You'll be my right-hand person, <strong>taking full ownership</strong> of my content operations.
                </p>
              </div>
            </section>

            {/* What You'll Be Doing */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                What You'll Be Doing
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Your core mission is to manage and distribute all my content. You'll take my raw material and give it a professional polish and a strategic plan.
              </p>
              <ul className="space-y-4 text-foreground/80">
                <li className="pl-2">
                  <strong className="text-foreground">Manage the Whole Process (Including Me):</strong> This is the most important part. I need you to <em>own</em> my content calendar. You'll be the one scheduling our brainstorming sessions, setting deadlines for me to deliver raw content (like essays or videos), and proactively managing the entire workflow. I'm hiring you to <em>lead</em> this part of my brand, not to wait for instructions.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">Content Strategy & Repurposing:</strong> This is your primary task. You'll take my essays and videos and masterfully slice them into sharp, engaging posts, threads, and articles. Our main channels will be <strong>LinkedIn, Bluesky, and YouTube</strong>. I'll also count on you to advise if we should expand to other platforms (like TikTok, etc.) where my message would work.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">Video Production (Start to Finish):</strong> This is huge. You'll manage the entire video workflow. You'll help me brainstorm <em>how</em> and <em>where</em> to shoot videos. If you're in Badajoz, you'll help me handle the in-person recording. If you're remote, I'll handle the recording, and you'll take the raw footage and edit it for <strong>YouTube</strong> and into multiple short, high-impact clips for our other channels.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">Idea Capturing:</strong> You'll schedule regular brainstorming sessions with me (via video call). Your job isn't to be the expert on my topics, but to be an expert at <em>capturing</em> my ideas. You'll record our conversations and pull out the best ideas, quotes, and soundbites to turn into future content.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">Newsletter Management:</strong> You will plan, manage, and schedule my weekly newsletter, making sure it delivers real value to my audience every single time.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">Design:</strong> You'll create all the design assets we need—think clean graphics, video thumbnails, and quote cards that look professional and fit my brand (using tools like Canva, Figma, etc.).
                </li>
              </ul>
            </section>

            {/* What I'm Looking For */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                What I'm Looking For
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                This role requires a specific mix of creative and technical skills.
              </p>
              <ul className="space-y-4 text-foreground/80">
                <li className="pl-2">
                  <strong className="text-foreground">A True Owner & Self-Manager:</strong> This is not a junior role where I'll be teaching you the ropes. You're the expert. I need you to be incredibly proactive, self-managing, and organized. You'll be managing your own schedule <em>and</em> my content deadlines. I'm looking for a partner who will free me up, not create more management work for me.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">Location:</strong> 100% Remote. As mentioned, I'm based in Badajoz, Spain. Candidates who are also here will have the strong advantage of being able to collaborate in person, which is a big plus. This is a preference, not a deal-breaker.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">Fluent in English:</strong> You must have professional fluency in both written and spoken English. All our content is 100% in English.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">Proven Content Portfolio:</strong> You have a portfolio that shows me you can do this. I want to see social media accounts you've managed (especially on LinkedIn or YouTube), videos you've edited, and graphics you've designed. I want to see you've <em>run this kind of operation before</em>.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">Solid Video Editing Skills:</strong> You know how to take long-form video and find the gold. You can edit clips that are engaging, well-paced, and look professional.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">Great Design Sense:</strong> You don't need to be a world-class graphic designer, but you know what looks good. You can create clean, modern, professional assets.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">Genuinely Curious:</strong> You should be interested in topics like lifestyle design, mental health, entrepreneurship, and the creator economy. An interest in technology is a small plus, but not a requirement.
                </li>
              </ul>
            </section>

            {/* What's in it for You */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                What's in it for You (The Offer)
              </h2>
              <ul className="space-y-3 text-foreground/80">
                <li className="pl-2">
                  A <strong className="text-foreground">Full-Time, Permanent Contract.</strong>
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">100% Remote Work.</strong>
                </li>
                <li className="pl-2">
                  A <strong className="text-foreground">Net Monthly Salary</strong> between €1200 and €2000, based directly on your experience and the quality of your portfolio.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">Unlimited Paid Holidays:</strong> I trust you to manage your time and take the rest you need to stay creative and productive.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">Creative Execution:</strong> I'll provide the raw material; you'll have a huge say in the strategy for how we edit, package, and share it.
                </li>
              </ul>
            </section>

            {/* How to Apply */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                How to Apply
              </h2>
              <div className="text-foreground/80 leading-relaxed space-y-4">
                <p>
                  Sound like you? I want to hear from you.
                </p>
                <p>
                  Please send an email to <strong className="text-foreground">fran@fmvilas.me</strong> with the exact subject line: <strong className="text-foreground">"Social Media & Content Manager Application"</strong>
                </p>
                <p>
                  In the email, include these two things:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>
                    A brief intro explaining <em>why</em> you are the perfect person for this specific role (and please mention your location, e.g., "Badajoz" or "Remote from [City]").
                  </li>
                  <li>
                    A link to your portfolio. <strong className="text-foreground">This is essential.</strong> I need to see examples of your video editing, graphic design, and social media work.
                  </li>
                </ol>
                <p className="font-medium text-foreground">
                  I'm excited to see what you've got.
                </p>
              </div>
            </section>
          </div>

          {/* Apply CTA - Bottom */}
          <div className="mb-16 p-8 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl border border-indigo-100">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Ready to Make an Impact?
              </h3>
              <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
                Send your application to <strong>fran@fmvilas.me</strong> with the subject line "Social Media & Content Manager Application"
              </p>
              <Button 
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-6 text-lg"
                onClick={() => window.location.href = 'mailto:fran@fmvilas.me?subject=Social Media %26 Content Manager Application'}
              >
                <Mail className="w-5 h-5 mr-2" />
                Apply Now
              </Button>
            </div>
          </div>
          
          <Footer />
        </div>
      </main>
    </>
  )
}

export default SocialMediaContentManager;

