<template>
  <v-row class="grey lighten-4" justify="center">
    <v-col cols="3">
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
        <v-col cols="6">
          <v-card outlined>
            <v-row>
              <v-col cols="10">
                <v-card-title class="ml-2 text-h4">About:</v-card-title>
              </v-col>

              <v-col cols="2" class="mt-4">
                <v-btn
                  small
                  right
                  color="primary"
                  dark
                  to="/Employer/Emp_Edit_Profile"
                >
                  <h3>Edit</h3>
                  <v-icon small dark right>
                    mdi-pencil
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-row class="pl-5">
              <v-col cols="4">
                <h4>Name:</h4>
                <h4>Phone:</h4>
                <h4>Industry:</h4>
                <h4>Website:</h4>
                <h4>Company Size:</h4>
                <h4>Headquarters:</h4>
              </v-col>

              <v-col cols="5">
                <h4>{{ employer.companyName }}</h4>
                <h4>{{ employer.companyPhone }}</h4>
                <h4>{{ employer.industry }}</h4>
                <h4>{{ employer.website }}</h4>
                <h4>{{ employer.size }} employees</h4>
                <h4>{{ employer.location }}</h4>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-spacer></v-spacer>

        <v-col cols="3">
          <v-card outlined shaped elevation="1">
            <v-card-title class="ml-3 text-h5"
              >Share with friends:</v-card-title
            >
            <v-card-actions>
              <template>
                <ShareNetwork
                  v-for="network in networks"
                  :network="network.network"
                  :key="network.network"
                  url="https://news.vuejs.org"
                  title="Testing from jobsultant"
                  description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
                  quote="The hot reload is so fast it\'s near instant. - Evan You"
                  hashtags="vuejs,jobsultant"
                  class="mx-6"
                  tag="button"
                >
                  <v-icon size="30px">
                    {{ network.icon }}
                  </v-icon>
                </ShareNetwork>
              </template>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <v-card outlined>
            <v-card-title class="text-h4"
              >Open Vacancies at {{ employer.companyName }}!</v-card-title
            >
            <v-btn
              class="ml-4 mb-3"
              small
              color="primary"
              dark
              to="/Employer/Emp_Manage_Jobs"
            >
              <h3>Manage Jobs</h3>
              <v-icon small dark right>
                mdi-card-account-details
              </v-icon>
            </v-btn>
          </v-card>
        </v-col>

        <v-spacer></v-spacer>

        <v-col cols="3">
          <v-card outlined shaped elevation="1">
            <v-row>
              <v-card-title class="ml-3 text-h5"
                >Contact Information:</v-card-title
              >
              <v-row justify="end" class="mr-10">
                <v-dialog
                  transition="dialog-bottom-transition"
                  max-width="1000"
                  v-model="Personal_Dialog"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs" v-on="on">mdi-pencil</v-icon>
                  </template>

                  <template v-slot:default="Personal_Dialog">
                    <v-card>
                      <v-toolbar color="#24305E" dark>
                        <v-toolbar-title class="ml-5"
                          >Edit Personal Information</v-toolbar-title
                        >
                        <v-spacer></v-spacer>
                        <v-icon class="mr-2" @click="Personal_Dialog.value = false"
                          >mdi-close</v-icon
                        >
                      </v-toolbar>

                      <v-card-text>
                        <v-form v-model="Valid3" class="mt-5">
                          <!-- /////////////////////////////////////////////////////////// -->
                          <!-- Full name field -->
                          <!-- /////////////////////////////////////////////////////////// -->
                          <v-row justify="center">
                            <v-col cols="2">
                              <p
                                class=" mt-2 text-subtitle-1 font-weight-regular"
                              >
                                Full name
                              </p>
                            </v-col>
                            <!-- FirstName -->
                            <v-col cols="5">
                              <v-text-field
                                dense
                                outlined
                                label="First Name"
                                v-model="employer.fname"
                                :rules="nameRules"
                                required
                                clearable
                              >
                              </v-text-field>
                            </v-col>
                            <!-- Last Name -->
                            <v-col cols="5">
                              <v-text-field
                                dense
                                outlined
                                label="Last Name"
                                v-model="employer.lname"
                                :rules="nameRules"
                                required
                                clearable
                              >
                              </v-text-field>
                            </v-col>
                          </v-row>

                          <v-row justify="center">
                            <v-col cols="2">
                              <p
                                class=" mt-2 text-subtitle-1 font-weight-regular"
                              >
                                Title
                              </p>
                            </v-col>
                            <!-- Title -->
                            <v-col cols="10">
                              <v-text-field
                                dense
                                outlined
                                label="Title"
                                v-model="employer.title"
                                required
                                clearable
                              >
                              </v-text-field>
                            </v-col>
                          </v-row>

                          <v-row justify="center">
                            <v-col cols="2">
                              <p
                                class=" mt-2 text-subtitle-1 font-weight-regular"
                              >
                                Phone
                              </p>
                            </v-col>
                            <!-- Phone Number -->
                            <v-col cols="10">
                              <VuePhoneNumberInput
                                color="dodgerblue"
                                valid-color="green"
                                required
                                v-model="employer.phone"
                                default-country-code="EG"
                                clearable
                              />
                            </v-col>
                          </v-row>
                        </v-form>

                        <v-row class="justify-end mr-1">
                          <v-btn
                            class="white--text"
                            width="150px"
                            color="#24305E"
                            @click="editContactInfo()"
                            :loading="loading"
                          >
                            Apply
                          </v-btn>
                        </v-row>
                      </v-card-text>
                    </v-card>
                  </template>
                </v-dialog>
              </v-row>
            </v-row>
            <v-col>
              <h4>Name: {{ employer.fname }} {{ employer.lname }}</h4>
              <h4>Title: {{ employer.title }}</h4>
              <h4>Phone: {{ employer.phone }}</h4>
            </v-col>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <v-card outlined>
            <v-row class="ml-1">
              <!-- ///////////////// Overview Card Starts Here ///////////////// -->
              <v-card-title class="text-h4">Overview:</v-card-title>
              <v-row justify="end" class="mr-10">
                <v-dialog
                  transition="dialog-bottom-transition"
                  max-width="1000"
                  v-model="Overview_Dialog"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs" v-on="on">mdi-pencil</v-icon>
                  </template>

                  <template v-slot:default="Overview_Dialog">
                    <v-card>
                      <v-toolbar color="#24305E" dark>
                        <v-toolbar-title class="ml-5"
                          >Edit Company Overview</v-toolbar-title
                        >
                        <v-spacer></v-spacer>
                        <v-icon class="mr-2" @click="Overview_Dialog.value = false"
                          >mdi-close</v-icon
                        >
                      </v-toolbar>

                      <v-card-text>
                        <v-form v-model="Valid3" class="mt-5">
                          <v-row justify="center">
                            <v-col cols="3">
                              <p
                                class=" mt-3 text-subtitle-1 font-weight-regular"
                              >
                                Company Overview
                              </p>
                            </v-col>
                            <!-- Overview -->
                            <v-col cols="8">
                              <v-textarea
                                class="mt-1"
                                dense
                                outlined
                                label="Overview"
                                v-model="employer.overView"
                                counter
                                :rules="OverviewRules"
                                clearable
                                clear-icon="mdi-close-circle"
                                rows="4"
                              >
                              </v-textarea>
                            </v-col>
                          </v-row>
                        </v-form>

                        <v-row class="justify-end mr-1">
                          <v-btn
                            class="white--text"
                            width="150px"
                            color="#24305E"
                            @click="editOverview()"
                            :loading="loading2"
                          >
                            Apply
                          </v-btn>
                        </v-row>
                      </v-card-text>
                    </v-card>
                  </template>
                </v-dialog>
              </v-row>
              <v-card-text class="text-subtitle-1">
                <p>{{employer.overView}}</p>
              </v-card-text>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-snackbar v-model="snackbar" timeout="2000" color="success" outlined dark>
      Your changes have been successfully saved
    </v-snackbar>
    <v-snackbar v-model="OverviewSuccess" timeout="2000" color="success" outlined dark>
      Overview successfully edited
    </v-snackbar>
    <v-snackbar v-model="OverviewError" timeout="2000" color="error" outlined dark>
      Overview can not be empty or less than 150 characters
    </v-snackbar>
  </v-row>
</template>

<script>
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import { mapGetters, mapActions, mapMutations } from "vuex";
import ApiService from "../../services/api.service";
import TokenService from "../../services/storage.service";

export default {
  data: () => ({

    //Edit Dialog and snackbar
    Personal_Dialog: false,
    Overview_Dialog: false,
    snackbar: false,
    OverviewSuccess: false,
    OverviewError: false,
    loading: false,
    loading2:false,

    // Contact Information:
    employer: {},

    //Rules
    nameRules: [
      (v) => !!v || "Field is required",
      (v) => (v && v.length <= 15) || "Name must be less than 15 characters",
      (v) => (!!v && isNaN(v)) || "Can't include numbers",
      (v) => /^[a-zA-Z]+$/.test(v) || "Can't include special characters",
    ],
    OverviewRules: [
      (v) => !!v || "Field is required",
      (v) => (v && v.length >= 150) || "Overview must be More than 150 characters",
    ],
    // networks sharing
    networks: [
      {
        network: "facebook",
        name: "Facebook",
        icon: "mdi-facebook",
      },
      {
        network: "twitter",
        name: "Twitter",
        icon: "mdi-twitter",
      },
      {
        network: "linkedin",
        name: "LinkedIn",
        icon: "mdi-linkedin",
      },
    ],
  }),
  mounted() {
    this.getUser();
  },
  components: {
    VuePhoneNumberInput,
  },

  computed: {
    //Get states from store
    ...mapGetters("auth", ["accessToken"]),
    ...mapGetters("auth", ["user_id"]),
    // ...mapActions(['DISPLAY_SEARCH'])
  },
  methods: {
    log() {
      console.log(this.userdata);
    },
    getUser() {
      ApiService.get(`http://localhost:3000/employers/${this.user_id}`).then(
        (r) => {
          if (r.status == 200) {
            this.employer = r.data;
            console.log(this.employer);
          } else {
            console.log(r);
          }
        }
      );
    },

    editContactInfo() {
      this.loading = true;
      ApiService.put(
        `http://localhost:3000/EditInfo/${this.user_id}`,
        this.employer
      )
        .then((r) => {
          console.log(r);
          if (r.status == 204) {
            this.getUser();
            this.loading = false;
            this.Personal_Dialog = false;
            this.snackbar = true;
            console.log(r);
          } else {
            this.loading = false;
            console.log(r);
            console.log(this.user);
          }
        })
        .catch((error) => {
          this.loading = false;
        });
    },

    editOverview() {
      this.loading2 = true;
      ApiService.put(
        `http://localhost:3000/EditInfo/${this.user_id}`,
        this.employer
      )
        .then((r) => {
          console.log(r);
          if (r.status == 204 && this.employer.overView!= '' && this.employer.overView.length >= 150) {
            this.getUser();
            this.loading2 = false;
            this.Overview_Dialog = false,
            this.OverviewSuccess = true;
            console.log(r);
          } else {
            this.loading2 = false;
            this.OverviewError = true;
            console.log(r);
            console.log(this.user);
          }
        })
        .catch((error) => {
          this.loading2 = false;
        });
    },
  },
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
</style>
