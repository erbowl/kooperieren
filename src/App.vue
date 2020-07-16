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
    </v-app-bar>

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
