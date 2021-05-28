<template>
  <div>
    <h1>MESES DE DISPUTA</h1>

    <v-btn
      class="mt-10"
      color="primary"
      to="/disputes/new"
    >
      NOVO MÊS DE DISPUTA
    </v-btn>

    <DisputeCard
      v-for="(dispute, index) in disputes"
      :key="index"
      :dispute="dispute"
    />

  </div>
</template>

<script>
import DisputeCard from '@/components/disputes/DisputeCard'
import gql from 'graphql-tag'

export default {
  middleware: ["auth"],
  components: { DisputeCard },
  apollo: {
    disputes: gql`query {
      disputes {
        id
        name
        status
        rounds {
          number
        }
      }
    }`
  }
}
</script>

<style>

</style>
