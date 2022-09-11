import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { checkUrlAndImg } from '../card/card.test'
import CardList, { getCircularElement } from './card-list'

export const MOCK_CARDS_DATA = [
  {
    alt: 'card0',
    url: '/url0',
  },
  {
    alt: 'card1',
    url: '/url1',
  },
  {
    alt: 'card2',
    url: '/url2',
  },
  {
    alt: 'card3',
    url: '/url3',
  },
  {
    alt: 'card4',
    url: '/url4',
  },
  {
    alt: 'card5',
    url: '/url5',
  },
]

test('should display 5 cards', () => {
  render(<CardList cards={MOCK_CARDS_DATA} currentIndex={1} />)
  checkUrlAndImg('card5', '/url5')
  checkUrlAndImg('card0', '/url0')
  checkUrlAndImg('card1', '/url1')
  checkUrlAndImg('card2', '/url2')
  checkUrlAndImg('card3', '/url3')
})

test('circular element of index 2 should be card2', () => {
  expect(getCircularElement(MOCK_CARDS_DATA, 2)).toStrictEqual({
    alt: 'card2',
    url: '/url2',
  })
})

test('circular element of index -1 should be card5', () => {
  expect(getCircularElement(MOCK_CARDS_DATA, -1)).toStrictEqual({
    alt: 'card5',
    url: '/url5',
  })
})

test('circular element of index 6 should be card0', () => {
  expect(getCircularElement(MOCK_CARDS_DATA, 6)).toStrictEqual({
    alt: 'card0',
    url: '/url0',
  })
})
