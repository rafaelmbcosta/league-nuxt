<template>
  <BorderCard
    color="green"
    class="mt-5"
  >
    <h3>{{ dispute.name.toUpperCase() }}</h3>
    <div class="mt-5">RODADAS: {{ dispute.rounds.join(',') }}</div>
    <div>{{ dispute }}</div>
    <Actions :dispute="dispute" v-if="dispute.status == 'created'" />
  </BorderCard>
</template>

<script>
import Actions from './Actions'
import BorderCard from '@/components/shared/BorderCard'

export default {
  components: {
    BorderCard,
    Actions
  },

  props: ['dispute']
}
</script>

<style>

</style>
