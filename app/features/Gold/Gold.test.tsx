import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import { Gold } from "./Gold"

// Mock du hook
vi.mock("~/hooks/use-gold", () => ({
  useSplitCurrency: vi.fn(),
}))

import { useSplitCurrency } from "~/hooks/use-gold"

describe("Gold component", () => {
  it("affiche gold, silver et copper si > 0", () => {
    ;(useSplitCurrency as any).mockReturnValue({
      gold: 10,
      silver: 5,
      copper: 2,
    })

    render(<Gold value={10502} />)

    expect(screen.getByText("10g")).toBeInTheDocument()
    expect(screen.getByText("5s")).toBeInTheDocument()
    expect(screen.getByText("2c")).toBeInTheDocument()
  })

  it("n'affiche pas gold si égal à 0", () => {
    ;(useSplitCurrency as any).mockReturnValue({
      gold: 0,
      silver: 5,
      copper: 2,
    })

    render(<Gold value={502} />)

    expect(screen.queryByText(/g/)).not.toBeInTheDocument()
    expect(screen.getByText("5s")).toBeInTheDocument()
    expect(screen.getByText("2c")).toBeInTheDocument()
  })

  it("n'affiche pas silver si égal à 0", () => {
    ;(useSplitCurrency as any).mockReturnValue({
      gold: 1,
      silver: 0,
      copper: 2,
    })

    render(<Gold value={102} />)

    expect(screen.getByText("1g")).toBeInTheDocument()
    expect(screen.queryByText(/s/)).not.toBeInTheDocument()
    expect(screen.getByText("2c")).toBeInTheDocument()
  })

  it("affiche toujours copper même si 0", () => {
    ;(useSplitCurrency as any).mockReturnValue({
      gold: 0,
      silver: 0,
      copper: 0,
    })

    render(<Gold value={0} />)

    expect(screen.getByText("0c")).toBeInTheDocument()
  })

  it("appelle le hook avec la bonne valeur", () => {
    ;(useSplitCurrency as any).mockReturnValue({
      gold: 1,
      silver: 1,
      copper: 1,
    })

    render(<Gold value={123} />)

    expect(useSplitCurrency).toHaveBeenCalledWith(123)
  })
})