<template>
  <div class="home">
    <!-- Title Card -->
    <v-parallax dark src="../assets/imgs/open3.png" height="600">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <v-row justify="center">
            <h1 style='font-family: "Dela Gothic One"; font-size: 70px;'>JobSultant</h1>
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

    <v-card elevation="0" class="ma-0 pa-0" tile >
      <v-row justify="center" class="py-5" align="center">
        <v-col class="col-lg-4 col-sm-9 col-md-6" >
          <v-list-item class="my-5" >
            <v-list-item-content>
              <v-list-item-title class="titles mb-5">Explore the Right Jobs & Career<br>Opportunities</v-list-item-title>
              <v-list-item-subtitle class="body-1">
                Explore feed knows what you need, based on your career interests, 
                will<br>find you what you are searching for. And don't worry about too many<br> opportunities, 
                you can always save them for later.
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                <v-btn class="mt-10 " outlined v-if="!loggedIn" to="Authentication/Register">Get Started Now</v-btn>
                <v-btn class="mt-10 " outlined v-if="loggedIn" to="/Jobs">Get Started Now</v-btn>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="4" class=" d-flex flex-column align-end d-sm-none d-md-flex">
          <v-img src="../assets/imgs/Design/Home1.png" width="530px"></v-img>
        </v-col>
      </v-row>
    </v-card>

    <v-card elevation="0" class="ma-0 pa-0" tile color="grey lighten-3">
      <v-row justify="center" align="center" class="py-5">
        <v-col cols="4" class=" d-flex flex-column  align-start d-sm-none d-md-flex">
          <v-img src="../assets/imgs/Design/Home2.png" width="600px"></v-img>
        </v-col>
        <v-col class="col-lg-4 col-sm-9 col-md-6">
          <v-list-item >
            <v-list-item-content>
              <v-list-item-title class="titles mb-5">Track Your Application, the Easy Way</v-list-item-title>
              <v-list-item-subtitle class="body-1">
                Track your job application status whether it is viewed, shortlisted, rejected,<br>
                or if a company accessed your contacts. With the tracking feature, you will <br>
                be one step ahead on your job hunting plan.
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                <v-btn class="mt-10 " outlined v-if="!loggedIn" to="Authentication/Register">Get Started Now</v-btn>
                <v-btn class="mt-10 " outlined v-if="loggedIn" to="User/Job_Applications">Get Started Now</v-btn>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          
        </v-col>
      </v-row>
    </v-card>

    <v-parallax dark src="../assets/imgs/browse.png" height="350">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="titles mb-4">Get ready for more opportunities!</h1>
          <h4 class="subheading font-weight-light">
            You are minutes away from the right job.
          </h4>
          <v-btn v-if="!loggedIn" class="mt-7" dark outlined to="Authentication/Register">Join Now</v-btn>
          <v-btn v-if="loggedIn" class="mt-7" dark outlined to="/Jobs">Browse Now</v-btn>
        </v-col>
      </v-row>
    </v-parallax>

    <v-card class="py-10">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="titles mb-2">Ready to talk?</h1>
          <h4 class="subheading font-weight-light">
            Our team is here to help.
          </h4>
          <v-btn class="mt-5 mr-5"  outlined to="/blogs">Learn More</v-btn>
          <v-btn class="mt-5"  outlined to="/blogs">Contact Us</v-btn>
        </v-col>
      </v-row>
    </v-card>
    <!-- Join As A company Card -->
    <!-- <v-card elevation="0" class="ma-0 pa-0" tile color="grey lighten-3">
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
    </v-card> -->
    
  </div>
</template>

<script>
// @ is an alias to /src
import { FingerprintSpinner } from "epic-spinners";
import { mapGetters, mapActions, mapMutations } from "vuex";
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
  computed: {
    //Get states from store
    ...mapGetters("auth", ["loggedIn", "user_type"]),

    // ...mapActions(['DISPLAY_SEARCH'])
  },
};
</script>
<style scoped>

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
.titles {
  font-family: "Nexa"; 
  font-size: 32px;
}
</style>
