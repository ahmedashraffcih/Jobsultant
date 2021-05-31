<template>
  <div class="opening">
    <v-row justify="center">
      <h1 class="display-4 white--text mt-10">JobSultant</h1>
      
    </v-row>
    <v-row justify="center">
      <h2 class="white--text font-weight-regular mt-5">Find Jobs, Netowrk and Learn</h2>
    </v-row>
    <v-row justify="center" class="mt-15">
      <v-col cols="4">
        <v-text-field
          outlined
          color="white"
          label="Enter job title,skills,etc."
          dark
          filled
          rounded-4
          autofocus
        >
        </v-text-field>
      </v-col>
      <v-col cols="1">
        <v-btn large height="55" color="orange">Search Jobs</v-btn>
      </v-col>
    </v-row>
      <v-overlay :value="overlay" opacity="0.9" >
        <fingerprint-spinner
          class="justify-center"
          :animation-duration="3000"
          :size="120"
          color="#FF9800"
        />
    </v-overlay>
  </div>
</template>

<script>
// @ is an alias to /src
import { FingerprintSpinner } from 'epic-spinners'

export default {
  data: () => ({
    name: "Home",
    overlay: false,
  }),
  components: {
    FingerprintSpinner
  },
};
</script>
<style scoped>
.opening {
  background-image: url("../assets/imgs/open.jpg");
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: center;
}
</style>
