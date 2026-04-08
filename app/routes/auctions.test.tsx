import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import Auctions from "./auctions"
import useAuctions from "~/hooks/use-auctions"

vi.mock("~/hooks/use-auctions", () => ({
  default: vi.fn(),
}))

vi.mock("~/components/ui/table", () => ({
  Table: ({ children }: any) => <table>{children}</table>,
}))

vi.mock("~/features/Auctions/Table/AuctionTableHeader", () => ({
  default: ({ headers }: any) => (
    <thead>
      <tr>
        {headers.map((h: string) => (
          <th key={h}>{h}</th>
        ))}
      </tr>
    </thead>
  ),
}))

vi.mock("~/features/Auctions/Table/AuctionTableBody", () => ({
  AuctionTableBody: ({ auctions }: any) => (
    <tbody>
      {auctions.map((a: any) => (
        <tr key={a.id}>
          <td>{a.name}</td>
        </tr>
      ))}
    </tbody>
  ),
}))

vi.mock("lucide-react", () => ({
  Loader: () => <svg data-testid="loader" />,
}))

describe("Auctions", () => {
  it("affiche le loader", () => {
    (useAuctions as any).mockReturnValue({ isLoading: true, data: null })

    render(<Auctions />)

    expect(screen.getByTestId("loader")).toBeInTheDocument()
  })

  it("affiche aucun résultat", () => {
    (useAuctions as any).mockReturnValue({ isLoading: false, data: [] })

    render(<Auctions />)

    expect(screen.getByText("No auctions found")).toBeInTheDocument()
  })

  it("affiche le tableau avec données", () => {
    (useAuctions as any).mockReturnValue({
      isLoading: false,
      data: [{ id: "1", name: "Item1" }],
    })

    render(<Auctions />)

    expect(screen.getByText("Item")).toBeInTheDocument()
    expect(screen.getByText("Item1")).toBeInTheDocument()
  })
})