<template>
  <v-row justify="center" align="center">
    <v-col
      v-for="(n, index) in 4"
      :key="index"
      cols="3"
    >
      <v-skeleton-loader
        class="mx-auto"
        type="image"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {

}
</script>
