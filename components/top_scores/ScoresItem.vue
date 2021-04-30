<template>
  <v-col cols="3">
    <v-card flat class="card-top-score">
      <v-card-text>
        <div class="d-flex flex-column justify-center text-center">
          <h3> {{ score.title }} </h3>
          <v-img :src="score.icon" class="mt-5 mx-auto text-center" width="40%" />
          <div class="mt-5"><b>{{ score.team }}</b></div>
          <div>{{ score.player }}</div>
        </div>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ["score"]
}
</script>

<style>
  h3 {
    color: #0E9594 !important;
  }
  .card-top-score {
    border: 1px solid gray !important;
    border-radius: 20px !important;
  }
</style>