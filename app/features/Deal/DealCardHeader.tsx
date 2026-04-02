import React from "react"
import { BlizzardIcon } from "~/features/Icons/BlizzardIcon"
import { CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import type { Deal } from "~/models/deal"
import { Gold } from "../Gold/Gold"

interface DealCardHeaderProps {
  lowestPrice: number
  higherPrice: number
  medianPrice: number
  quantity: number
  name: string
  itemId: number
  number: number
  isGoodDeal: boolean
}

const DealCardHeader: React.FC<DealCardHeaderProps> = ({
  lowestPrice,
  higherPrice,
  medianPrice,
  quantity,
  name,
  itemId,
  isGoodDeal,
  number,
}) => {
  function getProfitRate(deal: Deal): number {
    const range = deal.higherPrice - deal.lowestPrice
    if (range <= 0) return 0 // éviter division par zéro
    return Math.floor(
      (deal.quantity * (deal.medianPrice - deal.lowestPrice)) / range
    )
  }

  return (
    <CardHeader className="pb-2">
      <CardTitle className="text-lg font-semibold">
        <BlizzardIcon id={itemId} name={name} />
      </CardTitle>
      <CardDescription>
        <p>
          {" "}
          Profit:{" "}
          <span
            className={`text-sm font-medium ${
              isGoodDeal ? "text-green-300" : "text-red-300"
            }`}
          >
            <Gold value={number} />{" "}
          </span>
        </p>
        <p>
          Profit Rate:{" "}
          <span
            className={`text-sm font-medium ${
              isGoodDeal ? "text-green-300" : "text-red-300"
            }`}
          >
            <Gold
              value={getProfitRate({
                lowestPrice,
                higherPrice,
                medianPrice,
                quantity,
              } as Deal)}
            />
          </span>
        </p>
      </CardDescription>
    </CardHeader>
  )
}

export default DealCardHeader
