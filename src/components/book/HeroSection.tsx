
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-book-navy to-black py-20 md:py-24 lg:py-32 text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute h-full w-full bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4 opacity-0 animate-fade-in">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                <span className="text-book-teal">Shift:</span> The Playbook for Event-Driven Architecture Advocacy
              </h1>
              <p className="max-w-[700px] text-gray-300 md:text-xl">
                Master the strategies and techniques to successfully advocate for event-driven architecture in your organization.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row opacity-0 animate-fade-in animate-delay-300">
              <Button className="bg-book-teal text-white hover:bg-book-teal/90 h-12 px-6 text-base">
                Pre-order Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 h-12 px-6 text-base">
                Learn More
              </Button>
            </div>
            <p className="text-sm text-gray-300 opacity-0 animate-fade-in animate-delay-600">
              Expected Release: July 2025 • Technical Publishing House
            </p>
          </div>
          <div className="mx-auto aspect-[4/5] overflow-hidden rounded-xl bg-gradient-to-br from-book-teal/30 to-book-amber/20 border border-white/10 p-8 flex items-center justify-center shadow-2xl opacity-0 animate-fade-in animate-delay-300">
            <div className="relative w-full h-full bg-book-navy border border-white/20 shadow-lg flex items-center justify-center rounded-md overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute h-full w-full bg-[linear-gradient(to_right,transparent_0%,#ffffff33_20%,transparent_40%)] [animation:shine_1.5s_infinite]"></div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-book-teal text-lg font-medium mb-2">Coming Soon</h3>
                <h2 className="text-3xl font-bold mb-4">SHIFT</h2>
                <p className="text-sm text-gray-300">The Playbook for Event-Driven Architecture Advocacy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
