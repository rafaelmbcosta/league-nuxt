import topScoresJson from '@/fixtures/top_scores/topScores.json'

export const topScores = () => {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve({ data: topScoresJson })
    }, 10000);
  })
}