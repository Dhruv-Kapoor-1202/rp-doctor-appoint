const WhySection = () => {
  return (
    <section className="container flex flex-col gap-4 p-2 py-8 sm:gap-8 md:gap-14 sm:py-12">
      <h2 className="text-lg font-semibold text-center sm:text-xl md:text-2xl text-slate-900">
        Why Choose Us?
      </h2>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <li className="col-span-1 rounded-xl hover:rounded-3xl duration-300 border bg-white  p-4 sm:p-6 lg:p-10 h-80 md:h-[450px] lg:h-[550px] relative overflow-clip  shadow-md shadow-slate-300/20 ">
          <img
            className=" absolute border w-full object-cover object-left  hover:shadow-lg top-20  sm:top-28 h-[400px] lg:h-[650px] p-1 -right-10 rounded-3xl  opacity-55 -z-0 hover:-translate-y-1 duration-500  pb-0"
            src="./dashboard-light.png"
          />
          <p className="z-20 font-medium text-lg/5 md:text-xl/6 text-slate-800 text-balance">
            User-Friendly Interface
          </p>
        </li>
        <li className="col-span-1 rounded-xl hover:rounded-3xl duration-300 border bg-white  p-4 sm:p-6 lg:p-10 h-80 md:h-[450px] lg:h-[550px] relative overflow-clip  shadow-md shadow-slate-300/20 ">
          <img
            className=" absolute border w-full object-cover object-left  hover:shadow-lg top-20  sm:top-28 h-[400px] lg:h-[650px] p-1 -right-10  rounded-3xl  opacity-55 -z-0 hover:-translate-y-1 duration-500  pb-0"
            src="./dashboard-light.png"
          />
          <p className="z-20 font-medium text-lg/5 md:text-xl/6 text-slate-800 text-balance">
            Privacy and Security
          </p>
        </li>
        <li className="col-span-1 rounded-xl hover:rounded-3xl duration-300 border bg-white  p-4 sm:p-6 lg:p-10 h-80 md:h-[450px] lg:h-[550px] relative overflow-clip  shadow-md shadow-slate-300/20 ">
          <img
            className=" absolute border w-full object-cover object-right  hover:shadow-lg top-20  sm:top-28 h-[400px] lg:h-[650px] p-1 -left-10  rounded-3xl  opacity-55 -z-0 hover:-translate-y-1 duration-500  pb-0"
            src="./dashboard-light.png"
          />
          <p className="z-20 font-medium text-lg/5 md:text-xl/6 text-slate-800 text-balance">
            24/7 Support
          </p>
        </li>
      </ul>
    </section>
  );
};

export default WhySection;
