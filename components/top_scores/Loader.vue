<template>
  <v-row justify="center" align="center">
    <v-col
      cols="3"
      v-for="(n, index) in 4"
      :key="index"
    >
      <v-skeleton-loader
        class="mx-auto"
        type="image"
      ></v-skeleton-loader>
    </v-col>
  </v-row>
</template>

<script>
export default {

}
</script>
