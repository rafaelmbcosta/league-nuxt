import topScoresJson from "@/fixtures/top_scores/topScores.json"
import teamsJson from "@/fixtures/teams.json"

const delayedPromise = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data })
    }, 5000)
  })
}

export const topScores = () => {
  return delayedPromise(topScoresJson)
}

export const getTeams = () => {
  return delayedPromise(teamsJson)
}
