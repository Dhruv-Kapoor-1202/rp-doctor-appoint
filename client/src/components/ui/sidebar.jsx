/* eslint-disable react/prop-types */
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  // DotsVerticalIcon,
} from "@radix-ui/react-icons";
import { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import ModeToggle from "./mode-toggle";
import { useSelector } from "react-redux";
import LogoutBtn from "../LogoutBtn";

const SidebarContext = createContext();

const Sidebar = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="fixed top-0 h-screen md:sticky">
      <nav className="flex flex-col h-full gap-4 border-r shadow-sm border-border bg-background md:gap-6 lg:gap-8">
        {/* logo */}
        <div className="flex items-center justify-start gap-2 p-4 pb-2">
          <img
            src="/hospital-logo.png"
            className={`overflow-hidden transition-all w-8 sm:w-10  ${
              expanded ? "" : "w-0"
            }`}
            alt="Logo"
          />
          <p
            className={`text-xl font-semibold text-secondary-foreground ${
              expanded ? "" : "hidden"
            }`}
          >
            Hospital
          </p>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className={`p-1 rounded-lg bg-secondary text-secondary-foreground absolute hover:bg-secondary/70 duration-200 ${
              expanded
                ? "right-0 rounded-e-none pr-0"
                : "left-full rounded-s-none pl-0"
            }`}
          >
            {expanded ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="flex items-center justify-center p-3 border-t border-border">
          <img
            src="https://avatars.githubusercontent.com/u/124599?v=4"
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
              <h4 className="font-semibold">
                {user.fname} {user.lname}
              </h4>
              <span className="text-xs text-muted-foreground">
                {user.email}
              </span>
            </div>
            {/* <DotsVerticalIcon size={20} /> */}
            <LogoutBtn />
            <ModeToggle />
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
      relative flex items-center  py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors capitalize group
      ${
        active
          ? "bg-gradient-to-tr from-primary to-primary/60 text-primary-foreground"
          : "hover:bg-secondary duration-200 text-secondary-foreground"
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
          className={`absolute right-2 w-2 h-2 rounded bg-ring ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6
        bg-primary text-primary-foreground text-sm
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
