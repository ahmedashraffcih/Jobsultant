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
        <v-alert color="error" :value="error" icon="close"
          >The username or password wrong</v-alert
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
              <v-col cols="10" style="height: 50px">
                <v-btn
                  rounded-4
                  large
                  block
                  :disabled="!Valid"
                  color="success"
                  @click.prevent="login()"
                >
                  Log in
                </v-btn>
              </v-col>
              <v-col cols="10" style="height: 60px">
                <v-card-text class="text-center">OR</v-card-text>
              </v-col>
              <v-col cols="10">
                <v-btn rounded-4 large block color="success">
                  Log in With Google
                </v-btn>
              </v-col>
              <v-col cols="10">
                <v-btn rounded-4 large block color="success">
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
export default {
  name: "Login",

  data() {
    return {
      Valid: false, //validation flag
      email: null,
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      password: null,
      passRules: [
        (v) => !!v || "Password is required",
        (v) => (v && v.length >= 8) || "Name must be more than 8 characters",
      ],
      value: String, // for password view
      error: false,
    };
  },
  methods: {
    login() {
      console.log(this.$store);
      this.$store
        .dispatch("LOGIN", {
          email: this.email,
          password: this.password,
        })
        .then((success) => {
          this.$router.push("/");
        })
        .catch((error) => {
          this.error = true;
        });
    },
  },
};
</script>

<style scoped>
.div {
  background-color: #006064;
  width: 100%;
}
</style>