<template>
  <v-card class="overflow-hidden ma-0 pa-0" tile flat>
    <!-- flat to remove shadow-->
    <v-app-bar class="nav" app color="light-blue darken-4" dark flat >
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = true" />
      <!-- 3 dashes
    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>-->
      <!-- ======================================================================= -->
      <!-- Website Logo -->
      <v-avatar v-if="loggedIn && user_type == 'employer'" size="190px">
        <img :src="require('@/assets/Logo_on_blue.png')" />
      </v-avatar>
      <v-avatar v-if="!loggedIn || !user_type == 'employer'" size="190px" class="ml-11 mr-15">
        <img :src="require('@/assets/Logo_on_blue.png')" />
      </v-avatar>
      <v-avatar v-if="loggedIn && user_type == 'normal user'" size="190px" class="ml-11 mr-2">
        <img :src="require('@/assets/Logo_on_blue.png')" />
      </v-avatar>
      <!-- ======================================================================= -->
      <!-- <v-toolbar-title class="title">Job Sultant</v-toolbar-title> -->
      <!-- Website Tabs -->

      <v-tabs v-if="loggedIn && user_type == 'normal user'" optional centered class="hidden-sm-and-down">
        <v-tab light to="/">Home</v-tab>
        <v-tab text to="/jobs">Jobs</v-tab>
        <v-tab text to="/blogs">Blogs</v-tab>
        <v-tab to="/user/account_settings">My Account</v-tab>
        <v-tab to="/user/My_CV">My CV</v-tab>
      </v-tabs>

      <v-tabs v-if="loggedIn && user_type == 'employer'" optional centered class="mr-15 pr-15 hidden-sm-and-down">
        <v-tab light to="/EmployerHome">Home</v-tab>
        <v-tab text to="/blogs">Blogs</v-tab>
        <v-tab to="/Employer/Emp_Profile">Company Profile</v-tab>
        <v-tab to="/Employer/Emp_Add_Job">Post Job</v-tab>
        <v-tab to="/Employer/Emp_Manage_Jobs">Manage Jobs</v-tab>
        <v-tab to="#">Dashboard</v-tab>
      </v-tabs>

      <v-tabs v-if="!loggedIn" optional centered class="ml-12 pl-12 hidden-sm-and-down">
        <v-tab light to="/">Home</v-tab>
        <v-tab text to="/Authentication/Register">Create Your CV</v-tab>
        <v-tab text to="/blogs">Blogs</v-tab>
      </v-tabs>

      <v-spacer></v-spacer>
      <!-- ======================================================================= -->
      <!-- Search Bar
    <SearchBar v-if="DISPLAY_SEARCH&&loggedIn" />
    <v-btn v-if="LoggedIn" icon @click.prevent="toggleSearch()">
      <v-icon >mdi-magnify</v-icon>
    </v-btn> -->
      <v-btn class="mr-4" v-if="loggedIn && user_type == 'normal user'" icon>
        <v-badge :content="messages" :value="messages" color="#FF9800" overlap>
          <v-icon>mdi-email</v-icon>
        </v-badge>
      </v-btn>
      <!-- ======================================================================= -->
      <!-- Default App Bar & Authentication -->
      <v-btn v-if="!loggedIn" class="buttoncase mr-4" to="/Authentication/login" outlined>Log in</v-btn>
      <v-btn v-if="!loggedIn" class="buttoncase mr-4" to="/Authentication/Register" outlined>Register</v-btn>
      <v-btn v-if="user_type != 'employer' || !loggedIn" class="buttoncase" to="/EmployerHome" outlined>For Employers</v-btn>
      <v-menu offset-y bottom transition="slide-y-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-if="loggedIn" @click="() => {}">Account Settings</v-list-item>
          <v-list-item v-if="loggedIn && user_type == 'normal user'" to="/user/Job_Applications" @click="() => {}">My Applications</v-list-item>
          <v-list-item v-if="user_type != 'employer'" @click="() => {}">For Employers</v-list-item>
          <v-divider></v-divider>
          <v-list-item v-if="loggedIn" @click="TryLogout">Log Out</v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">Job Sultant</v-list-item-title>

        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="orange--text text--darken-2">

          <v-list-item to="/">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="loggedIn && user_type == 'normal user'" to="/jobs">
            <v-list-item-title>Jobs</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="!loggedIn" to="/Authentication/Register">
            <v-list-item-title>Create Your CV</v-list-item-title>
          </v-list-item>

          <v-list-item to="/Blogs">
            <v-list-item-title >Blogs</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="loggedIn && user_type == 'normal user'" to="/user/account_settings">
            <v-list-item-title >My Account</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="loggedIn && user_type == 'normal user'" to="/user/My_CV">
            <v-list-item-title >My CV</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="loggedIn && user_type == 'employer'" to="/Employer/Emp_Profile">
            <v-list-item-title >Company Profile</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="loggedIn && user_type == 'employer'" to="/Employer/Emp_Add_Job">
            <v-list-item-title >Post Job</v-list-item-title>
          </v-list-item>
          <v-list-item v-if="loggedIn && user_type == 'employer'" to="/Employer/Emp_Manage_Jobs">
            <v-list-item-title >Manage Jobs</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block small color="light-blue darken-4" dark @click="TryLogout">
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-card>
  <!--temporary absolute-->
</template>

<script>
import SearchBar from "./SearchBar.vue";
import { mapGetters, mapActions, mapMutations } from "vuex";
import Dropdown from "../Dropdown";
export default {
  components: {
    Dropdown,
  },
  
  data: () => ({
    group: null,
    messages: 1,
    drawer: false,
    services: [
      {
        title: "Manage Jobs",
        link: "#",
      },
      {
        title: "Add New Job",
        link: "/Employer/Emp_Add_Job",
      },
    ],
  }),

  components: { SearchBar },

  computed: {
    //Get states from store
    ...mapGetters("ui", ["DISPLAY_SEARCH"]),
    ...mapGetters("auth", ["loggedIn", "user_type"]),
    ...mapGetters("auth", ["user_id"]),

    // ...mapActions(['DISPLAY_SEARCH'])
  },
  methods: {
    ...mapActions("auth", ["logout"]), //get logout function from auth module
    ...mapMutations("ui", ["SET_DISPLAY_SEARCH"]), //get set display function from ui module
    // log() {
    //   console.log(this.IsLoggedIn);
    // },
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
