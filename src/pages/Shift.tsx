
import React, { useEffect } from 'react';
import NavBar from '@/components/book/NavBar';
import HeroSection from '@/components/book/HeroSection';
import AboutSection from '@/components/book/AboutSection';
import AuthorSection from '@/components/book/AuthorSection';
import AudienceSection from '@/components/book/AudienceSection';
import SubscribeSection from '@/components/book/SubscribeSection';
import FaqSection from '@/components/book/FaqSection';
import Footer from '@/components/book/Footer';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';

const Shift = () => {
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <PageSEO path="/" title={siteMetadata.book.title} description={siteMetadata.book.description} />
      <NavBar items={[
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Author", href: "#author" },
        { name: "Audience", href: "#audience" },
        { name: "FAQ", href: "#faq" },
      ]} />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <AuthorSection />
        <AudienceSection />
        <SubscribeSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Shift;
