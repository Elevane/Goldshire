// hooks/use-realm-selection.ts
import { useRecoilState } from "recoil"
import realmState from "~/state/realmState"
import useRealm from "~/hooks/use-realms"
import { toast } from "sonner"
import type { Realm } from "~/models/realm"

export default function useRealmSelection() {
  const { data, isLoading } = useRealm()
  const [realm, setRealm] = useRecoilState<Realm | null>(realmState)

  const selectRealm = (value: string) => {
    const selected = data?.find((r) => r.name === value)
    if (!selected) return

    setRealm(selected)
    toast.success(`Successfully changed realm to ${selected.name}`, {
      position: "bottom-center",
    })
  }

  return {
    realms: data ?? [],
    isLoading,
    selectedRealm: realm,
    selectRealm,
  }
}
