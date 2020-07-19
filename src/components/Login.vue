<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-text-field
          label="email"
          name="email"
          v-model="email"
          :disabled="userStatus"
          :placeholder="user.email"
          outlined
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row v-if="!userStatus && !sendEmail" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-btn v-on:click="login()">Sign Up/In By Sending Email</v-btn>
      </v-col>
    </v-row>
    <v-row v-if="userStatus" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-btn v-on:click="logout()" class="mx-auto">Sign Out</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Firebase from "./../firebase";

export default {
  name: "Login",
  data: () => ({
    email: null,
    sendEmail: false,
  }),
  computed: {
    user() {
      return this.$store.getters.user;
    },
    userStatus() {
      return this.$store.getters.isSignedIn;
    },
  },
  methods: {
    login() {
      if (!this.email) {
        return;
      }
      Firebase.login(this.email);
      this.sendEmail = true;
    },
    logout() {
      Firebase.logout();
    },
  },
};
</script>
