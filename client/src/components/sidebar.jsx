/* eslint-disable react/prop-types */
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsVerticalIcon,
} from "@radix-ui/react-icons";
import { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";

const SidebarContext = createContext();

const Sidebar = ({ children }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="relative h-screen">
      <nav className="flex flex-col h-full gap-4 bg-white border-r shadow-sm md:gap-6 lg:gap-8">
        {/* logo */}
        <div className="flex items-center justify-start gap-2 p-4 pb-2">
          <img
            src="/hospital-logo.png"
            className={`overflow-hidden transition-all w-10  ${
              expanded ? "" : "w-0"
            }`}
            alt="Logo"
          />
          <p
            className={`text-xl font-semibold text-gray-700 ${
              expanded ? "" : "hidden"
            }`}
          >
            Hospital
          </p>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className={`p-1.5 rounded-lg bg-gray-100 absolute hover:bg-gray-200 duration-200 ${
              expanded
                ? "right-0 rounded-e-none pr-1"
                : "left-full rounded-s-none pl-1"
            }`}
          >
            {expanded ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="flex p-3 border-t">
          <img
            src="https://avatars.githubusercontent.com/u/101688220?v=4"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
            `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">Dhruv Kapoor</h4>
              <span className="text-xs text-gray-600">dk1202@gmail.com</span>
            </div>
            <DotsVerticalIcon size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export function SidebarItem({ icon, text, active, alert, link }) {
  const { expanded } = useContext(SidebarContext);
  return (
    <Link
      to={link}
      className={`
      relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors capitalize group
      ${
        active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
      }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6
        bg-indigo-100 text-indigo-800 text-sm
        invisible opacity-20 -translate-x-3 transition-all
        group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        `}
        >
          {text}
        </div>
      )}
    </Link>
  );
}

export default Sidebar;
