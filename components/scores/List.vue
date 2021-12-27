<template>
  <div class="mt-5">
    <ScoreCard
      v-for="(score, index) in scores"
      :key="index"
      flat
      class="mb-1"
      :score="score"
      :index="index"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import ScoreCard from "./ScoreCard.vue"
import SCORES from "@/graphql/queries/scores/monthScores"

export default {
  components: {
    ScoreCard
  },
  computed: {
    ...mapGetters("scores", ["selected"])
  },
  // tornar essa QUERY dinamica...
  apollo: {
    scores: {
      query: SCORES,
      variables () {
        return {
          disputeId: this.selected.dispute || 0
        }
      }
    }
  }
}
</script>

<style>

</style>
