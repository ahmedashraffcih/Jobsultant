<template class="template">
  <div class="div">
    <v-row justify="center">
      <v-card class="mt-10 mb-10" width="500px">
        <v-card-title class="justify-center">Log in to your account</v-card-title>
        <v-card-subtitle class="text-center">Don't have an account yet? <a style="text-decoration: none;" href="/Authentication/login">Register here</a></v-card-subtitle>
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
                  :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="() => (value = !value)"
                  :type="value ? 'password' : 'text'"
                >
                </v-text-field>
              </v-col>
              <!-- to make the button disabled until verify validations :disabled="!Valid" -->
              <v-col cols="10" style="height: 50px">
                <v-btn
                  rounded-4
                  large
                  block
                  color="success"
                  :disabled="!Valid"
                  @click="tryLogin" :loading="loading">
                  
                  Log in
                </v-btn>
              </v-col>
              <v-col cols="10" style="height: 60px">
                <v-card-text class="text-center">OR</v-card-text>
              </v-col>
              <v-col cols="10">
                <v-btn rounded-4 large block color="success">Log in With Google</v-btn>
              </v-col>
              <v-col cols="10">
                <v-btn rounded-4 large block color="success">Log in With Facebook</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
    <v-snackbar v-model="snackbar1" timeout = "3000" color="error" outlined dark> Fill Required Fields</v-snackbar>
    <v-snackbar v-model="snackbar2" timeout = "5000" color="error" outlined dark> Wrong Email or Password </v-snackbar>
    <v-snackbar v-model="snackbar3" timeout = "1000" color="success" outlined dark> Signed In </v-snackbar>
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
                  this.snackbar3 = true
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
  background-color: #a8d0e6;
  width: 100%;
}
</style>