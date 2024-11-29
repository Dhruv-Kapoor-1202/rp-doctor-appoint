/* eslint-disable react/prop-types */
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

const SurgerySection = () => {
  return (
    <div className="p-2 border md:col-span-6 lg:col-span-8 bg-card text-card-foreground border-border rounded-3xl">
      <h2 className="p-2 text-lg font-semibold">Schedule</h2>
      <div className="flex gap-2">
        <button className="flex items-center justify-center w-6 h-6 duration-200 rounded-full hover:bg-secondary/80 bg-secondary text-secondary-foreground">
          <ChevronLeftIcon />
        </button>
        <p>December 2024</p>
        <button className="flex items-center justify-center w-6 h-6 duration-200 rounded-full hover:bg-secondary/80 bg-secondary text-secondary-foreground">
          <ChevronRightIcon />
        </button>
      </div>

      <div className="flex w-full gap-2 pt-4 lg:flex-col">
        {/* Top */}
        <ul className="grid w-full gap-2 lg:grid-cols-5">
          <SurgeryDay day={"Mon"} date={6} />
          <SurgeryDay day={"Tue"} date={7} />
          <SurgeryDay day={"Wed"} date={8} />
          <SurgeryDay day={"Thu"} date={9} />
          <SurgeryDay day={"Fri"} date={10} />
        </ul>
        <ul className="grid w-full gap-2 lg:grid-cols-5">
          <SurgeryDay day={"Mon"} date={6} />
          <SurgeryDay day={"Tue"} date={7} />
          <SurgeryDay day={"Wed"} date={8} />
          <SurgeryDay day={"Thu"} date={9} />
          <SurgeryDay day={"Fri"} date={10} />
        </ul>
      </div>
    </div>
  );
};

export function SurgeryDay({ day, date, img }) {
  return (
    <li className="w-full p-3 pb-2 border bg-accent rounded-2xl text-seconbg-accent-foreground border-border">
      <div className="w-8 h-8 overflow-hidden border rounded-full bg-background text-foreground border-border">
        <img src={img} alt="img" className="" />
      </div>

      <p className="py-1 text-xs text-muted-foreground">09:00-17:00</p>
      <div className="w-full p-1 px-2 text-center border border-border rounded-3xl bg-background text-foreground">
        <p className="flex items-baseline justify-center gap-1 text-sm font-semibold">
          {date}
          <span className="text-xs font-normal">{day}</span>
        </p>
      </div>
    </li>
  );
}

export default SurgerySection;
