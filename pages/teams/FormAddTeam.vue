<template>
<v-container>
  <h2 class="mb-8">ADICIONAR PARTICIPANTE</h2>
  <v-card :class="$style['left-border']">
    <v-progress-linear v-if="getIsLoading" indeterminate color="teal darken-2" />
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
        >
          <template v-slot:selection="data">
            <v-chip
              :input-value="data.selected"
              class="chip--select-multi"
            >
              <v-avatar>
                <img :src="data.item.url_escudo_png" >
              </v-avatar>
              {{ data.item.nome }} ({{ data.item.nome_cartola }})
            </v-chip>
          </template>

          <template v-slot:item="data">
            <template v-if="typeof data.item !== 'object'">
              {{ data.item.nome }}
            </template>
            <template v-else>
              <TeamItem
                :team=" {
                  name: data.item.nome,
                  player_name: data.item.nome_cartola,
                  url_escudo_png: data.item.url_escudo_png,
                  active: false }"
              >
              </TeamItem>
            </template>
          </template>
        </v-autocomplete>
      </v-form>

      <v-card-actions>
        <v-btn :disabled="selectedTeam === null" @click="addTeam" color="primary">ADICIONAR</v-btn>
      </v-card-actions>

      <span>Não encontrou? Clique <router-link custom to="/tag">Aqui</router-link> para buscar pela TAG</span>
    </v-card-text>
  </v-card>
</v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import TeamItem from "./TeamItem"
export default {
  components: {TeamItem},
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
    ...mapGetters("team", ["getSearchTeams", "getIsLoading"])
  },
  methods: {
    ...mapActions("team", ["getApiTeams"]),
    async addTeam() {
      this.$store.dispatch("team/addTeams", this.selectedTeam)
    }
  }
}
</script>

<style module>
  .left-border {
    border-left: 8px solid #008172 !important;
  }
</style>