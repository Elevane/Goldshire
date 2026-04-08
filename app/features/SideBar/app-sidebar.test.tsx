import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import { AppSidebar } from "./app-sidebar"


vi.mock("react-router", () => ({
  Link: ({ to, children }: any) => <a href={to}>{children}</a>,
}))

vi.mock("~/components/ui/sidebar", () => ({
  Sidebar: ({ children }: any) => <div>{children}</div>,
  SidebarHeader: ({ children }: any) => <div>{children}</div>,
  SidebarContent: ({ children }: any) => <div>{children}</div>,
  SidebarFooter: ({ children }: any) => <div>{children}</div>,
  SidebarMenu: ({ children }: any) => <div>{children}</div>,
  SidebarMenuItem: ({ children }: any) => <div>{children}</div>,
  SidebarMenuButton: ({ children }: any) => <div>{children}</div>,
}))

vi.mock("~/features/Navigation/app-nav", () => ({
  default: () => <div data-testid="nav" />,
}))

vi.mock("lucide-react", () => ({
  Home: () => <svg />,
  Info: () => <svg />,
  List: () => <svg />,
}))

describe("AppSidebar", () => {
  it("affiche le header", () => {
    render(<AppSidebar />)
    expect(screen.getByText("Goldshire")).toBeInTheDocument()
  })

  it("affiche les liens", () => {
    render(<AppSidebar />)

    expect(screen.getByText("Deals")).toBeInTheDocument()
    expect(screen.getByText("Auctions")).toBeInTheDocument()
    expect(screen.getByText("About")).toBeInTheDocument()
  })

  it("affiche la navigation", () => {
    render(<AppSidebar />)
    expect(screen.getByTestId("nav")).toBeInTheDocument()
  })

  it("affiche le footer", () => {
    render(<AppSidebar />)
    expect(screen.getByText(/Goldshire © 2026/)).toBeInTheDocument()
  })

  it("contient les bons liens", () => {
    render(<AppSidebar />)

    expect(screen.getByText("Deals").closest("a")).toHaveAttribute("href", "/")
    expect(screen.getByText("Auctions").closest("a")).toHaveAttribute("href", "/auctions")
    expect(screen.getByText("About").closest("a")).toHaveAttribute("href", "/about")
  })
})