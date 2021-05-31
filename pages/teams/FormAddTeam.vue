<template>
<v-container>
  {{ selectedTeam }}
  <h2 class="mb-8">ADICIONAR PARTICIPANTE</h2>
  {{ getSearchTeams }}
  <v-card :class="$style['left-border']">
    <v-card-text>
      <v-form>
        <v-autocomplete
          v-model="selectedTeam"
          label="Buscar Time"
          :items="getSearchTeams"
          item-text="nome"
          return-object
        ></v-autocomplete>
      </v-form>

      <v-card-actions>
        <v-btn @click="addTeam" color="primary">ADICIONAR</v-btn>
      </v-card-actions>

      <span>Não encontrou? Clique <router-link custom to="/tag">Aqui</router-link> para buscar pela TAG</span>
    </v-card-text>
  </v-card>
</v-container>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  data: () => {
    return {
      selectedTeam: null
    }
  },
  created() {
    this.$store.dispatch("team/getSearchTeams")
  },
  computed: {
    ...mapGetters("team", ["getSearchTeams"])
  },
  methods: {
    async addTeam() {
      try {
        console.log({
          name: this.selectedTeam.nome,
          slug: this.selectedTeam.slug,
          url_escudo_png: this.selectedTeam.url_escudo_png,
          player_name: this.selectedTeam.nome_cartola,
          id_tag: this.selectedTeam.time_id
        }, 'add team')
        const response = await this.$axios.$get(`/api/v1/teams`, { team: {
          name: this.selectedTeam.nome,
          slug: this.selectedTeam.slug,
          url_escudo_png: this.selectedTeam.url_escudo_png,
          player_name: this.selectedTeam.nome_cartola,
          id_tag: this.selectedTeam.time_id
        }})
      } catch(err) {
        console.log(err)
      }
    }
  }
}
</script>

<style module>
  .left-border {
    border-left: 8px solid #008172 !important;
  }
</style>