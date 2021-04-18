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
    <v-btn class="buttoncase" to="##" text flat>Dashboard</v-btn>

    <!-- Dropdown  goes here -->

    <Dropdown title="Posts" :items="services" />

    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn class="buttoncase" to="/Employer/Emp_Register" outlined>For Employers</v-btn>
    <v-menu left bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item to="/Employer/Emp_Profile">View Profile</v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="() => {}">Log Out</v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
  <!--temporary absolute-->
</template>

<script>
import Dropdown from '../Dropdown';
export default {
  components: {
      Dropdown
  },  
  data ()  {
    return {
        services: [
            {
                title: 'Manage Jobs',
                link: '#'
            },
            {
                title: 'Add New Job',
                link: '/Employer/Emp_Add_Job'
            }
        ]
    }
  }
};
</script>
<style>
.buttoncase {
  text-transform: none;
}
</style>