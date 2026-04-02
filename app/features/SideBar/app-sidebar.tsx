import { Home, Info, List } from "lucide-react"
import { Link } from "react-router"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar"
import AppNavigationMenu from "../Navigation/app-nav"

export function AppSidebar() {
  return (
    <Sidebar>
      <AppSideBarHeader />
      <AppSideBarContent />
      <AppSidebarFooter />
    </Sidebar>
  )
}

const AppSidebarFooter = () => {
  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <p>Goldshire &copy; 2026</p>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  )
}
const AppSideBarContent = () => {
  const menuItems = [
    {
      name: "Deals",
      url: "/",
      icon: Home,
    },
    {
      name: "Auctions",
      url: "/auctions",
      icon: List,
    },

    {
      name: "About",
      url: "/about",
      icon: Info,
    },
  ]
  return (
    <SidebarContent>
      <SidebarMenuItem className="pl-[1em]">
        <AppNavigationMenu />
      </SidebarMenuItem>
      {menuItems.map((item) => (
        <SidebarMenuItem key={item.name} className="pl-[1em]">
          <SidebarMenuButton asChild>
            <Link to={item.url}>
              <item.icon />
              <span>{item.name}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarContent>
  )
}
const AppSideBarHeader = () => {
  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <h1>Goldshire</h1>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  )
}
