const CtaSection = () => {
  return (
    <section className="container p-2 py-8 sm:py-12">
      <div className="flex flex-col items-center justify-center gap-2 duration-300 md:gap-4 h-60 md:h-96 bg-gradient-to-tr from-slate-300 hover:shadow-md via-slate-200 to-slate-300 rounded-xl">
        <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl">
          Join Us Today!
        </h2>
        <p className="pb-4 italic">
          Experience a new era of healthcare management.
        </p>
        <a
          href="#"
          className="flex flex-col items-center justify-center p-2 px-4 font-medium text-white duration-300 rounded-lg shadow-sm cursor-pointer bg-slate-950 hover:bg-slate-950/95 hover:rounded-xl text-sm/6"
        >
          Sign Up Now
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
