<template>
  <div>
    <tiptap-vuetify
      v-model="newText"
      :value="newText"
      :extensions="extensions"
      output-format="json"
      @input="$emit('input', arguments[0])"
    />
    <v-btn color="primary" class="mt-10" @click="saveText()">
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
    if (this.currentRules) {
      this.newText = JSON.parse(this.currentRules.text)
      //   type="doc",
      //   JSON.parse(this.currentRules.text)
      // }
    } else {
      this.newText = ''
    }
  },
  apollo: {
    currentRules: gql`query {
      currentRules {
        text
      }
    }`
  },
  methods: {
    saveText () {
      console.log(JSON.stringify(this.newText.content))
      this.$apollo.mutate({
        mutation: gql`mutation ($text: String!) {
          saveRules(text: $text) {
            id,
            text
          }
        }`,
        variables: {
          // console.log(JSON.stringify(this.newText.content))
          text: JSON.stringify(this.newText)
        }
        // aqui atualizar o currentRules
      })
    }
  }
}
</script>

<style>

</style>
