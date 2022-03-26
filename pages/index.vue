<template>
  <div>
    <v-row>
      <v-col cols="12">
        <Notices />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2 class="title">
          MAIORES PONTUADORES
        </h2>
        <TopScores />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TopScores from "@/components/top_scores/Index.vue"
import Notices from "@/components/notices/Index.vue"

export default {
  components: { TopScores, Notices }
}
</script>

<style scoped>
  .title {
    margin-bottom: 30px;
  }
</style>
