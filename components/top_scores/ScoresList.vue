<template>
  <v-row>
    <ScoresItem
      v-for="(box, index) in boxes"
      :key="index"
      :score="scoreData(box)"
    />
  </v-row>
</template>

<script>
import ScoresItem from "./ScoresItem"

export default {
  components: { ScoresItem },
  props: {
    scores: {
      type: Array,
      default () { return [] }
    }
  },
  data () {
    return {
      boxes: [
        {
          type: "month",
          title: "MÊS DE DISPUTA",
          ref: "/scores/month"
        },
        {
          type: "league",
          title: "MÊS DE DISPUTA",
          ref: "/scores/league"
        },
        {
          type: "championship",
          title: "CAMPEONATO",
          ref: "/scores/championship"
        },
        {
          type: "currency",
          title: "PATRIMÔNIO",
          ref: "/scores/currency"
        }
      ]
    }
  },
  methods: {
    scoreData (box) {
      const score = this.scores.find(element => element.type === box.type)
      return { ...score, title: box.title, ref: box.ref }
    }
  }
}
</script>

<style>

</style>
