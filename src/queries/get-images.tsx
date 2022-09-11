import { gql } from '@apollo/client'

export const GET_IMAGES = gql`
  query GetImages($limit: Int) {
    image(limit: $limit) {
      url
      alt
    }
  }
`
