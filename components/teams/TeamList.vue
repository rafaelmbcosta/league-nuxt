<template>
  <v-row>
    <v-col>
      <v-card
        v-for="(team, i) in teams"
        :key="i"
        class="mb-3 d-flex align-center"
        :style="[{'border-left': `8px solid ${color[team.active]}`}]"
      >
        <v-card-text :class="$style['card-text']" class="d-flex align-center">
          <v-row class="d-flex align-center">
            <v-col>
              <div>
                <span :style="[{color: color[team.active]}]">
                  <strong>{{ team.active ? "ATIVO" : "INATIVO" }}</strong>
                </span>
              </div>
            </v-col>
            <v-col cols="3">
              <strong>{{ team.name }}</strong>
            </v-col>
            <v-col cols="3">
              <v-img
                :class="$style['img-small']"
                :src="imageError ? require('@/assets/logo-ferroviario-256.png') : team.urlEscudoPng"
                @error="altImageError()"
              />
            </v-col>
            <v-col cols="3">
              <span>{{ team.playerName }}</span>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions style="width: 130px;">
          <v-spacer />
          <v-btn
            class="mr-2"
            :color="team.active ? 'red darken-1' : 'primary'"
            outlined
            small
            @click="changeActiveTeam(team)"
          >
            {{ team.active ? 'DESATIVAR' : 'ATIVAR' }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { TEAMS } from '../../graphql/queries/teams/list'

export default {
  name: 'TeamList',
  data: () => {
    return {
      color: {
        true: 'teal',
        false: 'red'
      },
      imageError: false
    }
  },
  apollo: { teams: TEAMS },
  methods: {
    altImageError () {
      this.imageError = true
    },
    async changeActiveTeam (team) {
      await this.$store.dispatch('team/activeTeam', team)
      this.$apollo.queries.teams.refetch()
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
