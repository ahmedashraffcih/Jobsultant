<template>
  <v-card class="mt-10 mb-10" width="600px">
    <v-card-title class="justify-center">Create a Free Account</v-card-title>
    <v-card-subtitle class="text-center"
      >Already have an account? Log In</v-card-subtitle
    >
    <v-card-text>
      <v-form>
        <v-row justify="center" style="height: 75px">
          <v-col cols="5">
            <v-text-field
              dense
              outlined
              label="First Name"
              required
              height="50px"
            ></v-text-field>
          </v-col>
          <v-col cols="5">
            <v-text-field
              dense
              outlined
              label="Last Name"
              required
              height="50px"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="10" style="height: 75px">
            <v-text-field
              dense
              outlined
              label="Email"
              required
              height="50px"
            ></v-text-field>
          </v-col>
          <v-col cols="10" style="height: 75px">
            <v-text-field
              dense
              outlined
              label="Password"
              hint="At least 8 characters"
              height="50px"
            ></v-text-field>
          </v-col>
          <v-col cols="10" style="height: 75px">
            <v-text-field
              dense
              outlined
              label="Target Job Title"
              height="50px"
            ></v-text-field>
          </v-col>

          <v-col cols="10">
            <v-btn rounded large block color="success" to="/user/Build_CV">
              Proceed to build your CV
            </v-btn>
            <p class="text-center mt-3">
              By registering, you confirm that you have read and agree to
              Jobsultant.com's Terms and Conditions of Use and Privacy Policy.
            </p>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>
