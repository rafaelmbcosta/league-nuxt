<template>
  <v-card>
    <v-card-text class="d-flex flex-row justify-space-between align-center">
      <strong>{{ index + 1 }}</strong>
      <TeamColumn :team="score.team" />
      DETALHES
    </v-card-text>
  </v-card>
</template>

<script>
import TeamColumn from '@/components/shared/TeamColumn.vue'

export default {
  components: {
    TeamColumn
  },
  props: {
    score: {
      type: Object,
      default: null
    },
    index: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style>

</style>
