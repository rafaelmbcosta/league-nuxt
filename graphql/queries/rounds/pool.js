import gql from "graphql-tag"

export const POOL = gql`query {
  roundPool {
    id
    number
  }
}`
