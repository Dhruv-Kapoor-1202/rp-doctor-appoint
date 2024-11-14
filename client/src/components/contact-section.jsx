const ContactSection = () => {
  return (
    <section className="container grid grid-cols-1 gap-4 p-2 py-8 sm:py-12 md:grid-cols-2">
      <div className="flex flex-col ">
        <h2 className="pb-4 text-lg font-semibold text-center sm:pb-8 md:pb-12 sm:text-left sm:text-xl md:text-2xl text-slate-900">
          Get in Touch
        </h2>
        <p className="italic tracking-normal text-base/7 text-balance">
          Have questions or need assistance? We&apos;re here to help!
        </p>
        <p className="italic font-medium tracking-normal text-base/7 text-balance">
          Email:{" "}
          <a
            href="mailto:support@yourinfirmary.com"
            className="font-normal underline underline-offset-1"
          >
            support@yourinfirmary.com
          </a>
        </p>
        <p className="italic font-medium tracking-normal text-base/7 text-balance">
          Phone:{" "}
          <span className="font-normal underline underline-offset-1">
            (123) 456-7890
          </span>
        </p>
        <p className="italic font-medium tracking-normal text-base/7 text-balance">
          Follow Us: [Facebook] [Twitter] [LinkedIn]
        </p>
      </div>

      <form className="grid grid-cols-1 gap-4 sm:gap-6">
        <div>
          <label
            htmlFor="name"
            className="block font-semibold text-sm/6 text-slate-950"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-950 shadow-sm ring-1 ring-inset ring-slate-800 bg-white placeholder:text-slate-600 focus:ring-1  focus:ring-offset-2 focus:ring-slate-800 sm:text-sm/6 mt-2"
            autoComplete="name"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block font-semibold text-sm/6 text-slate-950"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-950 shadow-sm ring-1 ring-inset ring-slate-800 bg-white placeholder:text-slate-600 focus:ring-1  focus:ring-offset-2 focus:ring-slate-800 sm:text-sm/6 mt-2"
            autoComplete="email"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block font-semibold text-sm/6 text-slate-950"
          >
            Message
          </label>
          <textarea
            placeholder="Message"
            id="message"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-950 shadow-sm ring-1 ring-inset ring-slate-800 bg-white placeholder:text-slate-600 focus:ring-1  focus:ring-offset-2 focus:ring-slate-800 sm:text-sm/6 mt-2 "
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="block w-full rounded-md bg-slate-950 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-slate-950/95 duration-200  hover:rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};
export default ContactSection;
