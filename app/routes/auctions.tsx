import { Loader } from "lucide-react"
import { Table } from "~/components/ui/table"
import AuctionTableHeader from "~/features/Auctions/Table/AuctionTableHeader"
import { AuctionTableBody } from "~/features/Auctions/Table/AuctionTableBody"
import useAuctions from "~/hooks/use-auctions"

export default function Auctions() {
  const { isLoading, data } = useAuctions()

  if (isLoading) {
    return (
      <div className="flex justify-center p-6">
        <Loader className="animate-spin" />
      </div>
    )
  }

  if (!data || data.length === 0) {
    return <div className="p-6 text-center">No auctions found</div>
  }

  return (
    <Table className="w-full table-fixed">
      <AuctionTableHeader
        headers={["Item", "Bid", "Buyout", "Quantity", "Time Left"]}
      />
      <AuctionTableBody auctions={data} />
    </Table>
  )
}
