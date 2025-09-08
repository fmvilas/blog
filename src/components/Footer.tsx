import { GitHubIcon, LinkedInIcon, YouTubeIcon, MailIcon, BlueskyIcon } from './SocialIcons'

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        <div className="flex mb-8 space-x-4">
          <a href="https://www.linkedin.com/in/fmvilas">
            <LinkedInIcon className="h-6 w-6 fill-book-darkGray hover:scale-125 hover:fill-book-secondary transition-all duration-200" />
          </a>
          <a href="https://bsky.app/profile/fmvilas.me">
            <BlueskyIcon className="h-6 w-6 fill-book-darkGray hover:scale-125 hover:fill-book-secondary transition-all duration-200" />
          </a>
          <a href="https://github.com/fmvilas">
            <GitHubIcon className="h-6 w-6 fill-book-darkGray hover:scale-125 hover:fill-book-secondary transition-all duration-200" />
          </a>
          <a href="https://www.youtube.com/@fmvilas">
            <YouTubeIcon className="h-6 w-6 fill-book-darkGray hover:scale-125 hover:fill-book-secondary transition-all duration-200" />
          </a>
          <a href="mailto:fran@fmvilas.me">
            <MailIcon className="h-6 w-6 fill-book-darkGray hover:scale-125 hover:fill-book-secondary transition-all duration-200" />
          </a>
        </div>
        <div className="flex flex-col items-center mb-8 space-y-4">
          <div className="text-sm text-book-darkGray">
            Made with 💛 by Fran Méndez
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 