<template>
  <div>
    <h1> LOGIN </h1>
    <v-card class="mt-5" :loading="loading">
      <v-card-text>
        <v-text-field :disabled="loading" label="EMAIL" v-model="email"></v-text-field>
        <v-text-field :disabled="loading" type="password" label="PASSWORD" v-model="password"></v-text-field>
      </v-card-text>
      <v-btn :disabled="loading" class="ma-5" color="primary" @click="login({email, password})">CONFIRMAR</v-btn>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      email: 'teste@gmail.com',
      password: '123456'
    }
  },
  computed: {
    ...mapState("util", ["loading"])
  },
  methods: {
    ...mapActions("util", ["login"])
  }
}
</script>

<style>

</style>