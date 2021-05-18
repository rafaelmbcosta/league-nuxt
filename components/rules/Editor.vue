<template>
  <div>
    <tiptap-vuetify
      v-model="newText"
      :value="newText"
      :extensions="extensions"
      @input="$emit('input', arguments[0])"
    />
    <v-btn
      color="primary"
      :loading="loading"
      class="mt-10"
      @click="saveText()"
    >
      Salvar
    </v-btn>
  </div>
</template>

<script>
import gql from 'graphql-tag'

import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Underline,
  BulletList,
  OrderedList,
  ListItem,
  History
} from 'tiptap-vuetify'

export default {
  components: { TiptapVuetify },
  data: () => ({
    loading: false,
    newText: '',
    extensions: [
      History,
      Underline,
      Italic,
      ListItem,
      BulletList,
      OrderedList,
      [
        Heading,
        {
          options: {
            levels: [1, 2, 3]
          }
        }
      ],
      Bold
    ]
  }),
  mounted () {
    this.newText = this.currentRules ? this.currentRules.text : ''
  },
  apollo: {
    currentRules: gql`query {
      currentRules {
        text
      }
    }`
  },
  methods: {
    async saveText () {
      this.loading = true
      try {
        await this.$apollo.mutate({
          mutation: gql`mutation ($text: String!) {
            saveRules(text: $text) {
              id,
              text
            }
          }`,
          variables: {
            text: this.newText
          },
          refetchQueries: [{
            query: gql`query {
              currentRules {
                text
              }
            }`
          }],
          update: () => {
            this.$store.dispatch('util/sendMessage', ['success', 'Regras atualizadas com sucesso'])
            this.loading = false
          }
        })
      } catch (e) {
        this.$store.dispatch('util/sendMessage', ['error', 'Erro ao atualizar regras'])
      }
    }
  }
}
</script>

<style>

</style>
