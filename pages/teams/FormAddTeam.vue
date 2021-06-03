<template>
<v-container>
  <h2 class="mb-8">ADICIONAR PARTICIPANTE</h2>
  <v-card :class="$style['left-border']">
    <v-card-text>
      <v-form>
        <v-autocomplete
          v-model="selectedTeam"
          :search-input.sync="autoCompleteInput"
          cache-items
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
import { mapGetters, mapActions } from "vuex"
export default {
  data: () => {
    return {
      selectedTeam: null,
      autoCompleteInput: ''
    }
  },
  watch: {
    autoCompleteInput (val) {
      val && val !== this.selectedTeam && this.getApiTeams(val)
    }
  },
  computed: {
    ...mapGetters("team", ["getSearchTeams"])
  },
  methods: {
    ...mapActions("team", ["getApiTeams"]),
    async addTeam() {
      try {
        await this.$axios.$post(`/api/v1/teams`, { team: {
          name: this.selectedTeam.nome,
          slug: this.selectedTeam.slug,
          url_escudo_png: this.selectedTeam.url_escudo_png,
          player_name: this.selectedTeam.nome_cartola,
          id_tag: this.selectedTeam.time_id
        }})
      } catch(err) {
        this.$store.dispatch("util/sendMessage", ["error", `Erro ao cadastrar time: ${err}`]);
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