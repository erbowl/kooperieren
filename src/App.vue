<template>
  <v-app>
    <v-app-bar app color="" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          width="200"
        />
      </div>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-sheet>
      <v-navigation-drawer v-model="drawer" temporary app>
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
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-sheet>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-bottom-navigation app>
      <v-btn
        class="bug-fix"
        :to="menu.url"
        v-for="menu in menus"
        :key="menu.title"
      >
        <span>{{ menu.title }}</span>
        <v-icon>{{ menu.icon }}</v-icon>
      </v-btn>
      <v-btn class="bug-fix" to="/notification">
        <span>Notice</span>
        <v-badge color="deep-purple accent-4" content="6">
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    menus: [
      { title: "Message", icon: "mdi-message", url: "/" },
      { title: "Menu", icon: "mdi-silverware", url: "/menu" },
      { title: "Shopping", icon: "mdi-cart", url: "/shopping" }
      // { title: "Rule", icon: "mdi-book-open-page-variant", url: "/rule" }
    ],
    drawer: null,
    items: [
      { title: "Home", icon: "mdi-message" },
      { title: "Report a bug", icon: "mdi-emoticon-sad-outline" }
    ]
  })
};
</script>

<style scoped>
/* buildしたときだけ崩れるので */
.bug-fix {
  height: inherit !important;
}
</style>
