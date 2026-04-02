export const getDeals = () => {
  var deals
  try {
    var result = fetch("https://localhost:7206/deals").then((x) => x.json())
    deals = result
  } catch {
    deals = []
  }
  return deals
}
