<template>
  <div>
    <h3>GERENCIAR RODADAS</h3>
    <v-row>
      <v-col cols="10">
        <v-card class="my-5">
          <v-card-title>
            <h4>{{ !!dispute && dispute.name.toUpperCase() }}</h4>
          </v-card-title>
          <v-card-text>
            <h4 class="my-5">
              RODADAS SELECIONADAS:
            </h4>
            <RoundChips :rounds="dispute.rounds" />
            <h4 class="my-5">
              RODADAS DISPONÍVEIS:
            </h4>
            <RoundPool :pool="roundPool" :dispute="dispute" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-btn color="error" to="/disputes">
      Voltar
    </v-btn>
  </div>
</template>

<script>
import RoundPool from "@/components/disputes/RoundPool"
import RoundChips from "@/components/disputes/RoundChips"
import { DISPUTES } from "~/graphql/queries/disputes/disputes.gql"
import { POOL } from "@/graphql/queries/rounds/pool"

export default {
  components: {
    RoundPool,
    RoundChips
  },
  computed: {
    dispute () {
      return this.disputes.filter(element => element.id === this.$route.params.id)[0]
    }
  },
  apollo: {
    roundPool: POOL,
    disputes: DISPUTES
  }
}
</script>

<style>

</style>
