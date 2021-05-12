<template>
  <div>
    <h1> Edição de Regras </h1>
    <Editor class="mt-12" />
  </div>
</template>

<script>
import Editor from '@/components/rules/Editor'

export default {
  components: { Editor },
  middleware: ['auth']
}
</script>

<style>

</style>
