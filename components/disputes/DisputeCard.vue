<template>
  <BorderCard
    :color="statusColor"
    class="mt-5"
  >
    <h3 :style="{color: 'black'}">{{ dispute.name.toUpperCase() }}</h3>
    <h4 :style="{color: statusColor}">STATUS: {{ statusText }}</h4>
    <div class="mt-5">RODADAS: {{ dispute.rounds.map(r => r.number).join(', ') }}</div>
    <Actions class="mt-5" :dispute="dispute" v-if="dispute.status == 'created'" />
  </BorderCard>
</template>

<script>
import colors from 'vuetify/es5/util/colors'
import Actions from './Actions'
import BorderCard from '@/components/shared/BorderCard'

export default {
  components: {
    BorderCard,
    Actions
  },
  computed: {
    statusColor() {
      const options = {
        active: this.$vuetify.theme.themes.light.primary,
        finished: colors.blueGrey.darken2,
        created: colors.yellow.darken3
      }
      return options[this.dispute.status]
    },
    statusText() {
      const text = { active: 'ATIVO', created: 'CRIADO', finished: 'FINALIZADO' }
      return text[this.dispute.status]
    }
  },
  props: ["dispute"]
}
</script>

<style>

</style>
