const siteMetadata = {
  title: "Fran Mendez's Mailing List",
  author: 'Fran Mendez',
  headerTitle: 'Fran Mendez',
  description:
    'Get an opinion article every Sunday about engineering, design, and life. I\'m Fran Méndez, creator of AsyncAPI, the industry standard for describing asynchronous APIs. Put your email below and I\'ll make sure you always learn something new every week.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.fmvilas.me',
  siteRepo: 'https://github.com/fmvilas/blog',
  siteLogo: '',
  image: '/static/images/opengraph.png',
  socialBanner: '/static/images/opengraph.png',
  email: 'fran@fmvilas.me',
  github: 'https://github.com/fmvilas',
  bluesky: 'https://bsky.app/profile/fmvilas.me',
  youtube: 'https://youtube.com/fmvilas',
  linkedin: 'https://www.linkedin.com/in/fmvilas',
  mastodon: 'https://social.fmvilas.me/@fran',
  locale: 'en-US',
  analytics: {
    googleAnalyticsId: 'G-BXMJWVVSG3', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    provider: '',
  },
  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: '', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: '',
      // theme when dark mode
      darkTheme: '',
    },
    disqusConfig: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = siteMetadata
