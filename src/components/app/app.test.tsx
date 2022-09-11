import { MockedProvider } from '@apollo/client/testing'
import { render, screen, waitFor } from '@testing-library/react'
import { GET_IMAGES } from '../../queries/get-images'
import { MOCK_CARDS_DATA } from '../card-list/card-list.test'
import App from './app'

const mocksSuccess = [
  {
    request: {
      query: GET_IMAGES,
      variables: {
        limit: 6,
      },
    },
    result: {
      data: {
        image: MOCK_CARDS_DATA,
      },
    },
  },
]

const mocksError = [
  {
    request: {
      query: GET_IMAGES,
    },
    error: new Error('An error occurred'),
  },
]

test('should display icon SvgLoading first then display Carousel when data is fetch', async () => {
  render(
    <MockedProvider mocks={mocksSuccess} addTypename={true}>
      <App />
    </MockedProvider>
  )

  expect(await screen.getByTestId('loading')).toBeInTheDocument()
  await waitFor(() =>
    expect(screen.getByTestId('carousel')).toBeInTheDocument()
  )
})

test('should display icon SvgLoading first then error when fetch data return an error', async () => {
  render(
    <MockedProvider mocks={mocksError} addTypename={false}>
      <App />
    </MockedProvider>
  )

  expect(await screen.getByTestId('loading')).toBeInTheDocument()
  await waitFor(() => expect(screen.getByText('error')).toBeInTheDocument())
})
