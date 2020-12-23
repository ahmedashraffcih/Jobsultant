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
                  v-model="firstname"
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
                  v-model="lastname"
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
              <!-- <v-col cols="10" style="height: 75px">
            <v-text-field
              dense
              outlined
              label="Target Job Title"
              v-model="jobtitle"
              height="50px"
            ></v-text-field>
          </v-col> -->

              <v-col cols="10">
                <v-btn
                  rounded-4
                  color="success"
                  large
                  block
                  :disabled="!Valid"
                  to="/user/Build_CV"
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
      //Rule
      nameRules: [
        v => !!v || "Field is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters",
        v => (!!v && isNaN(v)) || "Can't include numbers"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      password: "",
      passRules: [
        v => !!v || "Password is required",
        v => (v && v.length >= 8) || "Name must be more than 8 characters"
      ],
      JobTitle: "",
      value: String,
      Valid: false
    };
  } /*
  methods: {
    onSubmit() {
      this.$store
        .dispatch(REGISTER, {
          email: this.email,
          password: this.password,
          FirstName: this.firstname,
          LastName: this.lastname,
          JobTitle: this.jobtitle
        })
        .then(() => this.$router.push({ name: "home" }));
    }
  }*/
};
</script>
<style scoped>
.div {
  background-color: #006064;
  width: 100%;
}
</style>
