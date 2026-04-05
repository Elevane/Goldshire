import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import DealCardFooter from "./DealCardFooter"

// Mock des composants UI si nécessaire
vi.mock("~/components/ui/button", () => ({
  Button: ({ children, variant, className }: any) => (
    <button data-variant={variant} className={className}>
      {children}
    </button>
  ),
}))

vi.mock("~/components/ui/card", () => ({
  CardFooter: ({ children }: any) => <div>{children}</div>,
}))

describe("DealCardFooter", () => {
  it("affiche le bouton 'View'", () => {
    render(<DealCardFooter isGoodDeal={true} />)

    const button = screen.getByRole("button", { name: /view/i })
    expect(button).toBeInTheDocument()
  })

  it("applique le variant 'default' si isGoodDeal est true", () => {
    render(<DealCardFooter isGoodDeal={true} />)

    const button = screen.getByRole("button")
    expect(button).toHaveAttribute("data-variant", "default")
  })

  it("applique le variant 'outline' si isGoodDeal est false", () => {
    render(<DealCardFooter isGoodDeal={false} />)

    const button = screen.getByRole("button")
    expect(button).toHaveAttribute("data-variant", "outline")
  })

  it("a la classe w-full", () => {
    render(<DealCardFooter isGoodDeal={true} />)

    const button = screen.getByRole("button")
    expect(button).toHaveClass("w-full")
  })
})