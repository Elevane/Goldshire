import { atom } from "recoil"
import type { Realm } from "~/models/realm"

const realmState = atom<Realm | null>({
  key: "realmState",
  default: { name: "Hyjal", id: 0, connectedId: 0 },
})

export default realmState
