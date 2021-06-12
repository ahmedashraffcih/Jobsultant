<template>
      <v-row justify="center" align="center">
        <v-col cols="4" class="d-flex flex-column d-sm-none d-md-flex ml-16">
          <v-img src="../../assets/imgs/Design/confirm.png" width="500px"></v-img>
        </v-col>
        <v-col class="col-lg-4 col-sm-9 col-md-6 pl-10">
          <v-list-item >
            <v-list-item-content>
              <v-list-item-title class="display-1 mb-2">Welcome to Jobsultant</v-list-item-title>
              <v-list-item-subtitle class="title mb-5 light-blue--text text--darken-3">Please confirm your email</v-list-item-subtitle>
              <v-list-item-subtitle class="body-1">
                Please check your inbox for a confirmation email, click<br>the link in the email to confirm your email address.
                <br><br>
                After you confirm click Continue
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                <v-btn @click="checkConfirmation" :loading="loading" class="mt-5 " color="light-blue darken-3" dark >Continue</v-btn>
                <v-btn :loading="loading"  class="mt-5 ml-5 " color="light-blue darken-3" outlined >Re-send confirmation mail</v-btn>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
</template>

<script>
// @ is an alias to /src
import { FingerprintSpinner } from "epic-spinners";
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data: () => ({
    overlay: false,
    loading:false,//loading till user logged flag
  }),
  components: {
    FingerprintSpinner,
  },
  methods:{
    checkConfirmation()
    {
      console.log("test");
      this.$router.push('/user/build_cv');
      this.loading=false;
    }
  }
};
</script>
<style scoped>
  .home {
    width: 100%;
    background-size: cover;
    background-position: center;
  }
</style>