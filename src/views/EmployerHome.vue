<template>
  <div class="home">
    <!-- Title Card -->
    <v-parallax class="home" dark src="../assets/imgs/Hire2.png" height="600">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 style='font-family: "Dela Gothic One"; font-size: 55px;'>Hire Smarter, Grow Faster.</h1>
          <h3 class="headline white--text font-weight-light mt-5">With Egypt’s #1 Online Recruitment Platform</h3>
          <v-btn v-if="loggedIn&&user_type=='employer'" to="Employer/Emp_Manage_Jobs" class="mt-10" large dark outlined >Start Hiring Now</v-btn>
          <v-btn v-if="!loggedIn||user_type=='normal user'" to="Employer/Emp_Register" class="mt-10" large dark outlined >Start Hiring Now</v-btn>
        </v-col>
      </v-row>
    </v-parallax>
    <!-- Join As A company Card -->
    <v-card elevation="0" class="ma-0 pa-0" tile >
      <v-row justify="center" class="py-5" align="center">
        <v-col class="col-lg-4 col-sm-9 col-md-6" >
          <v-list-item class="my-5" >
            <v-list-item-content>
              <v-list-item-title class="titles mb-5">Access Egypt’s largest database of<br> professional talents</v-list-item-title>
              <v-list-item-subtitle class="body-1">
                Whatever the job function, industry, or career level you are hiring for, you’ll<br>find it at WUZZUF. 
                Leverage our rich and continuously growing database of<br>professionals all the way from interns and fresh grads 
                to senior managers,<br> directors, VPs, and C-levels.
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                <v-btn  v-if="loggedIn&&user_type=='employer'" to="Employer/Emp_Manage_Jobs" class="mt-10 " outlined >Get Started Now</v-btn>
                <v-btn v-if="!loggedIn||user_type=='normal user'" to="Employer/Emp_Register" class="mt-10 " outlined >Get Started Now</v-btn>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="4" class=" d-flex flex-column align-end d-sm-none d-md-flex">
          <v-img src="../assets/imgs/Design/hire1.png" width="500px"></v-img>
        </v-col>
      </v-row>
    </v-card>

    <v-card elevation="0" class="ma-0 pa-0" tile color="grey lighten-3">
      <v-row justify="center" align="center" class="py-5">
        <v-col cols="4" class=" d-flex flex-column align-start d-sm-none d-md-flex">
          <v-img src="../assets/imgs/Design/hire2.png" width="500px"></v-img>
        </v-col>
        <v-col class="col-lg-4 col-sm-9 col-md-6">
          <v-list-item >
            <v-list-item-content>
              <v-list-item-title class="titles mb-5">Control your hiring process from<br>start to finish</v-list-item-title>
              <v-list-item-subtitle class="body-1">
                Inbox 2.0 is here! Enjoy a smooth and smart inbox where you can easily<br>
                filter through your applicants and customize the recruitment stages<br>based on your own hiring process.
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                <v-btn  v-if="loggedIn&&user_type=='employer'" to="Employer/Emp_Manage_Jobs" class="mt-10 " outlined >Get Started Now</v-btn>
                <v-btn  v-if="!loggedIn||user_type=='normal user'" to="Employer/Emp_Register" class="mt-10 " outlined >Get Started Now</v-btn>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          
        </v-col>
      </v-row>
    </v-card>

    <v-parallax dark src="../assets/imgs/contact.png" height="400">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="titles mb-4">Ready to talk?</h1>
          <h3 class="font-weight-light">Our team is here to help.</h3>
          <v-btn class="mt-7 mr-5" dark outlined>Learn More</v-btn>
          <v-btn class="mt-7" dark outlined to="Blogs">Contact Us</v-btn>
        </v-col>
      </v-row>
    </v-parallax>
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
.titles {
  font-family: "Nexa"; 
  font-size: 32px;
}
</style>
