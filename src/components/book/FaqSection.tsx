
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
      answer: "The book is scheduled for release in July 2025. Pre-orders will be available approximately 3 months before release."
    },
    {
      question: "What formats will be available?",
      answer: "Shift will be available in hardcover, paperback, PDF, ePub, and Kindle formats. All digital purchases include free updates for the lifetime of the edition."
    },
    {
      question: "Is this book only relevant for those using specific technologies?",
      answer: "No, the principles and strategies in Shift are technology-agnostic. While we include implementation examples using popular technologies, the focus is on architectural patterns, organizational change strategies, and adoption approaches that work across different technology stacks."
    },
    {
      question: "I'm new to event-driven architecture. Is this book right for me?",
      answer: "Shift assumes a foundational understanding of software architecture principles and distributed systems. While experienced engineers will get the most value, the book includes refreshers on key concepts to help bring readers up to speed."
    },
    {
      question: "Will there be code examples and diagrams?",
      answer: "Yes! The book includes numerous code examples, architecture diagrams, decision frameworks, and templates that you can apply in your organization."
    },
    {
      question: "Are there any bulk purchase discounts for teams?",
      answer: "Yes, we offer special pricing for team purchases of 5+ copies. Contact us at team@shiftbook.com for details."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-book-lightGray">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 opacity-0 animate-slide-up">
          <h2 className="text-book-navy text-3xl font-bold tracking-tighter sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-book-gray md:text-lg">
            Everything you need to know about the book and pre-ordering process
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto opacity-0 animate-slide-up animate-delay-300">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-medium text-book-navy py-4 hover:text-book-teal transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-book-gray pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center opacity-0 animate-slide-up animate-delay-600">
          <p className="text-book-gray">
            Have more questions? <a href="#contact" className="text-book-teal hover:underline">Contact us</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
