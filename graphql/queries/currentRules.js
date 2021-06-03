import gql from "graphql-tag"

export const currentRulesQuery = gql`query {
  currentRules {
    text
  }
}`
