import axios from "axios"

export const getDeals = () => {
  var deals
  try {
    var result = axios
      .get(`${import.meta.env.API_URL}deals`)
      .then((x) => x.data)
    deals = result
  } catch {
    deals = []
  }
  return deals
}
