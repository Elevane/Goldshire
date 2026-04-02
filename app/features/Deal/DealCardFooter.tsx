import React from "react"
import { Button } from "~/components/ui/button"
import { CardFooter } from "~/components/ui/card"

interface DealCardFooterProps {
  isGoodDeal: boolean
}

const DealCardFooter: React.FC<DealCardFooterProps> = ({ isGoodDeal }) => {
  return (
    <CardFooter>
      <Button variant={isGoodDeal ? "default" : "outline"} className="w-full">
        View
      </Button>
    </CardFooter>
  )
}

export default DealCardFooter
