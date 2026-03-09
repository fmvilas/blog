const Notice = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 via-green-200 to-gray-100 text-foreground">
      <div className="container px-3 md:px-6 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center">
          <div className="flex-1">
            <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed">
              📚 <strong>Now available!</strong> Get your copy of "Shift" — The Playbook for Event-Driven Architecture Advocacy.
            </p>
          </div>
          <a
            href="https://leadtheshift.co"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary-foreground text-secondary px-4 sm:px-6 py-2 rounded-full font-semibold text-xs sm:text-sm hover:bg-secondary hover:text-secondary-foreground transition-colors duration-200 whitespace-nowrap flex-shrink-0"
          >
            Get it →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Notice; 