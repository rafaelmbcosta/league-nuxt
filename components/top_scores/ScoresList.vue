<template>
  <v-row>
    <ScoresItem
      v-for="(score, index) in scores"
      :key="index"
      :score="score"
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
      default: () => []
    }
  }
}
</script>

<style>

</style>
