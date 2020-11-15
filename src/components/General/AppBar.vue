<template>
  <!-- flat to remove shadow-->
  <v-app-bar app color="#03A9F4" dark>
    <!-- 3 dashes-->
    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

    <v-toolbar-title class="title">Jobsultant</v-toolbar-title>
    <v-btn href="/" class="ml-10" text flat>Home</v-btn>
    <v-btn href="/about" text flat>Jobs</v-btn>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn class="mr-4" href="Details/login" outlined>Log in</v-btn>
    <v-btn class="mr-4" outlined>Sign Up</v-btn>
    <v-btn outlined>For Employers</v-btn>
    <v-menu left bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="n in 5" :key="n" @click="() => {}">
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
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
