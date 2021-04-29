import topScoresJson from '@/fixtures/top_scores/topScores.json'

const delayedPromise = (data) => {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve({ data })
    }, 5000);
  })
}

export const topScores = () => {
  return delayedPromise(topScoresJson)
}