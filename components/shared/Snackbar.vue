<template>
  <v-snackbar
    v-model="snackBar.show"
    data-cy="snackbar-desktop"
    :timeout="10000"
    :color="snackBar.color"
    :vertical="true"
    :top="true"
    :right="true"
  >
    <span light data-cy="snackbar-desktop-text">{{ snackBar.text }}</span>

    <v-btn
      dark
      text
      data-cy="snackbar-desktop-close"
      @click="closeSnack"
    >
      FECHAR
    </v-btn>
  </v-snackbar>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('util', ['snackBar'])
  },
  methods: {
    ...mapActions('util', ['closeSnack'])
  }

}
</script>

<style>

</style>
