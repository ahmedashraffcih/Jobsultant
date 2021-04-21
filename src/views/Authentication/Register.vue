<template>
  <div class="div">
    <v-row justify="center">
      <v-card class="mt-10 mb-10" width="600px">
        <!-- ======================================================================= -->
        <v-card-title class="justify-center">Create a Free Account</v-card-title>
        <v-card-subtitle class="text-center">Already have an account? <a style="text-decoration: none;" href="/Authentication/login">Log In</a></v-card-subtitle>
        <!-- ======================================================================= -->
        <v-card-text>
          <v-form v-model="Valid">
            <v-row justify="center" style="height: 90px">
              <!-- FirstName -->
              <v-col cols="5">
                <v-text-field
                  dense
                  outlined
                  label="First Name"
                  v-model="firstname"
                  required
                  :rules="nameRules"
                  height="50px"
                >
                </v-text-field>
              </v-col>
              <!-- Last Name -->
              <v-col cols="5">
                <v-text-field
                  dense
                  outlined
                  label="Last Name"
                  v-model="lastname"
                  required
                  :rules="nameRules"
                  height="50px"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <!-- ======================================================================= -->
            <v-row justify="center">
              <v-col cols="10" style="height: 90px">
                <!-- Email -->
                <v-text-field
                  dense
                  outlined
                  label="Email"
                  v-model="email"
                  required
                  :rules="emailRules"
                  height="50px"
                >
                </v-text-field>
              </v-col>
              <v-col cols="10" style="height: 90px">
                <!-- Password -->
                <v-text-field
                  dense
                  outlined
                  label="Password"
                  v-model="password"
                  required
                  :rules="passRules"
                  height="50px"
                  :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="() => (value = !value)"
                  :type="value ? 'password' : 'text'"
                >
                </v-text-field>
              </v-col>
              <v-col cols="10" style="height: 90px">
                <!-- Confirm Password -->
                <v-text-field
                  dense
                  outlined
                  label="Confirm Password"
                  v-model="confirm_password"
                  required
                  :rules="passRules"
                  type="password"
                  height="50px"
                ></v-text-field>
              </v-col>
              <v-col cols="10">
                <!-- Register Button -->
                <v-btn
                  rounded-4
                  color="success"
                  :disabled="!Valid"
                  large
                  block
                  @click="tryRegister":loading="loading"
                >
                  Proceed to build your CV
                </v-btn>
                <!-- ======================================================================= -->
                <p class="text-center mt-3">
                  By registering, you confirm that you have read and agree to
                  Jobsultant.com's Terms and Conditions of Use and Privacy
                  Policy.
                </p>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
    <!-- ======================================================================= -->
    <v-snackbar v-model="snackbar1" timeout="3000">Complete You Information as needed</v-snackbar>
    <v-snackbar v-model="snackbar2" timeout="1000" color="success" outlined dark> Registered </v-snackbar>
    <!-- ======================================================================= -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Register",
  data() {
    return {
      //Intinate the variables that will store user's data
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirm_password: "",
      //=====================
      Valid: false, //Form Validation flag
      value: String, //eye passowrd reveal
      userExists: false,
      error: false,
      //=====================
      snackbar1: false,
      snackbar2: false,
      loading:false,//loading till user registerd
      
      //Validation Rules
      nameRules: [
        (v) => !!v || "Field is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
        (v) => (!!v && isNaN(v)) || "Can't include numbers",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passRules: [
        (v) => !!v || "Password is required",
        (v) => (v && v.length >= 8) || "Name must be more than 8 characters",
      ],
    };
  },
  methods: {
    ValidPass() {
      // check if user passowrd matches or not
      return this.password === this.confirm_password;
    },
    ...mapActions("auth", ["register"]),//Apply Register function from auth module
    tryRegister() {
      this.loading = true //apply login animation
      //check if user meets input rules and both password are the same
      //this.$refs.form.validate() &&
      if (this.email != '' && this.password != ''&& this.firstname != '' && this.lastname != '' && this.ValidPass()) 
      {
        //Success  
        this.register({
          email: this.email,
          password: this.password,
          firstname: this.firstname,
          lastname: this.lastname,
        }).then((r) => {
          if (!r) 
          {
            this.snackbar2 = true;
            //set the loading off and register the user
            this.loading = false;
          }
        });
      } 
      else {
      //Validation Error
      this.snackbar1 = true;
      this.loading = false
      }
    },
  },
};
</script>
<style scoped>
.div {
  background-color: #a8d0e6;
  width: 100%;
}
</style>
