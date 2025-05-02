
import React from 'react';
import { Book } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-book-navy text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <Book className="h-6 w-6 text-book-teal mr-2" />
              <span className="text-xl font-bold">Shift</span>
            </div>
            <p className="mt-2 text-sm text-gray-300">
              © {new Date().getFullYear()} Publisher Name. All rights reserved.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-16">
            <div>
              <h3 className="text-sm font-medium text-book-teal mb-3">Navigation</h3>
              <ul className="space-y-2">
                {[
                  { name: "Home", href: "#" },
                  { name: "About", href: "#about" },
                  { name: "Author", href: "#author" },
                  { name: "FAQ", href: "#faq" },
                ].map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-book-teal mb-3">Connect</h3>
              <ul className="space-y-2">
                {[
                  { name: "Twitter", href: "#" },
                  { name: "LinkedIn", href: "#" },
                  { name: "GitHub", href: "#" },
                  { name: "Email", href: "#" },
                ].map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-sm font-medium text-book-teal mb-3">Legal</h3>
              <ul className="space-y-2">
                {[
                  { name: "Privacy Policy", href: "#" },
                  { name: "Terms of Service", href: "#" },
                  { name: "Cookies", href: "#" },
                ].map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
