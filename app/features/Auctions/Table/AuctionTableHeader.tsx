import React from "react"
import { TableHead, TableRow } from "~/components/ui/table"

interface AuctionTableHeaderProps {
  headers: string[]
}

const AuctionTableHeader: React.FC<AuctionTableHeaderProps> = ({ headers }) => {
  return (
    <TableHead>
      <TableRow>
        {headers.map((header, index) => (
          <TableHead key={index}>{header}</TableHead>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default AuctionTableHeader
