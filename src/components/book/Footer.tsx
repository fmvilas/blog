import { Book, MailIcon } from 'lucide-react';
import { Logo } from '../logo';
import { GitHubIcon, YouTubeIcon } from '../SocialIcons';
import { BlueskyIcon, LinkedInIcon } from '../SocialIcons';

const Footer = () => {
  return (
    <footer className="bg-book-darkGray text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col-reverse md:flex-row md:justify-between items-center">
          <p className="mt-2 text-sm text-gray-300">
            © {new Date().getFullYear()} Fran Méndez. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/fmvilas">
              <LinkedInIcon className="h-6 w-6 fill-white hover:scale-125 hover:fill-book-secondary transition-all duration-200" />
            </a>
            <a href="https://bsky.app/profile/fmvilas.me">
              <BlueskyIcon className="h-6 w-6 fill-white hover:scale-125 hover:fill-book-secondary transition-all duration-200" />
            </a>
            <a href="https://github.com/fmvilas">
              <GitHubIcon className="h-6 w-6 fill-white hover:scale-125 hover:fill-book-secondary transition-all duration-200" />
            </a>
            <a href="https://www.youtube.com/@fmvilas">
              <YouTubeIcon className="h-6 w-6 fill-white hover:scale-125 hover:fill-book-secondary transition-all duration-200" />
            </a>
            <a href="mailto:fran@fmvilas.me">
              <MailIcon className="h-6 w-6 hover:scale-125 hover:stroke-book-secondary transition-all duration-200" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;