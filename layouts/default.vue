<template>
  <v-app class="app-wrapper">
    <v-app-bar
      color="primary"
      absolute
      dense
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>LIGA PGE</v-toolbar-title>
      <v-toolbar-title></v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <div  class="wrapper">
          <nuxt />
        </div>
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      { title: 'Home', icon: 'mdi-view-dashboard' },
      { title: 'About', icon: 'mdi-forum' },
    ]
  }),

  watch: {
    group () {
      this.drawer = false
    }
  }
}
</script>

<style>
  body {
    margin: 0px !important;
    padding: 0px !important;
  }
  .app-wrapper {
    background-color: #e9e9e9 !important;
    font-family: 'Montserrat' !important;
  }
  .wrapper {
    margin-top: 60px;
  }
</style>