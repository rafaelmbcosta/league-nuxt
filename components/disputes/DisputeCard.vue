<template>
  <BorderCard
    color="green"
    class="mt-5"
  >
    <div>{{ dispute.name }}</div>
    <div>STATUS: {{ dispute.status }}</div>
    <div>RODADAS: {{ dispute.rounds }}</div>
    <div>{{ dispute }}</div>
  </BorderCard>
</template>

<script>
import BorderCard from '@/components/shared/BorderCard'

export default {
  components: {
    BorderCard
  },

  props: ['dispute']
}
</script>

<style>

</style>
