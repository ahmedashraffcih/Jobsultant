<template>
  <v-app>
    <AppBar />
    <v-main>
      <v-container class="ma-0 pa-0" fluid>
        <v-row align="center" justify="center">
          <v-fade-transition mode="out-in" hide-on-leave>
            <router-view> </router-view>
          </v-fade-transition>
        </v-row>
      </v-container>
    </v-main>
    <Footer v-if="!['confirmation'].includes($route.name)" />
  </v-app>
</template>

<script>
import AppBar from "./components/General/AppBar.vue";
import Footer from "./components/General/Footer.vue";
export default {
  name: "App",

  components: {
    AppBar,
    Footer
  },

  data: () => ({
    //
  })
};
</script>
<style>
@font-face {
  font-family: "Dela Gothic One";
  src: local("Dela Gothic One"),
   url(assets/fonts/DelaGothicOne-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Nexa";
  src: local("Nexa"),
   url(assets/fonts/Nexa.otf) format("truetype");
}
</style>