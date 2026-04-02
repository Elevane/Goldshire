export type TimeLeft = "SHORT" | "MEDIUM" | "LONG" | "VERY_LONG"

export interface Auction {
  // long -> number
  item: AuctionItem
  bid: number // optionnel
  buyout: number // optionnel
  quantity: number
  time_left: string
}

export interface AuctionItem {
  id: number
  context?: number
  bonus_lists?: number[]
  modifiers?: Modifier[]
}

export interface Modifier {
  type: number
  value: number
}
