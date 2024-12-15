const AboutSection = () => {
  return (
    <section className="container grid max-w-screen-xl grid-cols-1 gap-4 p-2 py-8 mx-auto sm:py-12 md:grid-cols-4 lg:grid-cols-6">
      <div className="col-span-1 place-content-center md:col-span-4 lg:col-span-2">
        <p className="italic text-balance text-base/7">
          At <span className="underline underline-offset-2">VitalWave</span>,
          we&apos;re committed to making healthcare accessible, efficient, and
          focused on the patient experience. Our platform brings doctors and
          patients together in a seamless digital space.
        </p>
      </div>

      <ul className="grid col-span-1 gap-4 md:grid-rows-3 grid-cols-subgrid md:col-span-4 ">
        <li className="relative flex flex-col p-4 duration-300 border border-border bg-card-background h-80 md:row-span-2 md:col-span-2 md:h-full rounded-xl hover:rounded-3xl overflow-clip sm:p-6 lg:p-10 ">
          <img
            className=" absolute border border-border w-full object-cover object-left hover:shadow-lg -bottom-20  h-[400px] lg:h-[500px] p-1 -right-20 rounded-3xl  opacity-55 -z-0 hover:-translate-y-1 duration-500  pb-0"
            src="./dashboard-light.png"
          />
          <p className="z-0 font-medium text-lg/5 md:text-xl/6 text-card-foreground text-balance">
            Secure Login
          </p>
        </li>
        <li className="relative flex flex-col p-4 duration-300 border border-border bg-card-background h-80 md:col-span-2 md:h-60 rounded-xl hover:rounded-3xl overflow-clip sm:p-6 lg:p-10 ">
          <img
            className=" absolute border border-border w-full object-cover object-left hover:shadow-lg -bottom-28 h-[300px] p-1 -left-20 rounded-3xl  opacity-55 -z-0 hover:-translate-y-1 duration-500  pb-0"
            src="./dashboard-light.png"
          />
          <p className="z-0 font-medium text-lg/5 md:text-xl/6 text-card-foreground text-balance">
            Dashboard with Comprehensive Tools
          </p>
        </li>
        <li className="relative flex flex-col p-4 duration-300 border border-border bg-card-background h-80 md:row-span-2 md:col-span-2 md:h-full rounded-xl hover:rounded-3xl overflow-clip sm:p-6 lg:p-10 ">
          <img
            className=" absolute border border-border w-full object-cover object-left hover:shadow-lg  h-[400px] -right-20 p-1 -bottom-10 rounded-3xl  opacity-55 -z-0 hover:-translate-y-1 duration-500  pb-0"
            src="./dashboard-light.png"
          />
          <p className="z-0 font-medium text-lg/5 md:text-xl/6 text-card-foreground text-balance">
            Real-Time Metrics
          </p>
        </li>
        <li className="relative flex flex-col p-4 duration-300 border border-border bg-card-background h-80 md:col-span-2 md:h-full rounded-xl hover:rounded-3xl overflow-clip sm:p-6 lg:p-10 ">
          <img
            className=" absolute border border-border w-full object-cover object-left hover:shadow-lg  h-[300px] -right-36 p-1 -top-28 rounded-3xl  opacity-55 -z-0 hover:-translate-y-1 duration-500  pb-0"
            src="./dashboard-light.png"
          />
          <p className="z-0 font-medium text-lg/5 md:text-xl/6 text-card-foreground text-balance">
            Appointment Management
          </p>
        </li>
      </ul>
    </section>
  );
};

export default AboutSection;
