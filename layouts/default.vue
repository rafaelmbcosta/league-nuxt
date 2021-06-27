<template>
  <v-app class="app-wrapper">
    <Snackbar />
    <v-app-bar
      color="primary"
      absolute
      dense
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        LIGA PGE
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        v-for="(item, index) in topBarList"
        :key="index"
        text
        :to="item.ref === null ? null : item.ref"
        @click="item.logout ? logout() : null"
      >
        {{ item.title }}
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item v-if="this.$auth.loggedIn">
        <v-list-item-content>
          <v-list-item-title>Olá Admin!</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="item in menuList"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              <NuxtLink
                :to="item.ref === null ? '#' : item.ref"
                @click="item.logout ? logout() : null"
              >
                {{ item.title }}
              </NuxtLink>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <div class="wrapper">
          <nuxt />
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Snackbar from '@/components/shared/Snackbar'

export default {
  components: {
    Snackbar
  },
  data: () => ({
    drawer: false,
    group: null,
    items: [
      { title: 'Home', icon: 'mdi-view-dashboard', ref: '/', auth: null, menu: true },
      { title: 'Login', icon: 'mdi-login', ref: '/login', auth: false, menu: true },
      { title: 'Logout', icon: 'mdi-logout', ref: null, logout: true, auth: true, menu: true },
      { title: 'Editar Regras', icon: 'assignment', ref: '/rules/edit', auth: true, menu: false },
      { title: 'Regras', icon: 'chrome_reader_mode', ref: '/rules', auth: null, menu: false },
      { title: "Meses de Disputa", icon: "mdi-calendar", ref: "/disputes", auth: true, menu: false },
      { title: "Cadastrar Times", icon: "mdi-security", ref: "/teams", auth: true, menu: false }
    ]
  }),
  computed: {
    menuList () {
      return this.items.filter(e => e.auth === this.$auth.loggedIn || e.auth === null)
    },
    topBarList () {
      return this.menuList.filter(e => e.menu)
    }
  },
  watch: {
    group () {
      this.drawer = false
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('util/logout')
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
