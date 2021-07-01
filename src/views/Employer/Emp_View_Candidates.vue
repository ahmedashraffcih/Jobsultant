<template>
  <div class="div">
    <v-row justify="center">
      <!-- PAGE HEADER -->
      <v-col class="form-header rounded-lg" cols="6">
        <h1 class="font-weight-light">
          Applicants for
          <span class="font-weight-regular">{{ oneJob.title }}</span> position
        </h1>
        <v-row>
          <v-col cols="7">
            <p class="text-h6 font-weight-light" v-if="Total">{{ Total }} applicants!</p>
            <p class="text-h6 font-weight-light" v-if="!Total">No applicants Yet!</p>
          </v-col>
          <v-col cols="3">
            <v-btn class="ml-15" dark color="#01579B" to="/Employer/Emp_View_Shortlisted"> View Shortlisted Candidates </v-btn>
          </v-col>
        </v-row>

        <!-- Percentage Card -->
        <v-col class="jobs-header rounded-lg">
          <v-row>
            <v-skeleton-loader v-if="skeletonloading == true" :loading="skeletonloading" width="300" class="ml-4" type="article, actions">
            </v-skeleton-loader>
            <v-col cols="4" v-for="applicant in Applications" :key="applicant._id">
              <v-card
                class="mb-3"
                @click="
                  cardcondition = true;
                  GetDetails(applicant._id);
                  
                "
              >
                <v-card-title>
                  <a class="a" href="#">{{ username }}</a>
                </v-card-title>

                <v-card-subtitle class="text-subtitle-1">{{ workExp }}</v-card-subtitle>

                <v-row justify="center">
                  <v-col cols="6">
                    <vue-ellipse-progress :progress="applicant.percentage_Of_Success" :size="120">
                      <span slot="legend-value"> %</span>
                      <span slot="legend-caption">Match</span>
                    </vue-ellipse-progress>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-col>

      <!-- PROFILE DATA -->
      <v-col class="rounded-lg" cols="3" v-if="cardcondition">
        <v-card>
          <v-progress-linear absolute v-if="loadingProfile" color="orange darken-2" indeterminate> </v-progress-linear>
          <v-row>
            <v-col cols="8">
              <v-card-title>
                <a class="a" href="#">{{ username }} Profile</a>
              </v-card-title>
              <v-card-subtitle class="text-subtitle-1">{{ workExp }}</v-card-subtitle>
            </v-col>

            <v-col>
              <v-list-item-avatar class="avatar" color="orange" size="80">
                <v-img :src="Details.image"></v-img>
              </v-list-item-avatar>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-list>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="title">Location</v-list-item-title>
                <v-list-item-subtitle style="color: #0d47a1" class="subtitle-1">{{ Details.residence_Location }}</v-list-item-subtitle>
                <v-list-item-title class="title mt-5">Phone Number</v-list-item-title>
                <v-list-item-subtitle style="color: #0d47a1" class="subtitle-1">{{ Details.mobile_Phone }}</v-list-item-subtitle>
                <v-list-item-title class="title mt-5">Skills</v-list-item-title>
                <ul style="color: #0d47a1">
                  <li v-for="skill in Details.skills">{{ skill }}</li>
                </ul>
                <v-list-item-title class="title mt-5">Job Title</v-list-item-title>
                <v-list-item-subtitle style="color: #0d47a1" class="subtitle-1">{{ Details.job_Title }}</v-list-item-subtitle>
                <v-list-item-title class="title mt-5">Career Level</v-list-item-title>
                <v-list-item-subtitle style="color: #0d47a1" class="subtitle-1">{{ Details.job_Level }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-row class="ml-1" justify="start">
              <v-col cols="3">
                <v-btn 
                    :loading="loadingShortlist" 
                    dark 
                    color="#01579B" 
                    @click="
                        Shortlist();
                        ChangeStatus();
                    "
                > 
                    Shortlist 
                </v-btn>
              </v-col>

              <v-col class="ml-5" cols="5">
                <v-btn 
                    :loading="loadingReject"  
                    dark 
                    color="orange darken-2" 
                    @click="
                      Reject();
                      ChangeStatus();
                    "
                > 
                    Reject 
                </v-btn>
              </v-col>
              <!-- last -->
            </v-row>
          </v-list>
        </v-card>
      </v-col>

      <v-snackbar v-model="Listedsnackbar" timeout="2000" color="success" outlined dark>
           Applicant Shortlisted 
      </v-snackbar>
      <v-snackbar v-model="Rejectedsnackbar" timeout="2000" color="error" outlined dark>
           Applicant Rejected 
      </v-snackbar>
      <v-overlay :value="overlay" opacity="0.9">
        <fingerprint-spinner class="justify-center" :animation-duration="1500" :size="120" color="#FF9800" />
      </v-overlay>
    </v-row>
  </div>
</template>
<script>
import ApiService from "../../services/api.service";
import { mapGetters, mapActions, mapMutations } from "vuex";
import { FingerprintSpinner } from "epic-spinners";
export default {
  data() {
    return {
      ApplicantsCount: 150,
      JobTitle: "Junior .NET Developer",
      //userdata
      username: "Ahmed Ashraf",
      workExp: ".Net developer at ITWORXS",
      Details: {},
      JobID: "",
      ApplyID: "",
      Applications: {},
      oneApplication: {},
      Total: "",
      //Jobs
      Jobs: {},
      oneJob: {},
      //action buttons
      loading: false,
      loading2: false,
      loader: null,
      // Loaders
      skeletonloading: true,
      skeletonloaded: false,
      overlay: true,
      cardcondition: false,
      loadingProfile: false,
      loadingShortlist: false,
      loadingReject: false,
      //snackbars
      snackbar1: false,
      snackbar2: false,
      Listedsnackbar: false,
      Rejectedsnackbar: false,
    };
  },
  components: {
    FingerprintSpinner,
  },
  mounted() {
    this.JobID = this.$route.params.id;
    this.GetJob();
    //console.log(this.JobID);
  },
  computed: {
    ...mapGetters("auth", ["loggedIn"]),
    ...mapGetters("auth", ["user_id"]),
    requirmentsPercent() {
      return (this.requirmentsDone * 100) / 100;
    },
  },
  methods: {
    GetJob() {
      console.log("Accessed get job");
      ApiService.get(`http://localhost:3000/jobs/listJob/${this.JobID}`).then((r) => {
        if (r.status == 200) {
          this.oneJob = r.data;
          console.log("Get job success");
          this.GetApplication();
          this.GetTotalApplication();
        } else {
          console.log(r);
        }
      });
    },
    GetApplication() {
      console.log("Accessed get application");
      ApiService.get(`http://localhost:3000/jobApplications/${this.JobID}`).then((r) => {
        if (r.status == 200) {
          this.Applications = r.data.Applications;
          (this.skeletonloaded = true), (this.skeletonloading = false);
          this.overlay = false;
          console.log("Get application success");
          //console.log(this.oneJob);
        } else {
          console.log(r);
        }
      });
      return this.Application;
    },
    GetOneApplication(id) {
      ApiService.get(`http://localhost:3000/jobApplications/listApplications/${id}`).then((r) => {
        if (r.status == 200) {
          this.oneApplication = r.data;
          console.log("get one appllication true");
          console.log("This is one application");
          console.log(this.oneApplication);
        } else {
          console.log(r);
        }
      });
      return this.oneApplication;
    },
    GetTotalApplication() {
      console.log("Accessed Total");
      ApiService.get(`http://localhost:3000/jobApplications/${this.JobID}`).then((r) => {
        if (r.status == 200) {
          this.Total = r.data.Total_Applications;
          (this.skeletonloaded = true), (this.skeletonloading = false);
          this.overlay = false;
          console.log("Get Total success");
          //console.log(this.oneJob);
        } else {
          console.log(r);
        }
      });
      return this.Total;
    },
    GetDetails(id) {
      this.loadingProfile = true;
      console.log("Accessed get details");
      ApiService.get(`http://localhost:3000/jobApplications/details/${id}`).then((r) => {
        if (r.status == 200) {
          this.Details = r.data;
          this.loadingProfile = false;
          this.GetOneApplication(id);
          console.log("Get details success");
          console.log(this.Details);
          //console.log(this.oneJob);
        } else {
          console.log(r);
        }
      });
      return this.Details;
    },
    Shortlist() {
      this.oneApplication.applicantStatus = "Shortlisted";
      this.oneApplication.applicantionStatus = "success";
    },
    Reject() {
      this.oneApplication.applicantStatus = "Rejected";
      this.oneApplication.applicantionStatus = "Error";
    },
    
    ChangeStatus() {
      console.log("Accessed change status");
      if (this.oneApplication.applicantStatus == "Shortlisted") {
        this.loadingShortlist = true;
        ApiService.put(`http://localhost:3000/jobApplications/listApplications/${this.oneApplication._id}`, this.oneApplication).then((r) => {
          if (r.status == 204) {
            this.loadingShortlist = false;
            this.Listedsnackbar = true;
            console.log("Shortlisted Successfully");
            console.log(r);
          } else {
            console.log(r);
            console.log("API error");
          }
        });
      } else if(this.oneApplication.applicantStatus == "Rejected") {
        this.loadingReject = true;
        ApiService.put(`http://localhost:3000/jobApplications/listApplications/${this.oneApplication._id}`, this.oneApplication).then((r) => {
          if (r.status == 204) {
            this.loadingReject = false;
            this.Rejectedsnackbar = true;
            console.log("Rejected Successfully");
            console.log(r);
          } else {
            console.log(r);
            console.log("API error");
          }
        });
      }
    },
  },
};
</script>

<style scoped>
.form-header {
  padding: 10px;
  padding-left: 20px;
  margin-top: 10px;
  margin-bottom: 15px;
  background-color: white;
  height: min-content;
}
.jobs-header {
  padding-left: 20px;
  margin-bottom: 15px;
  background-color: #01579b;
}
.a {
  text-decoration: none;
  color: black;
}
.div {
  background-color: #e0e0e0;
  width: 100%;
  height: 100vh;
}
</style>
