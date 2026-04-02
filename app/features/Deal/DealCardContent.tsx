import React from "react"
import { CardContent } from "~/components/ui/card"
import { Gold } from "../Gold/Gold"

interface DealCardContentProps {
  lowerPrice: number
  medianPrice: number
  higherPrice: number
}

export const DealCardContent: React.FC<DealCardContentProps> = ({
  lowerPrice,
  medianPrice,
  higherPrice,
}) => {
  return (
    <CardContent className="grid flex-1 grid-cols-3 items-center gap-2 text-center">
      <div>
        <p className="text-xs text-muted-foreground">Low</p>
        <Gold value={lowerPrice} />
      </div>

      <div>
        <p className="text-xs text-muted-foreground">Med</p>
        <Gold value={medianPrice} />
      </div>

      <div>
        <p className="text-xs text-muted-foreground">High</p>
        <Gold value={higherPrice} />
      </div>
    </CardContent>
  )
}
