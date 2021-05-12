<template>
  <div>
    <h1> Regras </h1>
    <Loader />
    <div v-if="currentRules && !!currentRules.text">
      <p>{{ currentRules.text }}</p>
    </div>
    <div v-else>
      <p> As regras desta temporada ainda não foram cadastradas </p>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import Loader from '@/components/shared/Loader'

export default {
  components: { Loader },
  apollo: {
    currentRules: gql`query {
      currentRules {
        text
      }
    }`
  }
}
</script>

<style>

</style>
