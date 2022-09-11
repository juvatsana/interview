import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Card, { hotfixUrl } from './card'

const EXPECTED_URL = 'https://photos.tf1.fr/vignette.jpg'

export const checkUrlAndImg = (alt: string, url: string) => {
  expect(screen.getByText(alt)).toBeInTheDocument()
  const image = screen.getByAltText(alt)
  expect(image).toHaveAttribute('src', url)
}

test('should replace /vvv by /v in url', () => {
  const badUrl = 'https://photos.tf1.fr/vvvignette.jpg'
  expect(hotfixUrl(badUrl)).toBe(EXPECTED_URL)
})

test('should replace /vv by /v in url', () => {
  const badUrl = 'https://photos.tf1.fr/vvignette.jpg'
  expect(hotfixUrl(badUrl)).toBe(EXPECTED_URL)
})

test('should display a card with url and alt ', () => {
  const card = {
    alt: 'alt',
    url: EXPECTED_URL,
  }
  render(<Card card={card} />)
  checkUrlAndImg('alt', EXPECTED_URL)
})
