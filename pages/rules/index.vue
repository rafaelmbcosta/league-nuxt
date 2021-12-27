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
    <div v-if="$apollo.loading">
      Carregando...
    </div>
  </div>
</template>

<script>
import CURRENT_RULES_QUERY from '@/graphql/queries/currentRules.gql'

export default {
  apollo: {
    currentRules: CURRENT_RULES_QUERY
  }
}
</script>

<style>

</style>
