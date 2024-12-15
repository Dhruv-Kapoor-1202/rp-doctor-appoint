import AppSidebar from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ReactNode } from "react";
// import { Route, Routes } from "react-router-dom";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      {/* Sidebar (user, doctor, admin) */}
      <AppSidebar />

      {/* Main content (user, doctor, admin)  */}
      <main className="w-full">
        <SidebarTrigger />
        {/* <LogoutButton /> */}
        {children}
      </main>
    </SidebarProvider>
  );
};

export default Layout;
