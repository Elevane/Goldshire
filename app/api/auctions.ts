import type { Realm } from "~/models/realm"

export const getAuctions = (realm: Realm) => {
  var auctions
  try {
    var result = fetch(
      `https://localhost:7206/Autctions?slug=${realm.name.toLocaleLowerCase()}&region=dynamic-eu`
    ).then((x) => x.json())
    auctions = result
  } catch {
    auctions = []
  }
  return auctions
}
