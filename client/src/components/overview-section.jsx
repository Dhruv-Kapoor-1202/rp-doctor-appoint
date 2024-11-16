/* eslint-disable react/prop-types */
import {
  FileTextIcon,
  HeartIcon,
  HobbyKnifeIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import PropTypes from "prop-types";

const OverviewSection = () => {
  return (
    <div className="p-2 border md:col-span-6 lg:col-span-4 bg-card text-card-foreground border-border rounded-3xl">
      {/* <h2 className="p-2 text-lg font-semibold">Overview</h2> */}
      <ul className="grid h-full gap-2 lg:grid-cols-2 ">
        <SubOverview
          icon={<PersonIcon />}
          name="Patient"
          quantity="2543"
          trend="(up)24%"
        />
        <SubOverview
          icon={<FileTextIcon />}
          name="Reports"
          quantity="453"
          trend="(up)24%"
        />
        <SubOverview
          icon={<HeartIcon />}
          name="Urgent"
          quantity="24"
          trend="(up)24%"
        />
        <SubOverview
          icon={<HobbyKnifeIcon />}
          name="Surgery"
          quantity="137"
          trend="(up)24%"
        />
      </ul>
    </div>
  );
};

export function SubOverview({ icon, name, quantity, trend }) {
  return (
    <li className="flex flex-col justify-between h-full p-3 duration-200 bg-accent text-accent-foreground rounded-2xl hover:bg-accent/90">
      <div className="flex flex-wrap items-center justify-start gap-2">
        <div
          className="p-2 border border-border w-fit rounded-xl bg-background text-foreground"
          aria-label={name}
        >
          {icon}
        </div>
        <h3 className="font-medium text-base/4 text-wrap text-secondary-foreground">
          {name}
        </h3>
      </div>
      <div className="flex flex-wrap items-baseline justify-between mt-2">
        <span className="text-xl font-bold">{quantity}</span>
        <span
          className={`font-medium text-xs ${
            trend.includes("up") ? "text-green-500" : "text-red-500"
          }`}
        >
          {trend}
        </span>
      </div>
    </li>
  );
}

SubOverview.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  trend: PropTypes.string.isRequired,
};

export default OverviewSection;
