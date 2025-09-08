const Notice = () => {
  return (
    <div className="bg-gradient-to-r from-book-lightGray via-book-lightGreen to-book-lightGray text-book-primary">
      <div className="container px-3 md:px-6 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center">
          <div className="flex-1">
            <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed">
              📚 <strong>Pre-order is now available!</strong> Get your digital copy of "Shift" at a discounted price.
            </p>
          </div>
          <a
            href="https://fmvilas.kit.com/products/pre-order-the-shift-book"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-book-secondary px-4 sm:px-6 py-2 rounded-full font-semibold text-xs sm:text-sm hover:bg-book-lightPink transition-colors duration-200 whitespace-nowrap flex-shrink-0"
          >
            Pre-order →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Notice; 