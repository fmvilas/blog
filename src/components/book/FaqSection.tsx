
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

const FaqSection = () => {
  const faqs = [
    {
      question: "When will the book be released?",
      answer: "It's still too early to say but I'm aiming for a release in the second half of 2025. Pre-orders will be available approximately 3 months before release. Make sure to subscribe to my newsletter to be the first to know when pre-orders are available."
    },
    {
      question: "What formats will be available?",
      answer: "Shift will be available in hardcover, paperback, PDF, ePub, and Kindle formats. All digital purchases include free updates for the lifetime of the edition."
    },
    {
      question: "Is this book only relevant for those using specific technologies?",
      answer: "No, the principles and strategies in Shift are technology-agnostic. The focus is on architectural patterns, organizational change strategies, and adoption approaches that work across different technology stacks."
    },
    {
      question: "I'm new to event-driven architecture. Is this book right for me?",
      answer: "Shift assumes a foundational understanding of software architecture principles and distributed systems."
    },
    // {
    //   question: "Are there any bulk purchase discounts for teams?",
    //   answer: "Yes, we offer special pricing for team purchases of 5+ copies. Contact us at team@shiftbook.com for details."
    // }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-book-lightGray">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 opacity-0 animate-slide-up">
          <h2 className="text-book-darkGray text-3xl font-bold tracking-tighter sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-book-darkGray/80 md:text-lg">
            Everything you need to know about the book and pre-ordering process
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto opacity-0 animate-slide-up animate-delay-300">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-medium text-book-darkGray py-4 hover:text-book-secondary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-book-darkGray/80 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center opacity-0 animate-slide-up animate-delay-600">
          <p className="text-book-darkGray/80">
            Have more questions? <a href="mailto:fran@fmvilas.me" className="text-book-secondary hover:underline">Contact me</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
