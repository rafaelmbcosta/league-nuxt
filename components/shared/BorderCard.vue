<template>
  <v-card
    :style="style"
    class="pa-8 card-border"
  >
    <slot />
  </v-card>
</template>

<script>
export default {
  props: ["color"],
  computed: {
    style() {
      return {
        "border-radius": "5px !important",
        "border-left": `7px solid ${this.color}`
      }
    }
  }
}
</script>
