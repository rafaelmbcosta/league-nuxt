<template>
  <v-container>
    <h2 class="title">
      MAIORES PONTUADORES
    </h2>
    <Loader v-if="loading" />

    <ScoresList v-if="haveScores" :scores="scores" />
  </v-container>
</template>

<script>

import { mapState, mapGetters } from 'vuex'
import Loader from './Loader'
import ScoresList from './ScoresList'

export default {
  components: { Loader, ScoresList },
  computed: {
    ...mapState('top_scores', ['scores', 'loading']),
    ...mapGetters('top_scores', ['haveScores'])
  }
}

</script>

<style scoped>
  .title {
    margin-bottom: 30px;
  }
</style>
