<template>
  <div class="main d-flex flex-row justify-start align-center">
    <div style="width: 30px;">
      <v-img :src="team.url_escudo_png" class="mt-5 mx-auto text-center" />
    </div>
    <div>{{ team.name }}</div>
    <div>{{ team.player_name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    team: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>
  div {
    margin: 20px;
  }
  .main {
    width: 40%;
    height: 15px;
  }
</style>
