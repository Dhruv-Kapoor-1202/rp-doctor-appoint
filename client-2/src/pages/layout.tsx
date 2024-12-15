import AppSidebar from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ReactNode } from "react";
// import { Route, Routes } from "react-router-dom";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      {/* Sidebar (user, doctor, admin) */}
      <AppSidebar />

      {/* Main content (user, doctor, admin)  */}
      <SidebarInset className="p-2 pl-0">
        <SidebarTrigger />
        <Separator className="mt-1 mb-2" />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
