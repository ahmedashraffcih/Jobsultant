<template>
  <div class="div">
    <v-row justify="center" class="pa-0 ma-0">
      <v-col cols="8">
        <!-- Profile Card -->
        <v-col v-if="cardcondition != true">
          <v-card v-if="loggedIn" flat color="orange darken-2" rounded="0">
            <v-list class="ml-2 mr-2 ">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="titles">{{ user.fname }} {{ user.lname }}</v-list-item-title>
                  <v-list-item-subtitle style="color:#FF9800" class="subtitle-3 mt-2">Preferred job title</v-list-item-subtitle>
                  <v-list-item-subtitle class="caption mt-2" v-if="!user.cv">-</v-list-item-subtitle>
                  <v-list-item-subtitle class="caption mt-2" v-if="user.cv">{{ user.cv.job_Title }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar class="avatar" color="orange" size="80">
                  <v-img v-if="user.cv.image" :src="user.cv.image"></v-img>
                  <v-img v-if="!user.cv.image" src="../../assets/imgs/profile.jpg"></v-img>
                </v-list-item-avatar>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>

        <v-col>
          <v-card flat>
            <v-card-title class="titles ml-2">Recommended For You</v-card-title>
            <v-col cols="6" class="ml-6 pa-0">
              <v-text-field dense class="searchbar" outlined label="Search" v-model="search" rounded-0> </v-text-field>
            </v-col>
            <v-divider></v-divider>
            <v-skeleton-loader v-if="overlay == true" type="article, actions"></v-skeleton-loader>
            <v-row class="ml-3 mr-3 mb-3 mt-4 pa-0">
              <v-col cols="6" v-for="job in filteredJobs.slice((page - 1) * itemsPerPage, itemsPerPage * page)" :key="job._id">
                <v-card
                  flat
                  rounded="4"
                  outlined
                  class="mb-1"
                  @click="
                    cardcondition = true;
                    GetJob(job.rco._id);
                  "
                >
                  <v-row align="center">
                    <v-col cols="8">
                      <v-list>
                        <v-list-item three-line>
                          <v-list-item-content>
                            <v-list-item-title class="titles" style="word-wrap: break-word">{{ job.rco.Job_Title }}</v-list-item-title>
                            <v-list-item-subtitle style="color:#FF9800" class="subtitle-1">{{ job.company }}</v-list-item-subtitle>
                            <v-list-item-subtitle class="subtitle-2 mt-5">{{ job.career_Level }} Level</v-list-item-subtitle>
                            <v-list-item-subtitle class="caption mt-2">
                              <v-chip
                                color="#F57C00"
                                text-color="white"
                                class="mr-2 mb-1"
                                small
                                v-for="(i, skill) in job.rco.Key_Skills.split('|')"
                                :key="i"
                                >{{ i }}
                              </v-chip>
                            </v-list-item-subtitle>
                            <v-list-item-subtitle class="caption mt-2">1/1/2020</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-col>
                    <v-col>
                      <vue-ellipse-progress
                        :progress="job.match"
                        :size="120"
                        :color="job.match >= 80 ? '#00C853' : job.match < 50 ? '#D50000' : '#FFD600'"
                      >
                        <span> {{ job.match }}%</span>
                        <span slot="legend-caption">Matching</span>
                      </vue-ellipse-progress>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
            <v-pagination
              v-model="page"
              class="orange darken-2"
              :length="Math.ceil(jobs.length / itemsPerPage)"
              color="light-blue darken-4"
            ></v-pagination>
          </v-card>
        </v-col>

        <!-- Apply Card -->

        <v-col v-if="cardcondition">
          <v-card flat>
            <v-progress-linear value="100" height="10" color="orange darken-2"></v-progress-linear>
            <v-row justify="center">
              <v-col cols="4">
                <v-list class="ml-2">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <v-list-item-title class="titles">{{ oneJob.rco.Job_Title }}</v-list-item-title>
                      <v-list-item-subtitle style="color:#FF9800" class="subtitle-1 mt-1">Matching Percent : {{ oneJob.match }}</v-list-item-subtitle>
                      <v-list-item-subtitle class="subtitle-2 mt-2">{{ oneJob.career_level }}</v-list-item-subtitle>
                      <v-list-item-subtitle class="caption mt-1">1/1/2020</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>

                <!-- @click="ApplyJob(job._id)" -->
                <v-dialog transition="dialog-bottom-transition" max-width="800" v-model="dialog">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn @click="cardcondition = false" class="ml-4 mb-3" small outlined>Close</v-btn>
                    <v-btn v-bind="attrs" v-on="on" class="ml-6 mb-3" small outlined>Apply</v-btn>
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-toolbar color="light-blue darken-4" dark>
                        <v-toolbar-title class="ml-5">Apply to {{ oneJob.company }}</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-icon @click="dialog.value = false">mdi-close</v-icon>
                      </v-toolbar>
                      <v-card-title class="ml-3">Contact Info</v-card-title>
                      <v-card-text>
                        <v-form v-model="Valid">
                          <v-row>
                            <v-col cols="3">
                              <v-card-text>Email address</v-card-text>
                            </v-col>
                            <v-col cols="9">
                              <v-text-field dense outlined v-model="AppliedJob.applicantEmail" :rules="emailRules" clearable required> </v-text-field>
                            </v-col>
                          </v-row>

                          <v-row>
                            <v-col cols="3">
                              <v-card-text>Phone Number</v-card-text>
                            </v-col>
                            <v-col cols="9">
                              <VuePhoneNumberInput
                                id="phoneNumber1"
                                class="mb-4"
                                color="dodgerblue"
                                valid-color="green"
                                required
                                :error="hasErrorActive"
                                :loader="hasLoaderActive"
                                v-model="AppliedJob.applicantPhone"
                                :rules="phoneRules"
                                clearable
                                @update="onUpdate"
                              />
                            </v-col>
                          </v-row>
                        </v-form>
                        <v-card-text>Submitting this application won’t change your JobSultant profile.</v-card-text>
                        <v-divider></v-divider>
                        <v-row class="justify-end mt-4 mr-1">
                          <v-btn
                            class="white--text"
                            width="150px"
                            color="light-blue darken-4"
                            :disabled="!Valid"
                            @click="ApplyJob()"
                            :loading="loading"
                          >
                            Apply
                          </v-btn>
                        </v-row>
                      </v-card-text>
                    </v-card>
                  </template>
                </v-dialog>
              </v-col>
              <v-col cols="5">
                <v-card-title class="titles">Job Description</v-card-title>
                <v-card-text>{{ oneJob.description }}</v-card-text>
              </v-col>
              <v-col>
                <v-card-title class="titles">Skills</v-card-title>
                <ul class="ml-3">
                  <li v-for="skill in oneJob.skills">{{ skill }}</li>
                </ul>
              </v-col>
            </v-row>
            <v-progress-linear absolute v-if="loading" color="orange darken-2" indeterminate> </v-progress-linear>
          </v-card>
        </v-col>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar2" timeout="5000" color="error" outlined dark
      ><v-icon class="mr-2">mdi-alert-octagon-outline</v-icon>
      Bad Information
    </v-snackbar>
    <v-snackbar v-model="snackbar1" timeout="3000" color="success" outlined dark
      ><v-icon class="mr-2">mdi-checkbox-marked-circle</v-icon>
      Your Application placed successfully
    </v-snackbar>
    <v-overlay :value="overlay" opacity="0.95" color="#01579B">
      <v-row class="justify-center">
        <breeding-rhombus-spinner class="justify-center" :animation-duration="2000" :size="100" color="#FF9800" />
      </v-row>
      <v-row class="justify-center mt-10">
        <vue-typed-js :strings="['That could take some time','Getting you the perfect jobs']" color="#FF9800" 	:typeSpeed="75" :loop="true" 	:startDelay="1000">
          <h1 style="color:#FF9800; font-family: 'Montserrat';font-size: 18px;" class="text-center">Please be patient,<br> <span class="typing"></span></h1>
        </vue-typed-js>
      </v-row>
    </v-overlay>
  </div>
</template>

<script>
import ApiService from "../../services/api.service";
import { FingerprintSpinner, BreedingRhombusSpinner } from "epic-spinners";
import { mapGetters, mapActions, mapMutations } from "vuex";
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
export default {
  components: {
    VuePhoneNumberInput,
    FingerprintSpinner,
    BreedingRhombusSpinner,
  },
  mounted() {
    this.GetRecommended();
    //this.GetRecommended();
  },
  data: () => ({
    //page
    page: 1,
    itemsPerPage: 4,
    overlay: false,

    user: {
      cv: {},
      account: {},
    },

    jobs: [],
    recommended: [],
    job: "",
    oneJob: {
      rco: {
        Job_Title: "",
        Key_Skills: "",
      },
      match: null,
    },
    AppliedJob: {
      jobID: "",
      applicantEmail: "",
      applicantPhone: null,
    },

    cardcondition: false,
    loading: false,
    loadingjobs: false,
    search: "",
    dialog: "",
    Valid: false,
    AlertKey: "",
    JobLevel: "",
    snackbar1: false,
    snackbar2: false,
    //------------------------ Phone Section ------------------------\\
    phoneNumber: null,
    hasLoaderActive: false,
    hasErrorActive: false,
    //##############################################################################\\
    //------------------------ Validation Rules ------------------------\\
    phoneRules: [(v) => !!v || "Field is required"],
    emailRules: [(v) => !!v || "E-mail is required", (v) => /.+@.+\..+/.test(v) || "E-mail must be valid"],
  }),
  computed: {
    ...mapGetters("auth", ["loggedIn"]),
    ...mapGetters("auth", ["user_id"]),
    //Search bar
    filteredJobs: function() {
      for (let i = 0; i < 9; i++) {
        return this.jobs.filter((job) => {
          return job.rco.Job_Title.toLowerCase().match(this.search.toLowerCase());
        });
      }
    },
  },
  methods: {
    GetRecommended() {
      this.loadingjobs = true;
      this.overlay = true;
      ApiService.get(`http://localhost:3000/home/${this.user_id}`)
        .then((r) => {
          if (r.status == 200) {
            this.jobs = r.data;
            this.loadingjobs = false;
            this.overlay = false;
            this.getUser();
          } else {
            console.log(r);
            this.overlay = false;
          }
          console.log(this.jobs);
        })
        .catch((error) => {
          console.log(error);
          this.overlay = false;
        });
    },

    GetJob(id) {
      this.loading = true;
      console.log(id);
      ApiService.get(`http://localhost:3000/listjob/${this.user_id}/${id}`).then((r) => {
        console.log(r);
        if (r.status == 200) {
          this.oneJob = r.data;
          this.oneJob.skills = r.data.rco.Key_Skills.split("|");
          console.log(this.oneJob);
          this.loading = false;
        } else {
          console.log(r);
        }
      });
    },
    ApplyJob() {
      this.loading = true;
      this.AppliedJob.jobID = this.oneJob._id;
      ApiService.post(`http://localhost:3000/users/${this.user_id}`, this.AppliedJob).then((r) => {
        if (r.status == 204) {
          this.loading = false;
          this.dialog = false;
          this.snackbar1 = true;
          console.log(r);
        } else {
          this.loading = false;
          this.snackbar2 = true;
          console.log(r);
        }
      });
    },
    getUser() {
      this.overlay = true;
      ApiService.get(`http://localhost:3000/users/${this.user_id}`).then((r) => {
        if (r.status == 200) {
          this.user = r.data;
          console.log(this.user);
          this.overlay = false;
        } else {
          console.log(r);
          this.overlay = false;
        }
      });
    },
    onUpdate(payload) {
      if (payload.isValid) {
        this.Valid = true;
        console.log(payload);
        this.AppliedJob.applicantPhone = payload.formattedNumber;
        console.log(this.AppliedJob.applicantPhone);
        // this.hasLoaderActive=false;
        // this.hasErrorActive= false;
      } else {
        this.Valid = false;
        // this.hasLoaderActive=true;
        // this.hasErrorActive= true;
      }
    },
  },
};
</script>

<style scoped>
.div {
  background-color: #e0e0e0;
  width: 100%;
}
.avatar {
  border: 1px solid #f57c00 !important;
}

.titles {
  font-family: "Montserrat";
  font-size: 18px;
  font-weight: bold;
}
</style>
