<template>
  <div>
    <h1> LOGIN </h1>
    <v-card class="mt-5" :loading="loading">
      <v-card-text>
        <v-text-field v-model="credentials.email" :disabled="loading" label="EMAIL" />
        <v-text-field v-model="credentials.password" :disabled="loading" type="password" label="PASSWORD" />
      </v-card-text>
      <v-btn :disabled="loading" class="ma-5" color="primary" @click="login()">
        CONFIRMAR
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import loginGql from '../graphql/Login.gql'

export default {
  data () {
    return {
      // email: "zora@gmail.com",
      // password: "123456",
      credentials: {
        email: "zora@gmail.com",
        password: "123456"
      }
    }
  },
  computed: {
    ...mapState('util', ['loading'])
  },
  methods: {
    // ...mapActions('util', ['login']),
    async login () {
      const credentials = this.credentials
      try {
        const res = await this.$apollo.mutate({
          mutation: loginGql,
          variables: credentials
        })
        await this.$apolloHelpers.onLogin(res.data.login)
        const token = this.$apolloHelpers.getToken()
        this.$store.commit("util/SET_TOKEN", token)
        this.$router.push('/')
      } catch(err) {
        console.log(err)
      }
    }
  }
}
</script>

<style>

</style>
