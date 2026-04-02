import React from "react"
import { TableBody, TableCell, TableRow } from "~/components/ui/table"
import { Gold } from "~/features/Gold/Gold"
import { BlizzardIcon } from "~/features/Icons/BlizzardIcon"
import type { Auction } from "~/models/auction"

interface AuctionTableBodyProps {
  auctions: Auction[]
}

export const AuctionTableBody: React.FC<AuctionTableBodyProps> = ({
  auctions,
}) => {
  return (
    <TableBody>
      {auctions.map((auction: Auction) => (
        <TableRow key={auction.item.id}>
          <TableCell>
            <BlizzardIcon id={auction.item.id} />
          </TableCell>
          <TableCell>
            <Gold value={auction.bid} />
          </TableCell>
          <TableCell>
            <Gold value={auction.buyout} />
          </TableCell>
          <TableCell>{auction.quantity}</TableCell>
          <TableCell>{auction.time_left}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}
