import { useQuery } from "@tanstack/react-query"
import { getRealms } from "~/api/realms"
import type { Realm } from "~/models/realm"

export default function useRealm() {
  return useQuery<Realm[]>({ queryKey: ["realms"], queryFn: getRealms })
}
