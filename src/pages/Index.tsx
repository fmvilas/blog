import EarlyReaderNotice from '@/components/book/EarlyReaderNotice';
import NavBar from '@/components/book/NavBar';
import { Subscribe } from '@/components/book/Subscribe';
import Footer from '@/components/Footer';
import { Logo } from '@/components/logo';
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

const Home = () => {
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
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="/shift"
                className="flex items-center gap-2 shrink-0 text-sm font-semibold text-book-darkGray hover:text-book-secondary"
              >
                <span className="text-xl">👀 📖 👉</span><div className="flex items-center gap-2"><Logo /><span className="text-xl font-bold">Shift</span></div>
              </a>
            </nav>
          </header>
          <div className="flex flex-col items-center mb-16 md:mb-32 md:mt-24">
            <div className="flex flex-col w-full items-center justify-between">
              <div className="flex w-full">
                <div className="flex flex-col xl:mr-16">
                  <h1 className="text-3xl md:text-5xl md:leading-normal xl:text-5xl xl:leading-normal font-bold text-book-darkGray mb-4">
                    Go behind the scenes of writing <a className="text-book-secondary" href="/shift">Shift</a> and get expert takes on <span className="text-indigo-600">Event-Driven Architecture</span> every week.
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
          <div className="mb-16 md:mb-24">
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
          
          <Footer />
        </div>
      </main>
    </>
  )
}

export default Home;