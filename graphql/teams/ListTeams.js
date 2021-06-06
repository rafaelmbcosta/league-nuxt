import gql from "graphql-tag"

export const TEAMS = gql`query {
  teams {
    id
    active
    name
    playerName
    urlEscudoPng
  },
}`