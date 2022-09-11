export interface APIimages {
  images: ICardData[]
}

export interface ICardData {
  alt: string
  url: string
}

export interface ICardListData {
  cards: ICardData[]
  currentIndex: number
}

export interface ICard {
  card: ICardData
}
