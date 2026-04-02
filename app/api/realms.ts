export const getRealms = () => {
  var realms
  try {
    var result = fetch("https://localhost:7206/realms").then((x) => x.json())
    realms = result
  } catch {
    realms = []
  }
  return realms
}
