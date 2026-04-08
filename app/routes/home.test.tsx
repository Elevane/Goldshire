import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import Home from "./home"
import useDeals from "~/hooks/use-deals"

vi.mock("~/hooks/use-deals", () => ({
  default: vi.fn(),
}))

vi.mock("~/features/Deal/DealCard", () => ({
  default: (props: any) => <div>{props.name}</div>,
}))

describe("Home", () => {
  it("affiche loading", () => {
    (useDeals as any).mockReturnValue({ isLoading: true, data: null })

    render(<Home />)

    expect(screen.getByText("Loading...")).toBeInTheDocument()
  })

  it("affiche le titre", () => {
    (useDeals as any).mockReturnValue({ isLoading: false, data: [] })

    render(<Home />)

    expect(screen.getByText("Good deals")).toBeInTheDocument()
  })

  it("affiche les deals triés", () => {
    (useDeals as any).mockReturnValue({
      isLoading: false,
      data: [
        { itemId: "1", name: "Deal1", profitRate: 10 },
        { itemId: "2", name: "Deal2", profitRate: 5 },
      ],
    })

    render(<Home />)

    const deals = screen.getAllByText(/Deal/)
    expect(deals[0]).toHaveTextContent("Deal2")
    expect(deals[1]).toHaveTextContent("Deal1")
  })
})