<template>
  <div class="div">
    <v-row justify="center">
      <v-card class="mt-10 mb-10" width="600px">
        <v-card-title class="justify-center"
          >Create a Free Account</v-card-title
        >
        <v-card-subtitle class="text-center"
          >Already have an account? Log In</v-card-subtitle
        >
        <v-card-text>
          <v-form v-model="Valid">
            <v-row justify="center" style="height: 90px">
              <v-col cols="5">
                <v-text-field
                  dense
                  outlined
                  label="First Name"
                  required
                  :rules="nameRules"
                  height="50px"
                ></v-text-field>
              </v-col>
              <v-col cols="5">
                <v-text-field
                  dense
                  outlined
                  label="Last Name"
                  required
                  :rules="nameRules"
                  height="50px"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="10" style="height: 90px">
                <v-text-field
                  dense
                  outlined
                  label="Email"
                  v-model="email"
                  required
                  :rules="emailRules"
                  height="50px"
                ></v-text-field>
              </v-col>
              <v-col cols="10" style="height: 90px">
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
                ></v-text-field>
              </v-col>
              <v-col cols="10" style="height: 90px">
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
                <v-btn
                  rounded-4
                  color="success"
                  large
                  block
                  @click.prevent="register()"
                >
                  Proceed to build your CV
                </v-btn>
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
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      FirstName: "",
      LastName: "",
      Valid: false,
      //Rule
      nameRules: [
        (v) => !!v || "Field is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
        (v) => (!!v && isNaN(v)) || "Can't include numbers",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      password: "",
      passRules: [
        (v) => !!v || "Password is required",
        (v) => (v && v.length >= 8) || "Name must be more than 8 characters",
      ],
      JobTitle: "",
      confirm_password:"",
      value: String,
      userExists: false,
      error: false,
    };
  },
  methods: {
    register() {
      if (this.ValidPass()){
        this.$store.dispatch('REGISTER', {
          firstname : this.FirstName,
          lastname : this.LastName,
          email : this.email,
          passowrd : this.password
        })
        .then((status) => {
          this.$router.push("/user/Build_CV");
        })
        .catch((error) => {
          this.userExists = true;
        });
      }
    },
    ValidPass(){
      return this.password === this.confirm_password
    }
  },
};
</script>
<style scoped>
.div {
  background-color: #006064;
  width: 100%;
}
</style>
