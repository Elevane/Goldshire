import type { FC } from "react"
import { Card } from "~/components/ui/card"
import { DealCardContent } from "~/features/Deal/DealCardContent"
import DealCardFooter from "~/features/Deal/DealCardFooter"
import DealCardHeader from "~/features/Deal/DealCardHeader"

export interface DealCardProps {
  lowestPrice: number
  higherPrice: number
  medianPrice: number
  number: number
  quantity: number
  profitRate: number
  itemId: number
  name: string
  estimatedSalesPerDay?: number // optionnel, pour calculer le ratio
}

const DealCard: FC<DealCardProps> = ({
  lowestPrice,
  higherPrice,
  medianPrice,
  number,
  profitRate,
  quantity,
  name,
  itemId,
  estimatedSalesPerDay = 1,
}) => {
  const isGoodDeal = number > 0
  return (
    <Card className="flex h-[300px] w-[320px] flex-col rounded-md shadow-md transition-shadow duration-300 hover:shadow-xl">
      <DealCardHeader
        lowestPrice={lowestPrice}
        higherPrice={higherPrice}
        medianPrice={medianPrice}
        quantity={quantity}
        name={name}
        itemId={itemId}
        isGoodDeal={isGoodDeal}
        number={number}
      />
      <DealCardContent
        lowerPrice={lowestPrice}
        medianPrice={medianPrice}
        higherPrice={higherPrice}
      />
      <DealCardFooter isGoodDeal={isGoodDeal} />
    </Card>
  )
}

export default DealCard
