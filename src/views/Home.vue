<template>
  <div class="home">
    <!-- Title Card -->
    <v-parallax dark src="../assets/imgs/open.jpg" height="600">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <v-row justify="center">
            <h1 class="display-4 white--text mt-10">JobSultant</h1>
          </v-row>
          <v-row justify="center">
            <h2 class="white--text font-weight-regular mt-5">Find Jobs, Network and Learn</h2>
          </v-row>
          <v-row justify="center" class="mt-15">
            <v-col cols="3">
              <v-text-field outlined color="white" label="Enter job title,skills,etc." dark filled rounded-4 autofocus > </v-text-field>
            </v-col>
            <v-col cols="1">
              <v-btn large height="55" dark color="orange darken-2">Search Jobs</v-btn>
            </v-col>
          </v-row>
          <v-overlay :value="overlay" opacity="0.9">
            <fingerprint-spinner class="justify-center" :animation-duration="3000" :size="120" color="#FF9800" />
          </v-overlay>
        </v-col>
      </v-row>
    </v-parallax>
    <v-parallax dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" height="400">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="text-h4 font-weight-meduim mb-4">Hire An Employee</h1>
          <h4 class="subheading font-weight-light">
            Post your job on JobSultant.com to reach the perfect candidate from the Middle East's largest database of job seekers.<br />
            Receive applicants already filtered and shortlisted to your preferences by Bayt technology..
          </h4>
          <v-btn class="mt-7" dark outlined to="Employer/Emp_Register">Sign Up As A Company</v-btn>
        </v-col>
      </v-row>
    </v-parallax>
    <!-- Join As A company Card -->
    <v-card elevation="0" class="ma-0 pa-0" tile color="grey lighten-3">
      <v-row justify="center">
        <v-card-title>Recent From Blog</v-card-title>
      </v-row>
      <v-row justify="center" class="pb-5">
        <v-col cols="2">
          <v-hover v-slot="{ hover }">
            <v-card color="blue" :elevation="hover ? 8 : 2" :class="{ 'on-hover': hover }" class="hovercard justify-center">
              <v-img src="../assets/imgs/haven.png" class="white--text align-end" :gradient="hover ? gradient : gradient2" height="275px">
                <v-card-title class="text-center justify-center">Blog 1</v-card-title>
                <v-card-actions class="justify-center mb-3">
                  <v-btn small outlined :class="{ 'show-btns': hover }" :color="transparent"> Read More</v-btn>
                </v-card-actions>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="2">
          <v-hover v-slot="{ hover }">
            <v-card color="blue" :elevation="hover ? 8 : 2" :class="{ 'on-hover': hover }" class="hovercard justify-center">
              <v-img src="../assets/imgs/haven.png" class="white--text align-end" :gradient="hover ? gradient : gradient2" height="275px">
                <v-card-title class="text-center justify-center">Blog 2</v-card-title>
                <v-card-actions class="justify-center mb-3">
                  <v-btn small outlined :class="{ 'show-btns': hover }" :color="transparent"> Read More</v-btn>
                </v-card-actions>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="2">
          <v-hover v-slot="{ hover }">
            <v-card color="blue" :elevation="hover ? 8 : 2" :class="{ 'on-hover': hover }" class="hovercard justify-center">
              <v-img src="../assets/imgs/haven.png" class="white--text align-end" :gradient="hover ? gradient : gradient2" height="275px">
                <v-card-title class="text-center justify-center">Blog 3</v-card-title>
                <v-card-actions class="justify-center mb-3">
                  <v-btn small outlined :class="{ 'show-btns': hover }" :color="transparent"> Read More</v-btn>
                </v-card-actions>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-card>
    <v-parallax dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" height="400">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="text-h4 font-weight-meduim mb-4">Ready to talk?</h1>
          <h3 class="font-weight-light">Our team is here to help.</h3>
          <v-btn class="mt-7 mr-5" dark outlined>Learn More</v-btn>
          <v-btn class="mt-7" dark outlined to="Employer/Emp_Register">Contact Us</v-btn>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
// @ is an alias to /src
import { FingerprintSpinner } from "epic-spinners";

export default {
  data: () => ({
    name: "Home",
    overlay: false,
    transparent: "rgba(255, 255, 255, 0)",
    gradient: "to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6)",
    gradient2: "to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4)",
  }),
  components: {
    FingerprintSpinner,
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
.home {
  width: 100%;
  background-size: cover;
  background-position: center;
}
.hovercard {
  transition: opacity 0.4s ease-in-out;
}

.hovercard:not(.on-hover) {
  opacity: 0.9;
}
.show-btns {
  color: #ef6c00 !important;
  transition: color 0.4s ease-in-out;
}
</style>
