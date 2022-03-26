<template>
  <div>
    <v-alert
      v-for="(notice, index) in notices"
      :key="index"
      border="left"
      dismissible
      outlined
      dense
      class="alert-box"
      :type="notice.type"
    >
      {{ notice.message }}
    </v-alert>
  </div>
</template>

<script>
export default {
  data () {
    return {
      notices: [
        { type: "error", message: "ATENÇÃO: Mercado fecha hoje as 16:00" },
        { type: "success", message: "Mercado Aberto" },
        { type: "warning", message: "IMPORTANTE: Essa rodada é premiada!" }
      ]
    }
  }
}
</script>

<style>
  .alert-box {
    background-color: white !important;
  }
</style>
