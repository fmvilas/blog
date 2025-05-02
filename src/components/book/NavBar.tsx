
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Book, Menu, X } from 'lucide-react';

const NavBar = () => {
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
      isScrolled ? 'bg-book-navy/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Book className={`h-6 w-6 ${isScrolled ? 'text-book-teal' : 'text-white'} mr-2`} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-white' : 'text-white'}`}>Shift</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: "About", href: "#about" },
              { name: "Author", href: "#author" },
              { name: "Audience", href: "#audience" },
              { name: "FAQ", href: "#faq" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium ${
                  isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-200 hover:text-white'
                } transition-colors`}
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          {/* Pre-order button (desktop) */}
          <div className="hidden md:block">
            <Button 
              className={`${
                isScrolled 
                  ? 'bg-book-teal text-white hover:bg-book-teal/90' 
                  : 'bg-white text-book-navy hover:bg-white/90'
              }`}
            >
              Pre-order
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={`text-white`}
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
        <div className="md:hidden bg-book-navy/95 backdrop-blur-md">
          <div className="px-4 py-6 space-y-1 divide-y divide-gray-700/50">
            {[
              { name: "About", href: "#about" },
              { name: "Author", href: "#author" },
              { name: "Audience", href: "#audience" },
              { name: "FAQ", href: "#faq" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 text-base font-medium text-gray-200 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4">
              <Button 
                className="w-full bg-book-teal text-white hover:bg-book-teal/90 mt-2" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Pre-order Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
