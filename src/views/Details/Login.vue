<template>
  <v-card class="mt-10 mb-10" width="500px">
    <v-card-title class="justify-center">Log in to your account</v-card-title>
    <v-card-subtitle class="text-center"
      >Don't have an account yet? Register here</v-card-subtitle>
    <v-card-text>
      <v-form>
        <v-row justify="center">
          <v-col cols="10" style="height:140px">
            <v-text-field dense outlined label="E-mail" required></v-text-field>
            <v-text-field
              dense
              outlined
              label="Password"
              hint="At least 8 characters"
            ></v-text-field>
          </v-col>
          <v-col cols="10" style="height:50px">
            <v-btn
              rounded
              large
              block
              :disabled="!valid"
              color="success"
              @click="validate"
            >
              Log in
            </v-btn>
          </v-col >
          <v-col cols="10" style="height:60px">
            <v-card-text class="text-center">OR</v-card-text>
          </v-col>
          <v-col cols="10">
            <v-btn
              rounded
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
              rounded
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
</template>