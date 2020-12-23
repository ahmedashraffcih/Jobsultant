<template class="template">
  <div class="div">
    <v-row justify="center">
      <v-card class="mt-10 mb-10" width="500px">
        <v-card-title class="justify-center"
          >Log in to your account</v-card-title
        >
        <v-card-subtitle class="text-center"
          >Don't have an account yet? Register here</v-card-subtitle
        >
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
                ></v-text-field>
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
                ></v-text-field>
              </v-col>
              <v-col cols="10" style="height: 50px">
                <v-btn
                  rounded-4
                  large
                  block
                  :disabled="!Valid"
                  color="success"
                  @click="validate"
                >
                  Log in
                </v-btn>
              </v-col>
              <v-col cols="10" style="height: 60px">
                <v-card-text class="text-center">OR</v-card-text>
              </v-col>
              <v-col cols="10">
                <v-btn
                  rounded-4
                  large
                  block
                  :disabled="!valid"
                  color="success"
                  @click="validate"
                >
                  Log in With Google
                </v-btn>
              </v-col>
              <v-col cols="10">
                <v-btn
                  rounded-4
                  large
                  block
                  :disabled="!valid"
                  color="success"
                  @click="validate"
                >
                  Log in With Facebook
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </div>
</template>

<script>
//import Constants from "../components/constants.js"

export default {
  name: "Login",
  data() {
    return {
      email: null,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      password: null,
      passRules: [
        v => !!v || "Password is required",
        v => (v && v.length >= 8) || "Name must be more than 8 characters",
      ],
      value: String,
      Valid: false,
    };
  },
  /* methods: {
    onSubmit(email, password) {
      this.$store
        .dispatch(LOGIN, { email, password })
        .then(() => this.$router.push({ name: "home" }));
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  }*/
};
</script>
<style scoped>
.div {
  background-color: #006064;
  width: 100%;
}
</style>
