import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import RealmSelect from "./RealmSelect"

vi.mock("~/components/ui/select", () => ({
  Select: ({ children, onValueChange }: any) => (
    <div onClick={() => onValueChange?.("mocked")}>{children}</div>
  ),
  SelectTrigger: ({ children }: any) => <div>{children}</div>,
  SelectValue: ({ placeholder }: any) => <span>{placeholder}</span>,
  SelectContent: ({ children }: any) => <div>{children}</div>,
  SelectGroup: ({ children }: any) => <div>{children}</div>,
  SelectLabel: ({ children }: any) => <div>{children}</div>,
  SelectItem: ({ children }: any) => <div>{children}</div>,
}))

vi.mock("lucide-react", () => ({
  Loader: () => <svg data-testid="loader" />,
}))

describe("RealmSelect", () => {
  it("affiche le placeholder quand aucun realm", () => {
    render(
      <RealmSelect realms={[]} isLoading={false} onChange={vi.fn()} />
    )

    expect(screen.getByText("No realms available")).toBeInTheDocument()
  })

  it("affiche le placeholder quand realms présents", () => {
    render(
      <RealmSelect
        realms={[{ id: 1, connectedId: 2, name: "Realm1" }]}
        isLoading={false}
        onChange={vi.fn()}
      />
    )

    expect(screen.getByText("Select a realm")).toBeInTheDocument()
  })

  it("affiche loading state", () => {
    render(
      <RealmSelect realms={[]} isLoading={true} onChange={vi.fn()} />
    )

    expect(screen.getByText("Loading realms...")).toBeInTheDocument()
    expect(screen.getByTestId("loader")).toBeInTheDocument()
  })

  it("affiche la liste des realms", () => {
    render(
      <RealmSelect
        realms={[
          { id: 1, connectedId: 2, name: "Realm1" },
          { id: 2, connectedId: 1, name: "Realm2" },
        ]}
        isLoading={false}
        onChange={vi.fn()}
      />
    )

    expect(screen.getByText("Realm1")).toBeInTheDocument()
    expect(screen.getByText("Realm2")).toBeInTheDocument()
  })

  it("appelle onChange", () => {
    const onChange = vi.fn()

    render(
      <RealmSelect
        realms={[{ id: 1, connectedId: 2, name: "Realm1" }]}
        isLoading={false}
        onChange={onChange}
      />
    )

    fireEvent.click(screen.getByText("Select a realm"))

    expect(onChange).toHaveBeenCalledWith("mocked")
  })
})