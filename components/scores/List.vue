<template>
  <div>
    {{ scores }}
  </div>
</template>

<script>
import SCORES from '@/graphql/queries/scores/monthScores'
import { mapGetters } from 'vuex'

export default {
  mounted() {
    console.log(this.$apollo.queries, 'apollo queries')
  },
  computed: {
    ...mapGetters('scores', ['selected'])
  },
  apollo: {
    scores: {
      query: SCORES,
      variables() {
        return {
          disputeId: this.selected.dispute
        }
      }
    }
  }
}
</script>

<style>

</style>
