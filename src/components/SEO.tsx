import siteMetadata from '@/data/siteMetadata'
import { Helmet } from 'react-helmet-async'

interface CommonSEOProps {
  path: string
  title: string
  description: string
  ogType: string
  ogImage: string | Array<{ url: string }>
  twImage: string
}

interface PageSEOProps {
  path: string
  title: string
  description: string
}

const CommonSEO = ({ path, title, description, ogType, ogImage, twImage }: CommonSEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="newsletter, opinion, engineering, design, life, asyncapi, api, kafka, mqtt, amqp, rabbitmq, pubsub, messaging, event-driven, eventcatalog"
      />
      <meta property="og:url" content={`${siteMetadata.siteUrl}${path}`} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      {Array.isArray(ogImage) ? (
        ogImage.map(({ url }) => <meta property="og:image" content={url} key={url} />)
      ) : (
        <meta property="og:image" content={ogImage} key={ogImage} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteMetadata.siteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twImage} />
    </Helmet>
  )
}

export const PageSEO = ({ path, title, description }: PageSEOProps) => {
  const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner
  const twImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner
  return (
    <CommonSEO
      path={path}
      title={title}
      description={description}
      ogType="website"
      ogImage={ogImageUrl}
      twImage={twImageUrl}
    />
  )
}
