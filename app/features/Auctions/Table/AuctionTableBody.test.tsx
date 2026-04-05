import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import React from "react"
import { AuctionTableBody } from "./AuctionTableBody"


// Mock child components
vi.mock("~/features/Icons/BlizzardIcon", () => ({
  BlizzardIcon: ({ id }: { id: number }) => (
    <div data-testid="blizzard-icon">icon-{id}</div>
  ),
}))

vi.mock("~/features/Gold/Gold", () => ({
  Gold: ({ value }: { value: number }) => (
    <div data-testid="gold">{value}</div>
  ),
}))

// Mock table components (if they are just wrappers)
vi.mock("~/components/ui/table", () => ({
  TableBody: ({ children }: any) => <tbody>{children}</tbody>,
  TableRow: ({ children }: any) => <tr>{children}</tr>,
  TableCell: ({ children }: any) => <td>{children}</td>,
}))

describe("AuctionTableBody", () => {
  const mockAuctions = [
    {
      item: { id: 1 },
      bid: 10000,
      buyout: 20000,
      quantity: 3,
      time_left: "LONG",
    },
    {
      item: { id: 2 },
      bid: 5000,
      buyout: 15000,
      quantity: 1,
      time_left: "SHORT",
    },
  ]

  it("renders all auctions", () => {
    render(<AuctionTableBody auctions={mockAuctions} />)

    // Check rows count
    const rows = screen.getAllByRole("row")
    expect(rows).toHaveLength(mockAuctions.length)
  })

  it("renders BlizzardIcon with correct ids", () => {
    render(<AuctionTableBody auctions={mockAuctions} />)

    const icons = screen.getAllByTestId("blizzard-icon")
    expect(icons[0]).toHaveTextContent("icon-1")
    expect(icons[1]).toHaveTextContent("icon-2")
  })

  it("renders Gold values correctly", () => {
    render(<AuctionTableBody auctions={mockAuctions} />)

    const goldValues = screen.getAllByTestId("gold")

    expect(goldValues[0]).toHaveTextContent("10000")
    expect(goldValues[1]).toHaveTextContent("20000")
    expect(goldValues[2]).toHaveTextContent("5000")
    expect(goldValues[3]).toHaveTextContent("15000")
  })

  it("renders quantity and time_left", () => {
    render(<AuctionTableBody auctions={mockAuctions} />)

    expect(screen.getByText("3")).toBeInTheDocument()
    expect(screen.getByText("1")).toBeInTheDocument()

    expect(screen.getByText("LONG")).toBeInTheDocument()
    expect(screen.getByText("SHORT")).toBeInTheDocument()
  })
})

