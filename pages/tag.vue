<template>
  <v-container>
   <v-col>
      <h2 class="mb-8">ADCIONAR PARTICIPANTE PELA TAG</h2>
      <v-card class="left-border">
        <v-card-text>
          <v-text-field label="TAG"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary">Adicionar</v-btn>
        </v-card-actions>
      </v-card>
   </v-col>
  </v-container>
</template>

<script>
export default {
  name: 'tag'

}
</script>

<style>
  .left-border {
    border-left: 8px solid #008172 !important;
  }
</style>