import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        <div className="flex mb-8 space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
          <SocialIcon kind="github" href={siteMetadata.github} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
          <SocialIcon kind="bluesky" href={siteMetadata.bluesky} />
          <SocialIcon kind="mastodon" href={siteMetadata.mastodon} />
        </div>
        <div className="flex mb-8 space-x-2 text-sm text-purple-200">
          Made with 💛 by Fran Méndez
        </div>
      </div>
    </footer>
  )
}
