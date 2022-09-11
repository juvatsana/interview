import { ICardData, ICardListData } from '../../common/types'
import Card from '../card/card'

/**
 * Retourne l'element d'une array en fonction d'un indice circulaire
 * exemple:
 * const arr = ['a', 'b', 'c']
 * ['b', 'c', 'a', 'b', 'c', 'a', 'b']
 *  -2   -1    0    1    2    3    4
 * @param cards liste des cards
 * @param index index circulaire demandé
 * @returns l'element a l'index demandé
 */
export const getCircularElement = (cards: ICardData[], index: number) => {
  return cards[((index % cards.length) + cards.length) % cards.length]
}

function CardList({ cards, currentIndex }: ICardListData) {
  return (
    <div className="contents">
      <Card card={getCircularElement(cards, currentIndex - 2)} />
      <Card card={getCircularElement(cards, currentIndex - 1)} />
      <Card card={cards[currentIndex]} />
      <Card card={getCircularElement(cards, currentIndex + 1)} />
      <Card card={getCircularElement(cards, currentIndex + 2)} />
    </div>
  )
}

export default CardList
