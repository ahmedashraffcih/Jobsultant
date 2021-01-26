<template>
  <!-- flat to remove shadow-->
  <v-app-bar class="nav" app color="#2C3C5B" dark flat>
    <!-- 3 dashes
    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>-->
    <!-- ======================================================================= -->
    <!-- Website Logo -->
    <v-avatar size="160px">
      <img :src="require('@/assets/Logo_on_blue.png')" />
    </v-avatar>
    <!-- ======================================================================= -->
    <v-toolbar-title class="title"></v-toolbar-title>
    <!-- Website Tabs -->
    <v-tabs optional >
      <v-tab light to="/">Home</v-tab>
      <v-tab text to="/jobs">Find Jobs</v-tab>
      <v-tab to="/user/account_settings">My Account</v-tab>
      <v-tab to="/user/My_CV">My CV</v-tab>
    </v-tabs>
    <v-spacer></v-spacer>
    <!-- ======================================================================= -->
    <!-- Search Bar -->
    <SearchBar v-if="DISPLAY_SEARCH" />
    <v-btn icon @click.prevent="toggleSearch()">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <!-- ======================================================================= -->
    <!-- Default App Bar & Authentication -->
    <v-btn class="buttoncase mr-4" to="/Authentication/login" outlined>Log in</v-btn>
    <v-btn class="buttoncase mr-4" to="/Authentication/Register" outlined>Register</v-btn>
    <v-btn class="buttoncase" outlined>For Employers</v-btn>
    <v-menu left bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item @click="() => {}">Account Settings</v-list-item>
        <v-list-item @click="() => {}">For Employers</v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="TryLogout">Log Out</v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
  <!--temporary absolute-->
</template>

<script>
import SearchBar from "./SearchBar.vue";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  data: () => ({
    group: null,
  }),

  components: { SearchBar },

  computed: {
    //Get states from store
    ...mapGetters("ui", ["DISPLAY_SEARCH"]),
    ...mapGetters("user", ["IsLoggedIn"]),
    ...mapGetters("auth", ["loggedIn"]),

    // ...mapActions(['DISPLAY_SEARCH'])
  },
  methods: {
    ...mapActions("auth", ["logout"]),//get logout function from auth module
    ...mapMutations("ui", ["SET_DISPLAY_SEARCH"]),//get set display function from ui module
    log() {
      console.log(this.IsLoggedIn);
    },
    toggleSearch() {
      this.SET_DISPLAY_SEARCH(!this.DISPLAY_SEARCH);
    },
    TryLogout() {
      this.logout();
    },
  },
};
</script>

<style scoped>
.buttoncase {
  text-transform: none;
}
</style>
