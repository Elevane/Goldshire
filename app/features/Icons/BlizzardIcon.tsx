import { useQuery } from "@tanstack/react-query"
import React from "react"

interface BlizzardIconProps {
  id?: number
  name?: string
}

export const BlizzardIcon: React.FC<BlizzardIconProps> = ({ name, id }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["blizzardIcon", id],
    queryFn: async () => {
      const response = await fetch(`https://localhost:7206/images/${id}`)
      return response.text()
    },
  })

  return (
    <section className="flex flex-row items-start gap-2">
      <img
        width={32}
        height={32}
        className="mt-2 flex-shrink-0 rounded-sm border border-solid border-gray-300"
        src={data}
        alt={`icon_auction_number_${id}`}
      />
      <h2 className="m0 max-w-xs text-lg">{name}</h2>
    </section>
  )
}
