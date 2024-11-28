import Document, { Html, Head, Main, NextScript } from 'next/document'
const URL = 'https://www.fmvilas.me'
const TITLE = 'Fran Méndez\'s Mailing List'
const DESCRIPTION = 'Get an opinion article every Sunday about engineering, design, and life. I\'m Fran Méndez, creator of AsyncAPI, the industry standard for describing asynchronous APIs. Put your email below and I\'ll make sure you always learn something new every week.'
const IMAGE = '/static/images/opengraph.png'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth min-w-full w-screen">
        <Head>
          <meta property="og:type" content="website" />
          <meta property="og:title" content={TITLE} />
          <meta property="og:url" content={URL} />
          <meta property="og:image" content={IMAGE} />
          <meta property="og:description" content={DESCRIPTION} />

          {/* <!-- For Google --> */}
          <meta name="description" content={DESCRIPTION} />
          <meta name="keywords" content="newsletter, opinion, engineering, design, life, asyncapi, api, kafka, mqtt, amqp, rabbitmq, pubsub, messaging, event-driven, eventcatalog" />
          <meta name="author" content="Fran Méndez" />
          <meta name="copyright" content="Fran Méndez" />
          <meta name="application-name" content={TITLE} />

          {/* <!-- For Facebook --> */} 
          <meta property="og:title" content={TITLE} />
          <meta property="og:type" content="article" />
          <meta property="og:image" content={IMAGE} />
          <meta property="og:url" content={URL} />
          <meta property="og:description" content={DESCRIPTION} />

          {/*   <!-- For Twitter --> */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={TITLE} />
          <meta name="twitter:description" content={DESCRIPTION} />
          <meta name="twitter:image" content={IMAGE} />

          <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <meta name="apple-mobile-web-app-title" content={TITLE} />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#ffc103" />
          <meta name="theme-color" content="#ffc103" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
            integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
            crossOrigin="anonymous"
          />
        </Head>
        <body className="min-w-full w-screen antialiased text-black bg-gradient-custom">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
