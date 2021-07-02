<template>
  <v-col cols="5">
    <v-row>
      <v-tabs v-model="tabs" centered grow color="orange darken-2">
        <v-tab>Recent Applications</v-tab>
        <v-tab>Closed</v-tab>
      </v-tabs>
    </v-row>
    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <v-row justify="center">
          <!-- @click="GetAppliedJob(application.jobID)" -->
          <v-col cols="12">
            <v-card v-for="application in applications" :key="application._id" class="mb-5">
              <v-progress-linear v-if='(application.applicantionStatus == "no status")' value="100" height="30" color="primary">
                <v-spacer></v-spacer>
                <v-btn class="mr-2" icon>
                  <v-icon @click="dialog = true;appID=application._id" color="white">mdi-dots-horizontal</v-icon>
                </v-btn>
              </v-progress-linear>
              <v-progress-linear v-if='(application.applicantionStatus == "warning")' value="100" height="30" color="warning">
                <v-spacer></v-spacer>
                <v-btn class="mr-2" icon>
                  <v-icon @click="dialog = true;appID=application._id" color="white">mdi-dots-horizontal</v-icon>
                </v-btn>
              </v-progress-linear>
              <v-progress-linear v-if='(application.applicantionStatus == "error")' value="100" height="30" color="error">
                <v-spacer></v-spacer>
                <v-btn class="mr-2" icon>
                  <v-icon @click="dialog = true;appID=application._id" color="white">mdi-dots-horizontal</v-icon>
                </v-btn>
              </v-progress-linear>
              <v-progress-linear v-if='(application.applicantionStatus == "success")' value="100" height="30" color="success">
                <v-spacer></v-spacer>
                <v-btn class="mr-2" icon>
                  <v-icon @click="dialog = true;appID=application._id" color="white">mdi-dots-horizontal</v-icon>
                </v-btn>
              </v-progress-linear>

              <v-dialog v-model="dialog" max-width="600">
                <v-card class="pa-5">
                  <v-card-title>Are you sure you want to unapply?</v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn outlined color="orange darken-2" @click="dialog = false"> Cancel </v-btn>
                    <v-btn
                      color="orange darken-2"
                      dark
                      @click="
                        dialog = false;
                        CancelApply(appID);
                      "
                    >
                      Unapply
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <v-row>
                <v-col cols="6">
                  <v-card-title class="ml-4" v-if="application.jobObject">{{ application.jobObject.title }}</v-card-title>
                  <v-card-title class="ml-4" v-if="!application.jobObject">Job Title</v-card-title>
                  <v-card-subtitle>
                    <v-list>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title v-if="application.jobObject">{{ application.jobObject.company }}</v-list-item-title>
                          <v-list-item-title v-if="!application.jobObject">Company Name</v-list-item-title>
                          <v-list-item-subtitle>Egypt - Cairo</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                    <v-list max-width="600px" dense>
                      <v-list-item>
                        <v-list-item-title>Date Applied :</v-list-item-title>
                        <v-list-item-subtitle v-if="application.date">{{ application.date.substring(0, 10) }}</v-list-item-subtitle>
                        <v-list-item-subtitle v-if="!application.date">04/08/2021</v-list-item-subtitle>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>Viewed Applications :</v-list-item-title>
                        <v-list-item-subtitle>151</v-list-item-subtitle>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>CV Relevancy :</v-list-item-title>
                        <v-list-item-subtitle>0/5</v-list-item-subtitle>
                      </v-list-item>
                    </v-list>
                  </v-card-subtitle>
                </v-col>
                <v-col cols="6" align="center" align-self="center">
                  <v-icon size="100px" v-if="application.applicantStatus == 'no status'" color="primary">mdi-progress-upload</v-icon>
                  <v-icon size="100px" v-if="application.applicantStatus == 'In Review'" color="warning">mdi-progress-clock</v-icon>
                  <v-icon size="100px" v-if="application.applicantStatus == 'Rejected'" color="error">mdi-close-circle-outline</v-icon>
                  <v-icon size="100px" v-if="application.applicantStatus == 'Shortlisted'" color="success">mdi-check-circle-outline</v-icon>
                  <v-card-text>{{ (application.applicantStatus === 'no status' ) ? 'Pending' : application.applicantStatus }}</v-card-text>
                </v-col>
              </v-row>
            </v-card>
            <v-card>
              <v-progress-linear value="100" height="30" color="primary">
                <v-spacer></v-spacer>
                <v-btn class="mr-2" icon>
                  <v-icon @click="dialog = true" color="white">mdi-dots-horizontal</v-icon>
                </v-btn>
              </v-progress-linear>

              <v-dialog v-model="dialog" max-width="600">
                <v-card class="pa-5">
                  <v-card-title>Are you sure you want to unapply?</v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn outlined color="orange darken-2" @click="dialog = false"> Cancel </v-btn>
                    <v-btn dark color="orange darken-2" @click="dialog = false"> Unapply </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <v-row>
                <v-col cols="6">
                  <v-card-title class="ml-4">Job Title</v-card-title>
                  <v-card-subtitle>
                    <v-list>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title>Company Name</v-list-item-title>
                          <v-list-item-subtitle>Egypt - Cairo</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                    <v-list max-width="350px" dense>
                      <v-list-item>
                        <v-list-item-title>Date Applied :</v-list-item-title>
                        <v-list-item-subtitle>04/08/2021</v-list-item-subtitle>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>Viewed Applications :</v-list-item-title>
                        <v-list-item-subtitle>151</v-list-item-subtitle>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>CV Relevancy :</v-list-item-title>
                        <v-list-item-subtitle>0/5</v-list-item-subtitle>
                      </v-list-item>
                    </v-list>
                  </v-card-subtitle>
                </v-col>
                <v-col cols="6" align="center" align-self="center">
                  <v-icon size="100px" color="primary">mdi-progress-upload</v-icon>
                  <v-card-text>Pending</v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12">
            <v-card>
              <v-progress-linear value="100" height="25" color="warning">
                <v-spacer></v-spacer>
                <v-btn class="mr-2" icon>
                  <v-icon color="white">mdi-dots-horizontal</v-icon>
                </v-btn>
              </v-progress-linear>
              <v-row>
                <v-col cols="6">
                  <v-card-title class="ml-4">Job Title</v-card-title>
                  <v-card-subtitle>
                    <v-list>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title>Company Name</v-list-item-title>
                          <v-list-item-subtitle>Egypt - Cairo</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                    <v-list max-width="350px" dense>
                      <v-list-item>
                        <v-list-item-title>Date Applied :</v-list-item-title>
                        <v-list-item-subtitle>04/08/2021</v-list-item-subtitle>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>Viewed Applications :</v-list-item-title>
                        <v-list-item-subtitle>151</v-list-item-subtitle>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>CV Relevancy :</v-list-item-title>
                        <v-list-item-subtitle>0/5</v-list-item-subtitle>
                      </v-list-item>
                    </v-list>
                  </v-card-subtitle>
                </v-col>
                <v-col cols="6" align="center" align-self="center">
                  <v-icon size="100px" color="warning">mdi-progress-clock</v-icon>
                  <v-card-text>In Review</v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12">
            <v-card>
              <v-progress-linear value="100" height="25" color="error">
                <v-spacer></v-spacer>
                <v-btn class="mr-2" icon>
                  <v-icon color="white">mdi-dots-horizontal</v-icon>
                </v-btn>
              </v-progress-linear>
              <v-row>
                <v-col cols="6">
                  <v-card-title class="ml-4">Job Title</v-card-title>
                  <v-card-subtitle>
                    <v-list>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title>Company Name</v-list-item-title>
                          <v-list-item-subtitle>Egypt - Cairo</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                    <v-list max-width="350px" dense>
                      <v-list-item>
                        <v-list-item-title>Date Applied :</v-list-item-title>
                        <v-list-item-subtitle>04/08/2021</v-list-item-subtitle>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>Viewed Applications :</v-list-item-title>
                        <v-list-item-subtitle>151</v-list-item-subtitle>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>CV Relevancy :</v-list-item-title>
                        <v-list-item-subtitle>0/5</v-list-item-subtitle>
                      </v-list-item>
                    </v-list>
                  </v-card-subtitle>
                </v-col>
                <v-col cols="6" align="center" align-self="center">
                  <v-icon size="100px" color="error">mdi-close-circle-outline</v-icon>
                  <v-card-text>Rejected</v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12">
            <v-card>
              <v-progress-linear value="100" height="25" color="success">
                <v-spacer></v-spacer>
                <v-btn class="mr-2" icon>
                  <v-icon color="white">mdi-dots-horizontal</v-icon>
                </v-btn>
              </v-progress-linear>
              <v-row>
                <v-col cols="6">
                  <v-card-title class="ml-4">Job Title</v-card-title>
                  <v-card-subtitle>
                    <v-list>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title>Company Name</v-list-item-title>
                          <v-list-item-subtitle>Egypt - Cairo</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                    <v-list max-width="350px" dense>
                      <v-list-item>
                        <v-list-item-title>Date Applied :</v-list-item-title>
                        <v-list-item-subtitle>04/08/2021</v-list-item-subtitle>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>Viewed Applications :</v-list-item-title>
                        <v-list-item-subtitle>151</v-list-item-subtitle>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>CV Relevancy :</v-list-item-title>
                        <v-list-item-subtitle>0/5</v-list-item-subtitle>
                      </v-list-item>
                    </v-list>
                  </v-card-subtitle>
                </v-col>
                <v-col cols="6" align="center" align-self="center">
                  <v-icon size="100px" color="success">mdi-check-circle-outline</v-icon>
                  <v-card-text>Shortlisted</v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-tab-item>
      <v-tab-item>
        <p>lol</p>
      </v-tab-item>
    </v-tabs-items>
    <v-overlay :value="overlay" opacity="0.95" color="#01579B" >
        <semipolar-spinner
          class="justify-center"
          :animation-duration="1500"
          :size="120"
          color="#FF9800"
        />
    </v-overlay>
  <v-snackbar v-model="snackbar1" timeout = "3000" color="success" outlined dark><v-icon class="mr-2">mdi-checkbox-marked-circle</v-icon> Your Application Deleted Successfully </v-snackbar>
  </v-col>
  
</template>

<script>
import ApiService from "../../services/api.service";
import { mapGetters, mapActions, mapMutations } from "vuex";
import { FingerprintSpinner,SemipolarSpinner } from 'epic-spinners'
export default {
  components:{
      FingerprintSpinner,
      SemipolarSpinner
  },
  data() {
    return {
      dialog: false,
      tabs: null,
      overlay: true,
      appID:"",
      applications: [],
      oneApplication: {},
      oneJob: {},
      statusvalue: "",
      snackbar1:false,
    };
  },
  mounted() {
    this.GetApplications();
  },
  computed: {
    ...mapGetters("auth", ["user_id"]),
  },
  methods: {
    GetApplications() {
      this.overlay=true;
      ApiService.get(`http://localhost:3000/jobApplications/Applications/${this.user_id}`).then((r) => {
        if (r.status == 200) {
          this.applications = r.data;
          this.overlay=false;
        } else {
          console.log(r);
        }
        console.log(this.applications);
      });
    },
    GetApplication(id, Jobid) {
      ApiService.get(`http://localhost:3000/jobApplications/listApplications/${id}`).then((r) => {
        if (r.status == 200) {
          this.oneApplication = r.data;
          GetAppliedJob(Jobid);
        } else {
          console.log(r);
        }
      });
    },
    GetAppliedJob(id) {
      ApiService.get(`http://localhost:3000/jobs/list/${id}`).then((r) => {
        if (r.status == 200) {
          this.oneJob = r.data;
          console.log(this.oneJob);
        } else {
          console.log(r);
        }
      });
    },
    CancelApply(id) {
      console.log(this.appID);
      this.overlay=true;
      ApiService.delete(`http://localhost:3000/jobApplications/deleteApplication/${id}`).then((r) => {
        if (r.status == 204) {
          console.log("deleted");
          this.snackbar1=true;
          this.GetApplications();
          this.overlay=false;
        } else {
          console.log(r);
        }
      });
    },
  },
};
</script>
