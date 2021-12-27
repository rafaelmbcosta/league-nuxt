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
import DisputeCard from "@/components/disputes/DisputeCard"
import { DISPUTES } from "~/graphql/queries/disputes/disputes.gql"

export default {
  components: { DisputeCard },
  middleware: ["auth"],
  apollo: {
    disputes: DISPUTES
  }
}
</script>

<style>

</style>
