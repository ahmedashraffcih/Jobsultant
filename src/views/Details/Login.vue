<template>
  <v-card class="mt-10 mb-10">
    <v-card-title class="justify-center">Log in to your account</v-card-title>
    <v-spacer></v-spacer>
    <v-card-subtitle class="text-center"
      >Don't have an account yet? Register here</v-card-subtitle
    >
    <v-card-text>
      <v-form>
        <v-row justify="center">
          <v-col cols="8">
            <v-text-field label="E-mail" required></v-text-field>
          </v-col>
          <v-col cols="8">
            <v-text-field
              label="Password"
              hint="At least 8 characters"
            ></v-text-field>
          </v-col>
          <v-col cols="8">
            <v-btn
              x-large
              block
              :disabled="!valid"
              color="success"
              @click="validate"
            >
              Log in
            </v-btn>
          </v-col>
          <v-col cols="8">
            <v-card-text class="text-center">OR</v-card-text>
          </v-col>
          <v-col cols="8">
            <v-btn
              x-large
              block
              :disabled="!valid"
              color="success"
              @click="validate"
            >
              Log in With Google
            </v-btn>
          </v-col>
          <v-col cols="8">
            <v-btn
              x-large
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