<template>
  <div class="div">
    <v-row justify="center">
      <v-col cols="5">
        <h1 class="display-1 mt-3 mb-10 white--text">My Account</h1>
        <v-card class="mb-5">
          <v-row>
            <v-card-title class="ml-13">Personal Information</v-card-title>
            <v-row justify="end" class="mr-15">
              <v-icon>mdi-pencil</v-icon>
            </v-row>
          </v-row>
          <v-divider></v-divider>
          <v-list class="ml-10" max-width="500px">
            <v-list-item>
              <v-list-item-title>Name</v-list-item-title>
              <v-list-item-subtitle>Ahmed Ashraf</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Birth date</v-list-item-title>
              <v-list-item-subtitle>01/01/2000</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Gender</v-list-item-title>
              <v-list-item-subtitle>Male</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Residence Location</v-list-item-title>
              <v-list-item-subtitle>Egypt - Cairo</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>

        <v-card class="mb-5">
          <v-row>
            <v-card-title class="ml-13">Contact Information</v-card-title>
            <v-row justify="end" class="mr-15">
              <v-icon>mdi-pencil</v-icon>
            </v-row>
          </v-row>
          <v-divider></v-divider>
          <v-list class="ml-10" max-width="500px">
            <v-list-item>
              <v-list-item-title>Email</v-list-item-title>
              <v-list-item-subtitle
                >ahmedashraffcih@gmail.com</v-list-item-subtitle
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Mobile phone</v-list-item-title>
              <v-list-item-subtitle>‎+20-1028281233</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>

        <v-card class="mb-5">
          <v-row>
            <v-card-title class="ml-13">Password</v-card-title>
            <v-row justify="end" class="mr-15">
              <v-icon>mdi-pencil</v-icon>
            </v-row>
          </v-row>
          <v-list-item>
            <v-list-item-title class="ml-10"
              >Change your account password</v-list-item-title
            >
          </v-list-item>
        </v-card>

        <v-card class="mb-5">
          <v-row>
            <v-card-title class="ml-13">Email notification</v-card-title>
            <v-row justify="end" class="mr-15">
              <v-icon>mdi-pencil</v-icon>
            </v-row>
          </v-row>
          <v-list-item>
            <v-list-item-title class="ml-10"
              >Modify your Jobsultant.com email notifications
              settings.</v-list-item-title
            >
          </v-list-item>
        </v-card>

        <v-card class="mb-5">
          <v-row>
            <v-card-title class="ml-13">Delete My Account</v-card-title>
            <v-row justify="end" class="mr-15">
              <v-icon>mdi-pencil</v-icon>
            </v-row>
          </v-row>
          <v-list-item>
            <v-list-item-title class="ml-10"
              >Permanently remove your account from Jobsultant.com
            </v-list-item-title>
          </v-list-item>
          <v-btn class="ml-14 mb-3" outlined>Delete My Account</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.div {
  background-color: #006064
;
  width: 100%;
}
</style>
