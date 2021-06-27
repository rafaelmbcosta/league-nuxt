import gql from "graphql-tag"

export const DISPUTES = gql`query {
  disputes {
    id
    name
    status
    rounds {
      id
      number
      status
    }
  }
}`
