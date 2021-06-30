<template class="template">
  <div class="div" >
    <v-row class="mt-15" justify="center">
      <v-card class="mt-10 mb-10 pa-5" width="500px" rounded="lg">
        <v-card-title class="justify-center">Log in to your account</v-card-title>
        <v-card-subtitle class="text-center">Don't have an account yet? <a style="text-decoration: none;" href="/Authentication/register">Register here</a></v-card-subtitle>
        <v-alert color="error" :value="error" icon="close">The username or password wrong</v-alert>
        <v-card-text>
          <v-form v-model="Valid">
            <v-row justify="center">
              <v-col cols="10" style="height: 140px">
                <v-text-field
                  class="pd-10"
                  dense
                  outlined
                  label="E-mail"
                  v-model="email"
                  :rules="emailRules"
                  required
                >
                </v-text-field>
                <v-text-field
                  dense
                  outlined
                  label="Password"
                  v-model="password"
                  required
                  :rules="passRules"
                  :append-icon="value ? 'mdi-eye-off':'mdi-eye'"
                  @click:append="() => (value = !value)"
                  :type="value ? 'password' : 'text'"
                >
                </v-text-field>
              </v-col>
              <!-- to make the button disabled until verify validations :disabled="!Valid" -->
              <v-col cols="10" style="height: 50px">
                <v-btn
                  rounded
                  large
                  block
                  dark
                  color="light-blue"
                  
                  @click="tryLogin" :loading="loading">
                  
                  Log in
                </v-btn>
              </v-col>
              <v-col cols="10" style="height: 60px">
                <v-card-text class="text-center">OR</v-card-text>
              </v-col>
              <v-col cols="10">
                
                <v-btn rounded dark large block color="#4267B2"><v-icon left dark class="mr-5">mdi-facebook</v-icon>Log in With Facebook</v-btn>
              </v-col>
              <v-col cols="10">
                <v-btn rounded large block dark color="#E53935"><v-icon left dark class="mr-5">mdi-google</v-icon>Log in With Google</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
    <v-snackbar v-model="snackbar1" timeout = "3000" color="warning" dark><v-icon class="mr-2">mdi-alert-outline</v-icon> Fill Required Fields</v-snackbar>
    <v-snackbar v-model="snackbar2" timeout = "5000" color="error" dark><v-icon class="mr-2">mdi-alert-octagon-outline</v-icon> Wrong Email or Password </v-snackbar>
    <v-snackbar v-model="snackbar3" timeout = "1000" color="success" dark><v-icon class="mr-2">mdi-checkbox-marked-circle</v-icon> Logging </v-snackbar>
  <!-- <v-row justify="center">
      <v-col cols="2">
    <v-alert v-model="snackbar1" type="warning" dismissible transition="scale-transition"> Fill Required Fields</v-alert>
    <v-alert v-model="snackbar2" type="error" dismissible transition="scale-transition"> Wrong Email or Password </v-alert>
    <v-alert v-model="snackbar3" type="success" dismissible transition="scale-transition"> Logging </v-alert>
  </v-col>
  </v-row> -->
  </div>
</template>

<script>
import { mapGetters,mapActions,mapMutations } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      //Intinate the variables that will store user's data
      email: "",
      password: "",
      //---------//
      value: String, //eye passowrd reveal
      Valid: false, //Form Validation flag
      error: false, //snackbars flag
      loading:false,//loading till user logged flag
      snackbar1:false,
      snackbar2:false,
      snackbar3:false,
      timeout:1000,

      //Validation Rules
      passRules: 
      [
        (v) => !!v || "Password is required",
        (v) => (v && v.length >= 8) || "Name must be more than 8 characters",
      ],

      emailRules: 
      [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],

    };
  },
  methods: {
    ...mapActions('auth', ['login']),//Apply login function from auth module
        tryLogin() {
          //apply login animation
          this.loading = true
            // Perform a simple validation that email and password have been typed in
            if (this.email != '' && this.password != '') 
            {
              this.snackbar3 = true
              this.login({email: this.email, password: this.password}).then(r => {
                if(!r){
                  this.snackbar2 = true
                  //set the loading off and logged the user
                  this.loading = false
                }
              })
            }
            else
            {
              this.snackbar1 = true
              this.loading = false
            }
        }
  },
  computed:{
    //get the authentication states from auth module
    ...mapGetters('auth', [
            'authenticating',
            'authenticationError',
            'authenticationErrorCode',
            'authenticationSuccess'
        ])
  }
};
</script>

<style scoped>
.div {
  background-color: #FFF3E0;
  background-image: url("../../assets/imgs/cma.png");
  width: 100%;
  height: 100vh;
  background-size: cover;
}

</style>