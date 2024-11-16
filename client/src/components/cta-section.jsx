const CtaSection = () => {
  return (
    <section className="container py-8 sm:py-12">
      <div className="flex flex-col items-center justify-center gap-2 duration-300 md:gap-4 h-60 md:h-96 bg-gradient-to-tr from-secondary to-accent rounded-xl">
        <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl">
          Join Us Today!
        </h2>
        <p className="pb-4 italic">
          Experience a new era of healthcare management.
        </p>
        <a
          href="#"
          className="flex flex-col items-center justify-center p-2 px-4 font-medium duration-300 rounded-lg shadow-sm cursor-pointer text-primary-foreground bg-primary hover:bg-primary/90 hover:rounded-xl text-sm/6"
        >
          Sign Up Now
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
