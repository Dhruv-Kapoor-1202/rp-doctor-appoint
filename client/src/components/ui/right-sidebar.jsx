import AppointmentCard from "./appointment-card";

const RightSidebar = () => {
  return (
    <div className="w-full h-full p-2 border  sm:col-span-5 md:col-span-4 lg:col-span-3 bg-card text-card-foreground border-border rounded-3xl">
      {/* Name Card */}
      <div className="flex items-center justify-start w-full gap-2 p-3 rounded-2xl bg-accent text-accent-foreground">
        <img
          src="https://avatars.githubusercontent.com/u/101688220?v=4"
          alt=""
          className="w-10 h-10 rounded-lg"
        />
        <div
          className={`
              flex justify-between items-center
              overflow-hidden transition-all  "w-52 ml-3" 
            `}
        >
          <div className="leading-4">
            <h4 className="font-semibold">Dhruv Kapoor</h4>
            <span className="text-xs text-muted-foreground">Cardiology</span>
          </div>
          {/* <DotsVerticalIcon size={20} /> */}
          {/* <ModeToggle /> */}
        </div>
      </div>

      <h2 className="p-2 font-semibold text-secondary-foreground">
        Planned Consultation
      </h2>

      <ul className="flex flex-col w-full gap-2">
        <AppointmentCard
          name="Rishab Paul"
          age={21}
          date="10.02.2024"
          timing="10:00 - 11:30"
        />
        <AppointmentCard
          name="Rishab Paul"
          age={21}
          date="10.02.2024"
          timing="10:00 - 11:30"
        />
        <AppointmentCard
          name="Rishab Paul"
          age={21}
          date="10.02.2024"
          timing="10:00 - 11:30"
        />
        <AppointmentCard
          name="Rishab Paul"
          age={21}
          date="10.02.2024"
          timing="10:00 - 11:30"
        />
      </ul>
    </div>
  );
};

export default RightSidebar;
