import { Subscribe } from './Subscribe';

const SubscribeSection = () => {
  return (
    <section id="subscribe" className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center opacity-0 animate-slide-up">
          <h2 className="text-book-darkGray text-3xl font-bold tracking-tighter sm:text-4xl">
            Stay Updated on Launch Details
          </h2>
          <p className="mt-4 mb-8 text-book-darkGray md:text-xl">
            Receive exclusive content and early-bird discounts.
          </p>
          
          <Subscribe alignment="center" uid="e046de302e" formId="7915370" />
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
