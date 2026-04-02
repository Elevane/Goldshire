import { useQuery } from "@tanstack/react-query"
import { getDeals } from "~/api/deals"
import type { Deal } from "~/models/deal"

export default function useDeals() {
  return useQuery<Deal[]>({ queryKey: ["deals"], queryFn: getDeals })
}
