import { PageSEO } from '@/components/SEO'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <SectionContainer>
        <div className="w-full pl-4 mb-8 flex">
          <img
            src="/static/images/mobile-header.png"
            alt="Fran Méndez's Mailing List"
            className="h-20"
          />
        </div>
        <div className="flex flex-col items-center mb-16 md:mb-32 md:mt-24">
          <div className="flex flex-col w-full items-center justify-between">
            <div className="flex w-full">
              <div className="flex flex-col xl:mr-16">
                <h1 className="text-3xl md:text-5xl md:leading-normal xl:text-6xl xl:leading-normal font-bold text-shadow-sm shadow-purple-900 text-white mb-4 alfa-slab-one-regular">
                  Get an opinion article <span className="text-pink-400">every Sunday</span> about{' '}
                  <span className="text-cyan-400 text-shadow-sm shadow-cyan-800">engineering</span>,{' '}
                  <span className="text-yellow-400 text-shadow-sm shadow-yellow-800">design</span>,
                  and <span className="text-green-400 text-shadow-sm shadow-green-800">life</span>.
                </h1>
                <p className="text-white text-lg md:text-xl xl:text-2xl">
                  I'm Fran Méndez, creator of{' '}
                  <a
                    href="https://asyncapi.com?utm_source=fmvilas.me&utm_medium=website&utm_campaign=homepage&utm_content=hero"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-yellow-400 hover:text-yellow-300"
                  >
                    AsyncAPI
                  </a>
                  , the industry standard for describing asynchronous APIs. Put your email below and
                  I'll make sure you always{' '}
                  <span className="bg-yellow-500 text-black font-semibold px-2">
                    learn something new every week
                  </span>
                  .
                </p>
                <a
                  href="https://gmail.us12.list-manage.com/subscribe?u=3cdae6aed726d2e7490aec739&id=41d4dd70bc"
                  className="mt-6 p-4 transition-colors duration-150 bg-pink-500 rounded-md font-bold text-white text-center hover:bg-yellow-500 hover:text-black focus:outline-none"
                >
                  Get me in!
                </a>
              </div>
              <img
                src="/static/images/fran-illustration-hello.png"
                alt="Welcome illustration"
                className="hidden xl:block w-72"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="mb-6 md:mb-8 md:pt-6 md:pb-8 space-y-2 md:space-y-5">
            <h1 className="text-pretty text-xl md:text-4xl font-bold text-gray-100 text-shadow-sm shadow-purple-900 alfa-slab-one-regular">
              Here is an example of what you'll get every week
            </h1>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li>
              <a href="https://mailchi.mp/26bd1e12ea67/fran-mndezs-mailing-list-radical-transparency">
                <article className="shadow-lg bg-cyan-600 bg-gradient-custom bg-blend-overlay rounded-2xl flex-1">
                  <div className="relative aspect-video sm:aspect-[4/2] lg:w-full lg:shrink-0">
                    <img
                      alt=""
                      src="/static/images/radical-transparency.png"
                      className="absolute inset-0 size-full rounded-2xl bg-gray-50 object-cover"
                    />
                    <time
                      dateTime="2022-02-04"
                      className="text-white/50 font-bold absolute bottom-4 left-6"
                    >
                      February 4, 2022
                    </time>
                  </div>
                </article>
              </a>
            </li>
          </ul>
        </div>
      </SectionContainer>
    </>
  )
}
