import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { AuctionTableBody } from "./AuctionTableBody"

describe("AuctionTableBody", () => {
  const mockAuctions = [
    {
      item: { id: 1 },
      bid: 100,
      buyout: 200,
      quantity: 2,
      time_left: "SHORT",
    },
    {
      item: { id: 2 },
      bid: 300,
      buyout: 400,
      quantity: 5,
      time_left: "LONG",
    },
  ]

  it("renders all auctions", () => {
    render(<AuctionTableBody auctions={mockAuctions} />)
    const rows = screen.getAllByRole("row")
    expect(rows).toHaveLength(2)
  })

  it("renders BlizzardIcon with correct ids", () => {
    render(<AuctionTableBody auctions={mockAuctions} />)

    const icons = screen.getAllByTestId("icon")
    expect(icons[0]).toHaveTextContent("1")
    expect(icons[1]).toHaveTextContent("2")
  })

  it("renders Gold values correctly (bid + buyout)", () => {
    render(<AuctionTableBody auctions={mockAuctions} />)

    const golds = screen.getAllByTestId("gold")

    expect(golds).toHaveLength(4)
    expect(golds[0]).toHaveTextContent("100") // bid
    expect(golds[1]).toHaveTextContent("200") // buyout
    expect(golds[2]).toHaveTextContent("300")
    expect(golds[3]).toHaveTextContent("400")
  })

  it("renders quantity and time_left", () => {
    render(<AuctionTableBody auctions={mockAuctions} />)

    expect(screen.getByText("2")).toBeInTheDocument()
    expect(screen.getByText("5")).toBeInTheDocument()

    expect(screen.getByText("SHORT")).toBeInTheDocument()
    expect(screen.getByText("LONG")).toBeInTheDocument()
  })

  it("renders nothing when auctions is empty", () => {
    render(<AuctionTableBody auctions={[]} />)
    const rows = screen.queryAllByRole("row")
    expect(rows).toHaveLength(0)
  })
})
