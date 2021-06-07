<template>
  <v-row class="grey lighten-3" justify="center">
    <v-col cols="8">
      <div class="form-header rounded-lg">
        <h1 class="ml-5">Manage Jobs!</h1>
        <p class="light-blue--text text--darken-4 ml-5">
          Adminstrate your posted Jobs!
        </p>
      </div>

      <div class="form-header rounded-lg">
        <v-row>
          <v-col md="10">
            <h2 class="ml-5">Latest Posted Jobs</h2>
          </v-col>

          <v-col>
            <v-btn rounded right color="orange darken-2" dark to="/Employer/Emp_Add_Job">
              Add New Job
            </v-btn>
          </v-col>
        </v-row>
      </div>

      <div class="posts-header rounded-lg">
        <v-tabs v-model="tabs" grow color="orange darken-2" class="rounded-lg">
          <v-tab>Active Jobs</v-tab>
          <v-tab>Archived Jobs</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tabs" class="taps-styling">
          <v-tab-item class="margin-item">
            <v-skeleton-loader
              v-if="loading == true"
              :loading="loading"
              max-width="534"
              class="mb-5 ml-5"
              type="article, actions"
            ></v-skeleton-loader>
            <v-row>
              <v-card max-width="530" elevation="2" class="ma-5 ml-6" v-for="job in Jobs" :key="job._id" v-show="loaded">
                <v-list-item three-line>
                  <v-list-item-content class="content-height">
                    <v-row>
                      <v-col cols="7" class="text-subtitle-1 font-weight-medium font-italic">
                        {{ job.company }}
                      </v-col>
                      <v-col cols="4" class=" ml-10 d-none d-md-flex">
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

                    <v-list-item-title class="headline mb-1 font-weight-normal"> {{ job.career_Level }} {{ job.title }} </v-list-item-title>

                    <v-list-item-subtitle class="text-subtitle-1 mb-2">
                      {{ job.description }}
                    </v-list-item-subtitle>

                    <v-list-item-subtitle>
                      <v-chip color="#01579B" text-color="white" class="mr-2" small v-for="skill in job.skills" :key="skill">{{ skill }} </v-chip>
                    </v-list-item-subtitle>

                    <v-list-item-subtitle class="text-subtitle-2 success--text">
                      {{ Application }} Applied
                      <v-list-item-icon>
                        <v-icon dense left color="success">
                          mdi-check-bold
                        </v-icon>
                      </v-list-item-icon>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-row class="" justify="center">
                  <!-- VIEW BUTTON HERE -->
                  <v-col cols="3">
                    <v-btn small color="success" class="ma-2 d-none d-md-flex" dark to="/Employer/Emp_View_Candidates">
                      View
                      <v-icon small dark right>
                        mdi-account-multiple
                      </v-icon>
                    </v-btn>
                    <!-- VIEW  SMALL BUTTON HERE -->
                    <v-btn icon class="ma-2 d-md-none" color="success" to="/Employer/Emp_View_Candidates">
                      <v-icon dark right>
                        mdi-account-multiple
                      </v-icon>
                    </v-btn>
                  </v-col>
                  <!-- VIEW BUTTON HERE -->

                  <!-- EDIT DIALOG STARTS HERE -->
                  <template>
                    <v-dialog v-model="EditDialog" max-width="580">
                      <template v-slot:activator="{ on, attrs }">
                        <!-- EDIT BUTTON HERE -->
                        <v-col cols="2">
                          <v-btn small color="primary" class="ma-2 d-none d-md-flex" dark v-bind="attrs" v-on="on" @click="GetJob(job._id)">
                            Edit
                            <v-icon small dark right>
                              mdi-pencil
                            </v-icon>
                          </v-btn>
                          <!-- EDIT SMALL BUTTON HERE -->
                          <v-btn icon class="ma-2 d-md-none" color="primary" v-bind="attrs" v-on="on" @click="GetJob(job._id)">
                            <v-icon dark right>
                              mdi-pencil
                            </v-icon>
                          </v-btn>
                        </v-col>
                        <!-- EDIT BUTTON ENDS HERE -->
                      </template>
                      <v-card>
                        <v-toolbar color="#01579b" dark>
                          <v-toolbar-title>Edit Your Job Post</v-toolbar-title>
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
                  </template>
                  <!-- EDIT DIALOG ENDS HERE -->

                  <!-- Archive BUTTON HERE -->
                  <v-col cols="3">
                    <v-btn small class="ma-2 ml-5 d-none d-md-flex" color="warning" dark>
                      Archive
                      <v-icon small dark right>
                        mdi-close-octagon
                      </v-icon>
                    </v-btn>
                    <!-- Archive SMALL BUTTON HERE -->
                    <v-btn icon class="ma-2 d-md-none" color="warning">
                      <v-icon dark right>
                        mdi-close-octagon
                      </v-icon>
                    </v-btn>
                  </v-col>
                  <!-- Archive BUTTON  ENDS HERE -->

                  <!-- DELETE DIALOGE HERE -->
                  <template>
                    <v-dialog v-model="dialog" persistent max-width="380">
                      <template v-slot:activator="{ on, attrs }">
                        <!-- DELETE BUTTON HERE -->
                        <v-col cols="3">
                          <v-btn small color="error" class="ma-2  d-none d-md-flex" dark v-bind="attrs" v-on="on" @click="GetJob(job._id)">
                            Delete
                            <v-icon small dark right>
                              mdi-delete-sweep
                            </v-icon>
                          </v-btn>
                          <!-- DELETE SMALL BUTTON HERE -->
                          <v-btn icon class="ma-2 d-md-none" color="error" v-bind="attrs" v-on="on" @click="GetJob(job._id)">
                            <v-icon dark right>
                              mdi-delete-sweep
                            </v-icon>
                          </v-btn>
                        </v-col>
                        <!-- DELETE BUTTON HERE -->
                      </template>
                      <v-card>
                        <v-toolbar color="error" dark>
                          <v-toolbar-title>Permenantly delete job post?</v-toolbar-title>
                          <v-spacer></v-spacer>
                          <v-icon class="mr-2">mdi-alert-octagon</v-icon>
                        </v-toolbar>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="green darken-1" text @click="dialog = false">
                            Disagree
                          </v-btn>
                          <v-btn color="red darken-1" text @click="DeleteJob()" :loading="Deleteloading">
                            Agree
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                    <!-- DELETE DIALOGE ENDS HERE -->
                  </template>
                </v-row>
              </v-card>
            </v-row>
          </v-tab-item>

          <v-tab-item>
            <!-- Archieved Posts Go Here -->
            <p>lol</p>
          </v-tab-item>
        </v-tabs-items>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import ApiService from "../../services/api.service";
export default {
  data() {
    return {
      types: ["Full-Time", "Part-Time", "Internship", "Freelance"],
      levels: ["Senior", "Junior", "Entry level"],
      skills: ["Gaming", "Programming", "Vue", "Vuetify"],
      search: null,
      tabs: null,
      Jobs: {},
      oneJob: {},
      SelectedJob: {
        jobID: "",
      },
      Application: {},

      // Rules
      skillsRulles: [(v) => v.length >= 3 || "Minimum of 3 skills"],
      fieldRules: [(v) => !!v || "Field is required"],
      TitleRules: [(v) => !!v || "Field is required", (v) => (!!v && isNaN(v)) || "Can't include numbers"],

      // Loaders
      loading: true,
      loaded: false,
      Deleteloading: false,
      Editloading: false,

      // Dialogs
      dialog: false,
      EditDialog: false,

      // Flags
      EditFlag: false,
    };
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
      ApiService.get(`http://localhost:3000/jobs/listAllJobs/${this.user_id}`).then((r) => {
        if (r.status == 200) {
          this.Jobs = r.data;
          console.log(this.Jobs);
          (this.loaded = true), (this.loading = false);
        } else {
          console.log(r);
        }
      });
    },

    GetJob(id) {
      ApiService.get(`http://localhost:3000/jobs/listJob/${id}`).then((r) => {
        if (r.status == 200) {
          this.oneJob = r.data;
          console.log(this.oneJob);
        } else {
          console.log(r);
        }
      });
    },

    GetApplications(id) {
      ApiService.get(`http://localhost:3000/jobApplications/${id}`).then((r) => {
        if (r.status == 200) {
          this.Application = r.data;
          console.log(this.Jobs._id);
        } else {
          console.log(r);
        }
      });
    },

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

    DeleteJob() {
      this.Deleteloading = true;
      ApiService.delete(`http://localhost:3000/jobs/delete/${this.oneJob._id}`).then((r) => {
        if (r.status == 204) {
          this.Deleteloading = false;
          this.dialog = false;
          this.GetJobs();
          console.log(r);
        } else {
          console.log(r);
        }
      });
    },
  },
};
</script>

<style scoped>
.form-header {
  padding: 10px;
  padding-left: 20px;
  margin-bottom: 15px;
  background-color: white;
}
.posts-header {
  padding: 10px;
  padding-left: 20px;
  margin-bottom: 15px;
  background-color: #01579b;
}
.taps-styling {
  background-color: #01579b;
}
.views {
  margin-left: 290px;
}
.margin-item {
  margin-top: 20px;
}
.content-height {
  height: 210px;
}
</style>
