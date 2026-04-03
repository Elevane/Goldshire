import type { Realm } from "~/models/realm"
import axios from "axios"
export const getAuctions = (realm: Realm) => {
  var auctions
  try {
    var result = axios
      .get(
        `${import.meta.env.API_URL}auctions?slug=${realm.name.toLocaleLowerCase()}&region=dynamic-eu`
      )
      .then((x) => x.data)
    auctions = result
  } catch {
    auctions = []
  }
  return auctions
}
