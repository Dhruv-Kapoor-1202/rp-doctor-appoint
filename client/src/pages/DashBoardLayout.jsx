/* eslint-disable react/prop-types */
import Sidebar, { SidebarItem } from "@/components/ui/sidebar";
import {
  ClipboardIcon,
  DashboardIcon,
  FileTextIcon,
  GlobeIcon,
  IdCardIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./DashBoard";
import Patient from "./Patient";
import Staff from "./Staff";
import Reports from "./Reports";
// import Team from "./Team";
import ApplyDoc from "./ApplyDoc";
import Doctor from "./Doctor";

const sidebarData = [
  {
    icon: <DashboardIcon className="size-4 sm:size-6" />,
    text: "dashboard",
    active: true,
    alert: false,
    link: "/dashboard",
  },
  {
    icon: <PersonIcon className="size-4 sm:size-6" />,
    text: "patient",
    active: false,
    alert: true,
    link: "/dashboard/patient",
  },
  {
    icon: <GlobeIcon className="size-4 sm:size-6" />,
    text: "doctor",
    active: false,
    alert: true,
    link: "/dashboard/doctor",
  },
  {
    icon: <FileTextIcon className="size-4 sm:size-6" />,
    text: "staff",
    active: false,
    alert: true,
    link: "/dashboard/staff",
  },
  {
    icon: <ClipboardIcon className="size-4 sm:size-6" />,
    text: "reports",
    active: false,
    alert: true,
    link: "/dashboard/reports",
  },
  // {
  //   icon: <GlobeIcon className="size-4 sm:size-6" />,
  //   text: "team",
  //   active: false,
  //   alert: true,
  //   link: "/dashboard/team",
  // },
  {
    icon: <IdCardIcon className="size-4 sm:size-6" />,
    text: "Apply",
    active: false,
    alert: true,
    link: "/dashboard/applydoc",
  },
];

const DashBoardLayout = () => {
  // const isActive = true;
  return (
    <main className="flex bg-background">
      <Sidebar>
        {sidebarData.map((item, index) => {
          return (
            <SidebarItem
              icon={item.icon}
              key={index}
              text={item.text}
              link={item.link}
              // active={`${isActive ? "true" : "false"}`}
              active={item.active}
              alert={item.alert}
            />
          );
        })}
      </Sidebar>
      <div className="w-full p-2 pl-20 md:pl-2">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/reports" element={<Reports />} />
          {/* <Route path="/team" element={<Team />} /> */}
          <Route path="/applydoc" element={<ApplyDoc />} />
        </Routes>
      </div>
    </main>
  );
};

export default DashBoardLayout;

// <SidebarItem
// icon={<DashboardIcon className="size-4 sm:size-6" />}
// text="dashboard"
// active
// link="/dashboard"
// />
// <SidebarItem
// icon={<PersonIcon className="size-4 sm:size-6" />}
// text="patient"
// alert
// link="/dashboard/patient"
// />
// <SidebarItem
// icon={<FileTextIcon className="size-4 sm:size-6" />}
// text="staff"
// alert
// link="/dashboard/staff"
// />
// <SidebarItem
// icon={<ClipboardIcon className="size-4 sm:size-6" />}
// text="reports"
// alert
// link="/dashboard/reports"
// />
// <SidebarItem
// icon={<GlobeIcon className="size-4 sm:size-6" />}
// text="team"
// alert
// link="/dashboard/team"
// />
