import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  User,
  Home,
  Inbox,
  // Search,
  Settings,
  UserPlus,
  BookPlus,
  TicketPlus,
  Users,
} from "lucide-react";
import { NavUser } from "@/components/nav-user";
import { useSelector } from "react-redux";
import { RootState } from "@/routes/ProtectedRoute";
import { Link } from "react-router-dom";

let items = [
  {
    title: "Dashbaord",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Book Doctor",
    url: "/bookdoctor",
    icon: TicketPlus,
  },
  {
    title: "Apply for Doctor",
    url: "/applydoctor",
    icon: BookPlus,
  },
  {
    title: "Settings",
    url: "/dashboard",
    icon: Settings,
  },
];

const AppSidebar = () => {
  const { user } = useSelector((state: RootState) => state.user);

  if (user?.isAdmin) {
    items = [
      {
        title: "Dashbaord",
        url: "/dashboard",
        icon: Home,
      },
      {
        title: "Patients",
        url: "/patients",
        icon: Users,
      },
      {
        title: "Doctors",
        url: "/doctors",
        icon: UserPlus,
      },
      {
        title: "Approvals",
        url: "/approvals",
        icon: Inbox,
      },
    ];
  }

  if (user?.isDoctor) {
    items = [
      {
        title: "Dashbaord",
        url: "/dashboard",
        icon: Home,
      },
      {
        title: "Patients",
        url: "/patients",
        icon: User,
      },
      {
        title: "Appointments",
        url: "/appointments",
        icon: Inbox,
      },
    ];
  }

  const USER = {
    name: `${user?.fname} ${user?.lname}`,
    email: `${user?.email}`,
    avatar: "https://avatars.githubusercontent.com/u/124599?v=4",
  };

  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuButton size={"lg"} asChild>
            <div>
              <img
                src="./logo.png"
                alt="VItalWaveLogo"
                className="w-8 rounded-md"
              />
              {/* <Home /> */}
              <span className="text-lg font-semibold">VitalWave</span>
            </div>
          </SidebarMenuButton>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    tooltip={{
                      children: item.title,
                      hidden: false,
                    }}
                    asChild
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={USER} />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
