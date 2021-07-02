<template>
  <v-row class="grey lighten-3 backimg" justify="center">
    <v-col cols="8">
      <div class="form-header rounded-lg">
        <h1 class="titles1 ml-5">Manage Jobs!</h1>
        <p class="light-blue--text text--darken-4 ml-5">
          Adminstrate your posted Jobs!
        </p>
      </div>

      <div class="form-header rounded-lg">
        <v-row>
          <v-col md="10">
            <h2 class="titles ml-5">Latest Posted Jobs</h2>
          </v-col>
          <v-col>
            <v-btn rounded right color="orange darken-2" dark to="/Employer/Emp_Add_Job">
              Add New Job
            </v-btn>
          </v-col>
        </v-row>
      </div>

      <div class="posts-header rounded-lg fluid">
        <v-tabs v-model="tabs" grow color="orange darken-2" class="rounded-lg pt-5 px-10" hide-slider>
          <v-tab>Active Jobs</v-tab>
          <v-tab>Archived Jobs</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tabs" class="taps-styling">
          <v-tab-item class="margin-item">
            <v-skeleton-loader v-if="loading == true" :loading="loading" width="562" class="mb-5 ml-10" type="article, actions"> </v-skeleton-loader>
            <v-row class="overflow-hidden mx-7 mb-7" justify="center" fluid align="center">
              <v-col cols="6" v-for="job in Jobs" :key="job._id" fluid >
                <v-card elevation="2" class="px-4" v-show="loaded">
                  <v-list-item three-line>
                    <v-list-item-content class="content-height">
                      <v-row justify="space-between">
                        <v-col class="text-subtitle-1 font-weight-medium font-italic">
                          {{ job.company }}
                        </v-col>
                        <v-col cols="auto">
                          <v-chip v-if="job.type == 'Full-Time'" color="green darken-1" outlined class="font-weight-medium ml-14">
                            {{ job.type }}
                          </v-chip>
                          <v-chip v-if="job.type == 'Part-Time'" color="primary" outlined class="font-weight-medium ml-14">
                            {{ job.type }}
                          </v-chip>
                          <v-chip v-if="job.type == 'Internship'" color="deep-orange" outlined class="font-weight-medium ml-14">
                            {{ job.type }}
                          </v-chip>
                        </v-col>
                      </v-row>
                      <v-list-item-title class="titles mb-1 font-weight-normal"> {{ job.career_Level }} {{ job.title }} </v-list-item-title>
                      <v-list-item-subtitle class="text-subtitle-1 mb-2">{{ job.description }}</v-list-item-subtitle>
                      <v-list-item-subtitle>
                        <v-chip color="#01579B" text-color="white" class="mr-2" small v-for="i,skill in job.skills.split(',')" :key='i' >{{ i }} </v-chip>
                      </v-list-item-subtitle>
                      <v-list-item-subtitle class="text-subtitle-2 success--text" v-if="job.total_Applications">
                        {{ job.total_Applications }} Applied
                        <v-list-item-icon>
                          <v-icon dense left color="success">mdi-check-bold</v-icon>
                        </v-list-item-icon>
                      </v-list-item-subtitle>
                      <v-list-item-subtitle class="text-subtitle-2 success--text" v-if="!job.total_Applications">
                        0 Applied
                        <v-list-item-icon>
                          <v-icon dense left color="success">mdi-check-bold</v-icon>
                        </v-list-item-icon>
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-card-actions>
                    <v-row class="pb-5" justify="space-around">
                      <!-- VIEW BUTTON HERE -->
                      <v-btn
                        small
                        color="success"
                        class=" d-none d-md-flex"
                        dark
                        :to="`/Employer/Emp_View_Candidates/` + job._id"
                      >
                        View
                        <v-icon small dark right>
                          mdi-account-multiple
                        </v-icon>
                      </v-btn>
                      <!-- VIEW  SMALL BUTTON HERE -->
                      <v-btn icon class=" d-md-none" color="success" :to="`/Employer/Emp_View_Candidates/` + job._id">
                        <v-icon dark right>
                          mdi-account-multiple
                        </v-icon>
                      </v-btn>

                      <v-btn
                        small
                        color="light-blue darken-4"
                        class="d-none d-md-flex"
                        dark
                        @click="
                          EditDialog = true;
                          GetJob(job._id);
                        "
                      >
                        Edit
                        <v-icon small dark right>
                          mdi-pencil
                        </v-icon>
                      </v-btn>
                      <!-- EDIT SMALL BUTTON HERE -->
                      <v-btn
                        icon
                        class=" d-md-none"
                        color="light-blue darken-4"
                        @click="
                          EditDialog = true;
                          GetJob(job._id);
                        "
                      >
                        <v-icon dark right>
                          mdi-pencil
                        </v-icon>
                      </v-btn>
                      <!-- Archive BUTTON HERE -->

                      <v-btn small class="d-none d-md-flex" color="orange darken-2" dark>
                        Archive
                        <v-icon small dark right>
                          mdi-close-octagon
                        </v-icon>
                      </v-btn>
                      <!-- Archive SMALL BUTTON HERE -->
                      <v-btn icon class=" d-md-none" color="orange darken-2">
                        <v-icon dark right>
                          mdi-close-octagon
                        </v-icon>
                      </v-btn>
                      <!-- Archive BUTTON  ENDS HERE -->
                      <v-btn
                        small
                        color="red darken-2"
                        class="d-none d-md-flex"
                        dark
                        @click="
                          dialog = true;
                          oneJobid = job._id;
                        "
                      >
                        Delete
                        <v-icon small dark right>
                          mdi-delete-sweep
                        </v-icon>
                      </v-btn>
                      <!-- DELETE SMALL BUTTON HERE -->
                      <v-btn
                        icon
                        class="d-md-none"
                        color="red darken-2"
                        @click="
                          dialog = true;
                          oneJobid = job._id;
                        "
                      >
                        <v-icon dark right>
                          mdi-delete-sweep
                        </v-icon>
                      </v-btn>
                    </v-row>
                  </v-card-actions>
                  <!-- DELETE DIALOGE HERE -->
                  <v-dialog v-model="dialog" max-width="500" persistent :retain-focus="false">
                    <v-card class="pa-5">
                      <v-card-title>Permenantly delete job post?</v-card-title>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn outlined color="orange darken-2" @click="dialog = false"> Cancel </v-btn>
                        <v-btn color="orange darken-2" dark @click="DeleteJob(oneJobid)" :loading="Deleteloading">
                          Delete
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <!-- DELETE DIALOGE ENDS HERE -->
                  <!-- EDIT DIALOG STARTS HERE -->
                  <v-dialog v-model="EditDialog" max-width="580">
                    <v-card>
                      <v-toolbar color="light-blue darken-4" dark>
                        <v-toolbar-title class="titles">Edit Your Job Post</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon dark @click="EditDialog = false">
                          <v-icon>mdi-close</v-icon>
                        </v-btn>
                      </v-toolbar>

                      <v-card-text>
                        <v-form v-model="EditFlag">
                          <v-row justify="center" class="mt-4">
                            <v-col cols="3">
                              <v-card-text>Job Title</v-card-text>
                            </v-col>
                            <v-col cols="9">
                              <v-text-field v-model="oneJob.title" dense outlined label="Job title" :rules="TitleRules" clearable required>
                              </v-text-field>
                            </v-col>
                          </v-row>

                          <v-row justify="center" class="mb-3">
                            <v-col cols="3">
                              <v-card-text>Job Type</v-card-text>
                            </v-col>
                            <v-col cols="9">
                              <v-select v-model="oneJob.type" :items="types" label="Job Type" required outlined dense></v-select>
                            </v-col>
                          </v-row>

                          <v-row>
                            <v-col cols="3">
                              <v-card-text>Career Level</v-card-text>
                            </v-col>
                            <v-col cols="9">
                              <v-select v-model="oneJob.career_Level" :items="levels" label="Career Level" required outlined dense></v-select>
                            </v-col>
                          </v-row>

                          <v-row justify="center" class="mb-3">
                            <v-col cols="3">
                              <v-card-text>Skills</v-card-text>
                            </v-col>
                            <v-col cols="9">
                              <v-combobox
                                v-model="oneJob.skills"
                                :items="skills"
                                :search-input.sync="search"
                                :rules="skillsRulles"
                                hide-selected
                                hint="Enter keywords including any related job titles, technologies, or keywords the candidate should have in his CV."
                                persistent-hint
                                label="Skills Requiered"
                                multiple
                                outlined
                                small-chips
                              >
                                <template v-slot:no-data>
                                  <v-list-item>
                                    <v-list-item-content>
                                      <v-list-item-title>
                                        No results matching "<strong>{{ search }}</strong
                                        >". Press <kbd>enter</kbd> to create a new one
                                      </v-list-item-title>
                                    </v-list-item-content>
                                  </v-list-item>
                                </template>
                              </v-combobox>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col cols="3">
                              <v-card-text>Job Description</v-card-text>
                            </v-col>
                            <v-col cols="9">
                              <v-textarea
                                v-model="oneJob.description"
                                label="Job Description"
                                auto-grow
                                rows="2"
                                :rules="fieldRules"
                                :counter="650"
                                outlined
                                dense
                              >
                              </v-textarea>
                            </v-col>
                          </v-row>
                        </v-form>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color=" red darken-1" text @click="EditDialog = false">
                          Dismiss
                        </v-btn>
                        <v-btn color="green darken-1" text v-on:click="EditJob()" :loading="Editloading">
                          Update Job
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <!-- EDIT DIALOG ENDS HERE -->
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>

          <v-tab-item>
            <!-- Archieved Posts Go Here -->
            <p>lol</p>
          </v-tab-item>
        </v-tabs-items>
      </div>
      <v-overlay :value="overlay" opacity="0.9">
        <fingerprint-spinner class="justify-center" :animation-duration="1500" :size="120" color="#FF9800" />
      </v-overlay>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import { FingerprintSpinner } from "epic-spinners";
import ApiService from "../../services/api.service";
export default {
  components: {
    FingerprintSpinner,
  },
  data() {
    return {
      types: ["Full-Time", "Part-Time", "Internship", "Freelance"],
      levels: ["Senior", "Junior", "Entry level"],
      skills: ["Gaming", "Programming", "Vue", "Vuetify"],
      search: null,
      tabs: null,
      Jobs: {},
      oneJob: {},
      Application: {},
      overlay: true,
      oneJobid: "",
      // Rules
      skillsRulles: [(v) => v.length >= 3 || "Minimum of 3 skills"],
      fieldRules: [(v) => !!v || "Field is required"],
      TitleRules: [(v) => !!v || "Field is required", (v) => (!!v && isNaN(v)) || "Can't include numbers"],

      // Loaders
      loading: true,
      loaded: false,
      Deleteloading: false,
      Editloading: false,
      overlay: true,

      // Dialogs
      dialog: false,
      EditDialog: false,

      // Flags
      EditFlag: false,
    };
  },
  components: {
    FingerprintSpinner,
  },
  mounted() {
    this.GetJobs();
  },

  computed: {
    //Get states from store
    ...mapGetters("auth", ["accessToken"]),
    ...mapGetters("auth", ["user_id"]),
    // ...mapActions(['DISPLAY_SEARCH'])
  },
  methods: {
    GetJobs() {
      this.overlay = true;
      ApiService.get(`http://localhost:3000/jobs/listAllJobs/${this.user_id}`).then((r) => {
        if (r.status == 200) {
          this.Jobs = r.data;
          console.log(this.Jobs);
          this.overlay = false;
          (this.loaded = true), (this.loading = false);
          this.overlay = false;
        } else {
          console.log(r);
        }
      });
    },

    GetJob(id) {
      this.overlay = true;
      ApiService.get(`http://localhost:3000/jobs/listJob/${id}`).then((r) => {
        if (r.status == 200) {
          this.oneJob = r.data;
          this.oneJob.skills=r.data.skills.split(',');
          console.log(this.oneJob);
          this.overlay = false;
        } else {
          console.log(r);
        }
      });
    },
  
    //GetApplications(id) {
    //  ApiService.get(`http://localhost:3000/jobApplications/${id}`).then((r) => {
    //    if (r.status == 200) {
    //      this.Application = r.data.Total_Applications;
    //      console.log(this.Jobs._id);
    //    } else {
    //      console.log(r);
    //    }
    //  });
    //  return this.Application;
    //},

    EditJob() {
      this.Editloading = true;
      ApiService.put(`http://localhost:3000/jobs/EditJob/${this.oneJob._id}`, this.oneJob).then((r) => {
        if (r.status == 204) {
          this.Editloading = false;
          this.EditDialog = false;
          this.GetJobs();
          console.log(r);
        } else {
          console.log(r);
        }
      });
    },

    DeleteJob(id) {
      this.Deleteloading = true;
      ApiService.delete(`http://localhost:3000/jobs/delete/${id}`).then((r) => {
        console.log(r);
        if (r.status == 204) {
          this.Deleteloading = false;
          this.dialog = false;
          this.GetJobs();
          console.log(r);
        } else {
          console.log(r);
          this.Deleteloading = false;
        }
      });
    },

    
  },
};
</script>

<style scoped>
.titles1{
  font-family: "Montserrat-black"; 
  font-size: 25px;
  font-weight: bold;
}
.titles{
  font-family: "Montserrat"; 
  font-size: 20px; 
  font-weight: bold;
}
.form-header {
  padding: 10px;
  padding-left: 20px;
  margin-bottom: 15px;
  background-color: white;
}
.posts-header {
  background-color: #01579b;
  overflow: hidden;
}
.taps-styling {
  background-color: #01579b;
  overflow: hidden;
}

.margin-item {
  margin-top: 20px;
}
.content-height {
  height: 210px;
}
</style>
