<template>
  <div>
    <v-row>
      <v-col cols="12">
        <TopScores />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <Scores />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TopScores from "@/components/top_scores/Index.vue"
import Scores from "@/components/scores/Index.vue"

export default {
  components: {
    TopScores,
    Scores
  }
}
</script>
