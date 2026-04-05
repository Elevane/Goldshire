import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import { BlizzardIcon } from "./BlizzardIcon"

// Mock react-query
vi.mock("@tanstack/react-query", () => ({
  useQuery: vi.fn(),
}))

import { useQuery } from "@tanstack/react-query"

describe("BlizzardIcon", () => {
  it("affiche l'image avec la bonne src et alt", () => {
    ;(useQuery as any).mockReturnValue({
      data: "image-url",
      isLoading: false,
    })

    render(<BlizzardIcon id={123} name="Sword" />)

    const img = screen.getByRole("img")

    expect(img).toHaveAttribute("src", "image-url")
    expect(img).toHaveAttribute("alt", "icon_auction_number_123")
  })

  it("affiche le nom", () => {
    ;(useQuery as any).mockReturnValue({
      data: "image-url",
      isLoading: false,
    })

    render(<BlizzardIcon id={1} name="Shield" />)

    expect(screen.getByText("Shield")).toBeInTheDocument()
  })

  it("appelle useQuery avec la bonne clé", () => {
    ;(useQuery as any).mockReturnValue({
      data: "image-url",
      isLoading: false,
    })

    render(<BlizzardIcon id={42} name="Item" />)

    expect(useQuery).toHaveBeenCalledWith(
      expect.objectContaining({
        queryKey: ["blizzardIcon", 42],
      })
    )
  })

  it("gère une data undefined", () => {
    ;(useQuery as any).mockReturnValue({
      data: undefined,
      isLoading: false,
    })

    render(<BlizzardIcon id={5} name="Potion" />)

    const img = screen.getByRole("img")
    expect(img).toHaveAttribute("src", "")
  })

  it("affiche quand même l'image même en loading", () => {
    ;(useQuery as any).mockReturnValue({
      data: undefined,
      isLoading: true,
    })

    render(<BlizzardIcon id={99} name="Loading item" />)

    const img = screen.getByRole("img")
    expect(img).toBeInTheDocument()
  })
})