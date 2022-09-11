import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { MOCK_CARDS_DATA } from '../card-list/card-list.test'
import { checkUrlAndImg } from '../card/card.test'
import Carousel from './carousel'

test('first should display 5,0,1,2,3 then on click previous should display 4,5,0,1,2', () => {
  render(<Carousel images={MOCK_CARDS_DATA} />)

  // check initial
  checkUrlAndImg('card5', '/url5')
  checkUrlAndImg('card0', '/url0')
  checkUrlAndImg('card1', '/url1')
  checkUrlAndImg('card2', '/url2')
  checkUrlAndImg('card3', '/url3')

  // click 'arrow-previous'
  fireEvent.click(screen.getByTestId('arrow-previous'))

  // check final
  checkUrlAndImg('card4', '/url4')
  checkUrlAndImg('card5', '/url5')
  checkUrlAndImg('card0', '/url0')
  checkUrlAndImg('card1', '/url1')
  checkUrlAndImg('card2', '/url2')
})

test('first should display 5,0,1,2,3 then on click next should display 0,1,2,3,4', () => {
  render(<Carousel images={MOCK_CARDS_DATA} />)

  // check initial
  checkUrlAndImg('card5', '/url5')
  checkUrlAndImg('card0', '/url0')
  checkUrlAndImg('card1', '/url1')
  checkUrlAndImg('card2', '/url2')
  checkUrlAndImg('card3', '/url3')

  // click 'arrow-next'
  fireEvent.click(screen.getByTestId('arrow-next'))

  // check final
  checkUrlAndImg('card0', '/url0')
  checkUrlAndImg('card1', '/url1')
  checkUrlAndImg('card2', '/url2')
  checkUrlAndImg('card3', '/url3')
  checkUrlAndImg('card4', '/url4')
})
