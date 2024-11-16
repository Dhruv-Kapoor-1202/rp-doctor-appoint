import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    async function fun() {
      const mode = localStorage.getItem("darkMode");
      setDarkMode(JSON.parse(mode));
      console.log(darkMode);
    }
    fun();
  }, [darkMode]);

  return (
    <section className="container grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
      <div className="flex flex-col items-start h-[400px] lg:h-[550px] justify-end overflow-hidden   lg:col-span-2 rounded-xl hover:rounded-3xl duration-300 relative gap-2 p-4 sm:p-6 lg:p-10 border border-border    ">
        <img
          className=" absolute border border-border w-full object-cover object-left hover:shadow-lg  -top-10 h-[300px] lg:h-[400px]  -right-20 rounded-3xl  opacity-55 -z-0 hover:-translate-y-1 duration-500  pb-0"
          src="./dashboard-light.png"
        />
        <h1 className="z-20 text-xl font-bold leading-tight text-card-foreground sm:text-2xl md:text-3xl">
          Empowering Healthcare
        </h1>
        <p className="italic ">
          Seamless Communication Between Doctors and Patients
        </p>
      </div>

      <div className="relative flex flex-col min-h-[400px] items-start justify-start w-full row-span-2 overflow-hidden rounded-xl hover:rounded-3xl duration-300  border border-border  lg:col-span-3 p-4 sm:p-6 lg:p-10    ">
        <img
          className=" absolute border border-border w-full object-cover object-left   -bottom-20  sm:-bottom-10 h-[400px] lg:h-[600px] p-1 -right-10 rounded-3xl  opacity-55 -z-0 hover:shadow-lg hover:-translate-y-1 duration-500  pb-0"
          src={darkMode ? "Dashboard.png" : "dashboard-light.png"}
        />
        <h2 className="z-10 text-xl font-bold leading-tight text-card-foreground sm:text-2xl md:text-3xl/7">
          Experience the future of medical care{" "}
          <span className="italic font-normal text-base/6">
            {" "}
            with our{" "}
            <span className="underline underline-offset-2">
              Infirmary Management System.{" "}
            </span>
          </span>
        </h2>
      </div>

      <div className="grid w-full h-40 grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2">
        <Link
          to="/signup"
          className="flex flex-col items-center justify-center w-full h-full col-span-1 font-normal duration-300 cursor-pointer text-primary-foreground sm:text-lg rounded-xl bg-primary hover:bg-primary/95 hover:rounded-3xl "
        >
          Get Started
        </Link>
        <a
          href="#"
          className="flex flex-col items-center justify-center w-full h-full col-span-1 font-normal duration-300 border cursor-pointer border-border sm:text-lg rounded-xl hover:rounded-3xl text-secondary-foreground group "
        >
          <p>
            Learn More
            <span className="block w-0 h-[1px] transition-all duration-300  group-hover:w-full bg-secondary-foreground"></span>
          </p>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
