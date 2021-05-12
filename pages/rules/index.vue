<template>
  <div>
    <div v-if="!$apollo.loading" class="mt-12">
      <div v-if="currentRules && !!currentRules.text">
        <div v-html="currentRules.text" />
      </div>
      <div v-else>
        <p> As regras desta temporada ainda não foram cadastradas </p>
      </div>
    </div>
    <div v-if="$apollo.isLoading">
      Carregando...
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
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
