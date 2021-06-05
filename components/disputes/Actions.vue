<template>
  <div>
    <v-btn class="mr-5" :to="`disputes/${dispute.id}`" outlined color="primary">GERENCIAR RODADAS</v-btn>
    <v-btn class="mr-5" outlined color="yellow darken-4">EDITAR</v-btn>
    <v-btn class="mr-5" outlined color="error">DESATIVAR</v-btn>
  </div>
</template>

<script>
import colors from 'vuetify/es5/util/colors'

export default {
  props: ["dispute"]
}
</script>
