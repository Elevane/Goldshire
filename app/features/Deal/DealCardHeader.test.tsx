import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import React from "react"
import DealCardHeader from "./DealCardHeader"

// ✅ Mock BlizzardIcon
vi.mock("~/features/Icons/BlizzardIcon", () => ({
  BlizzardIcon: ({ id, name }: { id: number; name: string }) => (
    <div data-testid="blizzard-icon">
      {name}-{id}
    </div>
  ),
}))

// ✅ Mock Gold
vi.mock("../Gold/Gold", () => ({
  Gold: ({ value }: { value: number }) => (
    <span data-testid="gold">{value}</span>
  ),
}))

// ✅ Mock Card UI
vi.mock("~/components/ui/card", () => ({
  CardHeader: ({ children }: any) => <div>{children}</div>,
  CardTitle: ({ children }: any) => <div>{children}</div>,
  CardDescription: ({ children }: any) => <div>{children}</div>,
}))

describe("DealCardHeader", () => {
  const baseProps = {
    lowestPrice: 100,
    higherPrice: 200,
    medianPrice: 150,
    quantity: 2,
    name: "Test Item",
    itemId: 42,
    number: 500,
    isGoodDeal: true,
  }

  it("renders BlizzardIcon with correct name and id", () => {
    render(<DealCardHeader {...baseProps} />)

    expect(screen.getByTestId("blizzard-icon"))
      .toHaveTextContent("Test Item-42")
  })

  it("renders profit value", () => {
    render(<DealCardHeader {...baseProps} />)

    const goldValues = screen.getAllByTestId("gold")

    // profit (number prop)
    expect(goldValues[0]).toHaveTextContent("500")
  })

  it("calculates and renders profit rate correctly", () => {
    render(<DealCardHeader {...baseProps} />)

    const goldValues = screen.getAllByTestId("gold")

    // formula: floor(quantity * (median - lowest) / (higher - lowest))
    // = floor(2 * (150 - 100) / (200 - 100)) = 1
    expect(goldValues[1]).toHaveTextContent("1")
  })

  it("applies green style when isGoodDeal = true", () => {
    render(<DealCardHeader {...baseProps} isGoodDeal={true} />)

    const profit = screen.getByTestId("profit-value")
    expect(profit).toHaveClass("text-green-300")
    expect(profit).not.toHaveClass("text-red-300")
  })

  it("applies red style when isGoodDeal = false", () => {
    render(<DealCardHeader {...baseProps} isGoodDeal={false} />)

    const profit = screen.getByTestId("profit-value")
    expect(profit).toHaveClass("text-red-300")
    expect(profit).not.toHaveClass("text-green-300")
  })

  it("renders profit value AND style together", () => {
    render(<DealCardHeader {...baseProps} isGoodDeal={true} />)

    const profit = screen.getByTestId("profit-value")

    expect(profit).toHaveTextContent("500")
    expect(profit).toHaveClass("text-green-300")
  })

  it("returns 0 profit rate when range is 0", () => {
    render(
      <DealCardHeader
        {...baseProps}
        lowestPrice={100}
        higherPrice={100}
      />
    )

    const goldValues = screen.getAllByTestId("gold")

    expect(goldValues[1]).toHaveTextContent("0")
  })

  it("returns 0 profit rate when range is negative", () => {
    render(
      <DealCardHeader
        {...baseProps}
        lowestPrice={200}
        higherPrice={100}
      />
    )

    const goldValues = screen.getAllByTestId("gold")

    expect(goldValues[1]).toHaveTextContent("0")
  })
})