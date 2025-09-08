import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import EarlyReaderNotice from './Notice';

const NavBar = ({
  items,
}: {
  items: { name: string; href: string }[];
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <EarlyReaderNotice />
      <div className="container px-4 py-4 md:px-6">
        <div className="flex items-center justify-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {items.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium ${
                  isScrolled ? 'text-book-darkGray hover:text-book-secondary' : 'text-book-darkGray hover:text-book-secondary'
                } transition-colors`}
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:block" />
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={`text-book-darkGray`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/20">
          <div className="px-4 py-2">
            {items.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`block py-4 text-center text-base font-medium text-book-darkGray hover:text-book-secondary transition-colors ${
                  index !== items.length - 1 ? 'border-b border-gray-200/30' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
