<template>
  <v-col cols="8">
    <v-row>
      <v-col cols="3">
        <v-card class="mx-auto">
          <v-img
            class="white--text align-end"
            height="200px"
            src="../../assets/imgs/CompanyLogo.png"
          >
          </v-img>

          <v-card-actions>
            <v-btn small color="primary" text>
              Update Profile
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="9">
        <v-card>
          <v-img
            class="white--text align-end"
            height="200px"
            src="../../assets/imgs/CompanyCover.jpeg"
          >
          </v-img>

          <v-card-actions>
            <v-btn small color="primary" text>
              Update Cover
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8">
        <h3>About {{ Name }}</h3>
        <v-row>
          <div class="col col-4">
            <h5 :title="Name">Name:</h5>
            <h5 :title="Phone">Phone:</h5>
            <h5 :title="Industry">Industry:</h5>
            <h5 :title="Website">Website:</h5>
            <h5 :title="Size">Company Size:</h5>
            <h5 :title="Headquarters">Headquarters:</h5>
            <h5 :title="Year">Founded:</h5>
          </div>

          <div class="col col-4">
            <h5>{{ Name }}</h5>
            <h5>{{ Phone }}</h5>
            <h5>{{ Industry }}</h5>
            <h5>{{ Website }}</h5>
            <h5>{{ Size }} employees</h5>
            <h5>{{ Headquarters }}</h5>
            <h5>{{ Year }}</h5>
          </div>
        </v-row>

        <v-btn small color="primary" dark to="/Employer/Emp_Edit_Profile">
          Edit
          <v-icon small dark right>
            mdi-fountain-pen
          </v-icon>
        </v-btn>
      </v-col>
      <v-col cols="4">
        <v-card outlined>
            <v-card-title class="ml-3">Share with friends:</v-card-title>
          <v-card-actions>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 grey--text"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <h3 :title="Name">Open Vacancies at {{ Name }}!</h3>
        <v-btn small color="primary" dark to="/Employer/Emp_Manage_Jobs">
          Manage Jobs
          <v-icon small dark right>
            mdi-card-account-details
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    Name: "Vodafone Egypt",
    Phone: "01012347575",
    Industry: "Telecom Service",
    Overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu mi bibendum neque egestas congue quisque.",
    Website: "www.vodafoneEg.com",
    Size: "200-300",
    Headquarters: "Cairo,Egypt",
    Year: "1990",
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style scoped>
.background {
  height: min-content;
  padding: 10px;
  padding-left: 20px;
  margin-bottom: 15px;
  background-color: white;
}
.ProfilePic {
  max-width: fit-content;
}
</style>
