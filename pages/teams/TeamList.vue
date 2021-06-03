<template>
<v-row>
  <v-col>
    <v-card
      v-for="(team, i) in teams" :key="i"
      class="mb-3 d-flex align-center"
      :style="[
        team.active
        ? {'border-left': `8px solid ${activeTrue}`}
        : {'border-left': `8px solid ${activerFalse}`}]"
    >
      <v-card-text :class="$style['card-text']">
        <span :style="[team.active ? {color: activeTrue} : {color: activerFalse}]">
          <strong>{{ team.active ? "ATIVO" : "INATIVO" }}</strong>
        </span>
        <strong>{{ team.name }}</strong>
        <v-img
          :class="$style['img-small']"
          :src="imageError ? require('@/assets/logo-ferroviario-256.png') : team.urlEscudoPng"
          @error="altImageError()"
        ></v-img>
        <span>{{ team.playerName }}</span>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          v-if="team.active === false"
          @click="changeActiveTeam(team)"
          color="primary"
          outlined
          x-small
        >
          ATIVAR
        </v-btn>
        <v-btn
          v-if="team.active"
          @click="changeActiveTeam(team)"
          color="red darken-1"
          outlined
          x-small
        >
          DESATIVAR
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</v-row>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "TeamList",
  data: () => {
    return {
      activeTrue: "teal",
      activerFalse: "red",
      imageError: false
    }
  },
  // Tentar isolar essa query
  apollo: {
    teams: gql`
     query teams {
       teams {
         id
         active
         name
         playerName
         urlEscudoPng
       }
     }
    `
  },
  methods: {
    altImageError() {
      this.imageError = true
    },
    async changeActiveTeam (team) {
      this.$store.dispatch("team/activeTeam", team)
    }
  }
}
</script>
<style module>
  .img-small{
    max-width: 40px !important;
  }
  .card-text {
    display: grid;
    grid-template-columns: 7% 16% 10% 15%;
  }
</style>