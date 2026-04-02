export function useSplitCurrency(x: number) {
  const gold = Math.floor(x / 10000)
  const silver = Math.floor((x % 10000) / 100)
  const copper = x % 100

  return { gold, silver, copper }
}
