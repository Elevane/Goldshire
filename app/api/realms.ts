import axios from "axios"

export const getRealms = () => {
  var realms
  try {
    var result = axios
      .get(`${import.meta.env.API_URL}realms`)
      .then((x) => x.data)
    realms = result
  } catch {
    realms = []
  }
  return realms
}
