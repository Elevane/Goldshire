import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import React from "react"
import AuctionTableHeader from "./AuctionTableHeader"

// Mock des composants Table
vi.mock("~/components/ui/table", () => ({
  TableHead: ({ children }: any) => <thead>{children}</thead>,
  TableRow: ({ children }: any) => <tr>{children}</tr>,
}))

describe("AuctionTableHeader", () => {
  const headers = ["Item", "Bid", "Buyout", "Quantity", "Time Left"]

  it("renders all headers", () => {
    render(<AuctionTableHeader headers={headers} />)

    headers.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument()
    })
  })

  it("renders correct number of header cells", () => {
    render(<AuctionTableHeader headers={headers} />)

    const headerCells = screen.getAllByText(/Item|Bid|Buyout|Quantity|Time Left/)
    expect(headerCells).toHaveLength(headers.length)
  })

  it("renders inside a table row", () => {
    render(<AuctionTableHeader headers={headers} />)

    const row = screen.getByRole("row")
    expect(row).toBeInTheDocument()
  })

  it("handles empty headers array", () => {
    render(<AuctionTableHeader headers={[]} />)

    const row = screen.getByRole("row")
    expect(row.children.length).toBe(0)
  })
})