<template>
<v-row>
  <v-col>
    <v-card
      :class="$style['left-border']"
      class="mb-3 d-flex align-center"
      v-for="(team, i) in getSearchTeams" :key="i"
    >
      <v-card-text :class="$style['card-text']">
        <span>{{ 'ATIVO' }}</span>
        <strong>{{ team.nome }}</strong>
        <v-img
          :class="$style['img-small']"
          :src="imageError ? require('@/assets/logo-ferroviario-256.png') : team.url_escudo_png"
          @error="altImageError()"
        ></v-img>
        <span>{{ team.nome_cartola }}</span>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          outlined
          x-small
        >
          ATIVAR
        </v-btn>
        <!-- <v-btn
          color="red darken-1"
          outlined
          x-small
        >
          DESATIVAR
        </v-btn> -->
      </v-card-actions>
    </v-card>
  </v-col>
</v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => {
    return {
      imageError: false
    }
  },
  created() {
    this.$store.dispatch("team/getSearchTeams")
  },
  computed: {
    ...mapGetters("team", ["getSearchTeams"])
  },
  methods: {
    altImageError() {
      this.imageError = true
    }
  }
}
</script>
<style module>
  .img-small{
    max-width: 40px !important;
  }
  .left-border {
    border-left: 8px solid #008172 !important;
  }
  .card-text {
    display: grid;
    grid-template-columns: 6% 16% 10% 15%;
  }
</style>