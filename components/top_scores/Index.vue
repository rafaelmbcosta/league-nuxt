<template>
  <v-container>
    <h2 class="title">MAIORES PONTUADORES</h2>
    {{ loading }}
    AUTH: {{ this.$auth.user }}
    <Loader v-if="loading" />

    <ScoresList v-if="haveScores" :scores="scores" />
  </v-container>
</template>

<script>

import { mapState, mapGetters } from 'vuex'
import Loader from './Loader'
import ScoresList from './ScoresList'

export default {
  created() {
    console.log("log do client")
  },
  computed: {
    ...mapState('top_scores', ['scores', 'loading']),
    ...mapGetters('top_scores', ['haveScores'])
  },
  components: { Loader, ScoresList }
}

</script>

<style scoped>
  .title {
    margin-bottom: 30px;
  }
</style>