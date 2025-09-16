import { useEffect, useState } from 'react';
import Notice from '@/components/Notice';
import { Subscribe } from '@/components/Subscribe';
import Footer from '@/components/Footer';
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

const Commune = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    // Check if URL contains ?subscribed=1
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('subscribed') === '1') {
      setIsSubscribed(true);
      
      // Remove the query parameter from URL without page reload
      const newUrl = window.location.pathname;
      window.history.replaceState({}, '', newUrl);
    }
  }, []);

  return (
    <>
      <Notice />
      <main className="relative w-screen py-4">
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="absolute h-full w-full bg-[radial-gradient(#1D3557_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        </div>
        <PageSEO path="/" title={siteMetadata.title} description={siteMetadata.description} />
        <div className="relative max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-6xl xl:px-0 z-10">
          <div className="flex flex-col items-center mb-16 md:mb-32 md:mt-24">
            <div className="flex flex-col w-full md:w-2/3 items-center justify-between">
              <div className="flex flex-col text-center">
                <h1 className="text-3xl md:text-5xl md:leading-normal xl:text-5xl xl:leading-normal font-bold text-foreground mb-4">
                  The community your newsletter deserves
                </h1>
                <p className="text-foreground text-lg mb-8 md:text-xl xl:text-2xl">
                  Commune is the missing piece for modern creators. Add rich, threaded conversations, polls, and events right alongside your Kit, Beehiiv, or Mailchimp newsletter. No migration required.
                </p>
                {isSubscribed ? (
                  <div className="flex flex-col items-center justify-center p-6 bg-green-50 border border-green-200 rounded-lg">
                    <div className="text-green-600 text-lg font-medium mb-2">
                      ✅ Successfully subscribed!
                    </div>
                    <p className="text-green-700 text-sm">
                      Thank you for subscribing. You'll receive updates about Commune soon.
                    </p>
                  </div>
                ) : (
                  <Subscribe uid="463d7b16b5" formId="8565515" />
                )}
              </div>
            </div>
          </div>
          
          <Footer />
        </div>
      </main>
    </>
  )
}

export default Commune;