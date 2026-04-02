import { useQuery } from "@tanstack/react-query"
import { useRecoilValue } from "recoil"
import { getAuctions } from "~/api/auctions"
import type { Realm } from "~/models/realm"
import realmState from "~/state/realmState"

export default function useAuctions() {
  const realm = useRecoilValue<Realm | null>(realmState)

  return useQuery({
    queryKey: ["auctions", realm?.id],
    queryFn: () => (realm ? getAuctions(realm) : Promise.resolve([])),
    enabled: !!realm,
  })
}
