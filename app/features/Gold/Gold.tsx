import React from "react"
import { useSplitCurrency } from "~/hooks/use-gold"

interface GoldProps {
  value: number
}
export const Gold: React.FC<GoldProps> = ({ value }) => {
  const { gold, silver, copper } = useSplitCurrency(value)
  return (
    <div>
      {gold > 0 && <span className="font-bold text-yellow-400">{gold}g </span>}
      {silver > 0 && (
        <span className="font-bold text-gray-400">{silver}s </span>
      )}
      <span className="font-bold text-yellow-700">{copper}c </span>
    </div>
  )
}
