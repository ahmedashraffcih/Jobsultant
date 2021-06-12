<template>
  <v-row justify="center" align="center" fluid style="height: 85vh;">
    <v-col cols="4" class="d-flex flex-column d-sm-none d-md-flex ml-16">
      <v-img src="../../assets/imgs/Design/confirm.png" width="500px"></v-img>
    </v-col>
    <v-col class="col-lg-4 col-sm-9 col-md-6 pl-10">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="display-1 mb-2">Welcome to Jobsultant</v-list-item-title>
          <v-list-item-subtitle class="title mb-5 light-blue--text text--darken-3">Please confirm your email</v-list-item-subtitle>
          <v-list-item-subtitle class="body-1">
            Please check your inbox for a confirmation email, click<br />the link in the email to confirm your email address. <br /><br />
            After you confirm click Continue
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <v-btn @click="checkConfirmation" :loading="loading" class="mt-5 " color="light-blue darken-3" dark>Continue</v-btn>
            <v-btn :loading="loading" class="mt-5 ml-5 " color="light-blue darken-3" outlined>Re-send confirmation mail</v-btn>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-col>
    <v-snackbar v-model="alert1" timeout="3000" color="success" dark>
      <v-icon class="mr-2">mdi-checkbox-marked-circle</v-icon> Your Email have been confirmed
    </v-snackbar>
    <v-snackbar v-model="alert2" timeout="1000" color="warning" dark>
      <v-icon class="mr-2">mdi-alert-outline</v-icon> You need to confirm your e-mail
    </v-snackbar>
  </v-row>
</template>

<script>
// @ is an alias to /src
import { FingerprintSpinner } from "epic-spinners";
import { mapGetters, mapActions, mapMutations } from "vuex";
import { TokenService } from "../../services/storage.service";
import ApiService from "../../services/api.service";
export default {
  data: () => ({
    overlay: false,
    loading: false, //loading till user logged flag
    alert1: false,
    alert2: false,
    user: {
      cv: {},
      account: {},
    },
  }),
  components: {
    FingerprintSpinner,
  },
  computed: {
    ...mapGetters("auth", ["loggedIn"]),
    ...mapGetters("auth", ["user_id"]),
  },
  methods: {
    checkConfirmation() {
      this.loading = false;

      this.getUser();
      if (TokenService.getverified == true) {
        this.$router.push("/user/build_cv");
        this.loading = false;
        this.alert1 = true;
      } else {
        console.log("You need to confirm your e-mail");
        this.loading = false;
        this.alert2 = true;
      }
    },
    getUser() {
      this.loading = true;
      ApiService.get(`http://localhost:3000/users/${this.user_id}`).then((r) => {
        if (r.status == 200) {
          this.user = r.data;
          console.log(this.user);
          this.overlay = false;
          this.loading = false;
        } else {
          console.log(r);
        }
      });
    },
  },
};
</script>
<style scoped>
.home {
  width: 100%;
  background-size: cover;
  background-position: center;
}
</style>
