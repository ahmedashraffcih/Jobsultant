<template>
  <!-- flat to remove shadow-->
  <v-app-bar class="nav" app color="#2C3C5B" dark flat>
    <!-- 3 dashes
    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>-->
    <v-avatar size="160px">
      <img :src="require('@/assets/Logo_on_blue.png')"/>
    </v-avatar>
    <v-toolbar-title class="title"></v-toolbar-title>
    <v-btn to="/" class="buttoncase ml-10" text flat>Home</v-btn>
    <v-btn class="buttoncase" to="/about" text flat>Find Jobs</v-btn>
    <v-btn class="buttoncase" to="/user/account_settings" text flat
      >My Account</v-btn
    >
    <v-btn class="buttoncase" to="/user/My_CV" text flat>My CV</v-btn>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn class="buttoncase mr-4" to="/Details/login" outlined>Log in</v-btn>
    <v-btn class="buttoncase mr-4" to="/Details/Register" outlined
      >Register</v-btn
    >
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
        <v-list-item @click="() => {}">Log Out</v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
  <!--temporary absolute-->
</template>

<script>
export default {
  data: () => ({
    group: null
  })
};
</script>
<style scoped>
.buttoncase {
  text-transform: none;
}
</style>
