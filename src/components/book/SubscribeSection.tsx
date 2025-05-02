
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const SubscribeSection = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "You're on the list!",
        description: "You'll be the first to know when the book launches.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="subscribe" className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center opacity-0 animate-slide-up">
          <h2 className="text-book-darkGray text-3xl font-bold tracking-tighter sm:text-4xl">
            Stay Updated on Launch Details
          </h2>
          <p className="mt-4 text-book-darkGray md:text-xl">
            Be the first to know when pre-orders open and receive exclusive content and early-bird discounts.
          </p>
          
          <form onSubmit={handleSubmit} className="mt-8 sm:flex sm:max-w-md sm:mx-auto">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-book-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-book-darkGray/60 focus:ring-2 focus:ring-inset focus:ring-book-secondary sm:text-sm"
              />
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center rounded-md bg-book-secondary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-book-secondary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-book-secondary"
              >
                {isSubmitting ? 'Subscribing...' : 'Notify Me'}
              </Button>
            </div>
          </form>
          
          <p className="mt-3 text-sm text-book-darkGray/60">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
