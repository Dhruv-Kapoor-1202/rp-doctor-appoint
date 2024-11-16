/* eslint-disable react/prop-types */
import Sidebar, { SidebarItem } from "@/components/sidebar";
import {
  ClipboardIcon,
  DashboardIcon,
  FileTextIcon,
  GlobeIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./DashBoard";
import Patient from "./Patient";
import Staff from "./Staff";
import Reports from "./Reports";
import Team from "./Team";

const DashBoardLayout = () => {
  return (
    <main className="flex bg-background">
      <Sidebar>
        <SidebarItem
          icon={<DashboardIcon className="size-4 sm:size-6" />}
          text="dashboard"
          active
          link="/dashboard"
        />
        <SidebarItem
          icon={<PersonIcon className="size-4 sm:size-6" />}
          text="patient"
          alert
          link="/dashboard/patient"
        />
        <SidebarItem
          icon={<FileTextIcon className="size-4 sm:size-6" />}
          text="staff"
          alert
          link="/dashboard/staff"
        />
        <SidebarItem
          icon={<ClipboardIcon className="size-4 sm:size-6" />}
          text="reports"
          alert
          link="/dashboard/reports"
        />
        <SidebarItem
          icon={<GlobeIcon className="size-4 sm:size-6" />}
          text="team"
          alert
          link="/dashboard/team"
        />
      </Sidebar>
      <div className="w-full p-2 pl-20 md:pl-2">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </main>
  );
};

export default DashBoardLayout;
