<template>
  <div class="div">
    <v-row justify="center">
      <!-- Filters card -->
      <v-col cols="2">
        <v-card flat>
          <v-card-title>Filter</v-card-title>
          <v-divider></v-divider>
          <v-col cols="11" class="mt-3">
            <v-text-field
              dense
              class="searchbar"
              outlined
              label="Search"
              v-model="search"
              rounded-0>
            </v-text-field>
          </v-col>
          <v-card-text > Filter Your Search </v-card-text>
          <v-card-title>Career Level</v-card-title>
          <v-card-text>
            <v-chip-group active-class="orange darken-2 white--text" column >
              <v-chip filter>Intern</v-chip>
              <v-chip filter>Mid Level</v-chip>
              <v-chip filter>Senior Level</v-chip>
              <v-chip filter>Managment</v-chip>
            </v-chip-group>
          </v-card-text>
          <v-expansion-panels flat hover>
            <v-expansion-panel v-for="(item, i) in items" :key="i">
              <v-expansion-panel-header> {{item}} </v-expansion-panel-header>
              <v-expansion-panel-content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>

      <!-- jobs card -->

      <v-col cols="3">
        <v-card flat>
          <v-card-title>X in Jobs</v-card-title>

<!-- 
          <v-progress-linear
            absolute
            v-if="loadingjobs"
            color="blue"
            indeterminate
          >     
          </v-progress-linear> -->
          <v-skeleton-loader v-if="overlay == true" type="article, actions"></v-skeleton-loader>
          <v-card
            flat
            rounded="0"
            outlined
            v-for="job in filteredJobs.slice((page-1)*itemsPerPage,itemsPerPage * page)"
            :key="job._id"
            @click="cardcondition=true; GetJob(job._id);">
            
            <v-list>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="title">{{job.title}}</v-list-item-title>
                  <v-list-item-subtitle style="color:#FF9800" class="subtitle-1">{{job.company}}</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-2 mt-5" >{{job.career_Level}} Level</v-list-item-subtitle>
                  <v-list-item-subtitle class="caption mt-2">{{job.description}}</v-list-item-subtitle>
                  <v-list-item-subtitle class="caption mt-2">1/1/2020</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
            <v-pagination v-model="page" class="orange darken-2" :length="Math.ceil(jobs.length/itemsPerPage)" color="light-blue darken-4" ></v-pagination>
        </v-card>
      </v-col>

      <!-- Apply Card -->

      <v-col cols="3" v-if="cardcondition">
        <v-card flat >
          <v-progress-linear
            absolute
            v-if="loading"
            color="orange darken-2"
            indeterminate
          >     
          </v-progress-linear>
          <v-list>
            <v-row class="justify-end mr-3">
              <v-icon @click="cardcondition=false">mdi-close</v-icon>
            </v-row>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="title">{{oneJob.title}}</v-list-item-title>
                <v-list-item-subtitle style="color:#FF9800" class="subtitle-1">{{oneJob.company}}</v-list-item-subtitle>
                <v-list-item-subtitle class="subtitle-2 mt-5">{{oneJob.career_level}}</v-list-item-subtitle>
                <v-list-item-subtitle class="caption mt-5">{{oneJob.description}}</v-list-item-subtitle>
                <v-list-item-subtitle class="caption mt-5">1/1/2020</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar
                tile
                size="60"
                color="grey">
              </v-list-item-avatar>
            </v-list-item>
          </v-list>
          <!-- @click="ApplyJob(job._id)" -->
          <v-dialog
            transition="dialog-bottom-transition"
            max-width="800"
            v-model="dialog"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" class="ml-3 mb-3" outlined>Apply</v-btn>
            </template>
            <template v-slot:default="dialog">
              <v-card>
                <v-toolbar
                  color="light-blue darken-4"
                  dark>
                  <v-toolbar-title class="ml-5">Apply to {{oneJob.company}}</v-toolbar-title>
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
                        <v-text-field
                          dense
                          outlined
                          v-model="AppliedJob.applicantEmail"
                          :rules="emailRules"
                          clearable
                          required>
                        </v-text-field>
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
                          @update="onUpdate"/>
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
                      @click="ApplyJob()":loading="loading">
                      Apply
                    </v-btn>
                  </v-row>
                </v-card-text>
              </v-card>
            </template>
          </v-dialog>
          <v-divider></v-divider>

          <v-card-title class="title">Job Description</v-card-title>
          <v-card-text>{{oneJob.description}}</v-card-text>

          <v-card-title class="title">Skills</v-card-title>
          <ul class="ml-3">
            <li v-for="skill in oneJob.skills">{{skill}}</li>
          </ul>
          
          <v-card-title class="title">Job Details</v-card-title>
          <v-card-text>{{oneJob.job_Details}}</v-card-text>
          <v-progress-linear value="100" height="15" color="orange darken-2"></v-progress-linear>
        </v-card>
      </v-col>

      <!-- Profile Card -->

      <v-col cols="3" v-if="cardcondition != true">
        <v-card v-if="loggedIn" class="mb-5">
          <v-list>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="title">{{user.fname}} {{user.lname}}</v-list-item-title>
                <v-list-item-subtitle class="subtitle-2 mt-10">Last CV Refresh Date: 2020-11-03</v-list-item-subtitle>
                <v-list-item-subtitle style="color:#FF9800" class="subtitle-2 mt-5">Preferred job title</v-list-item-subtitle>
                <v-list-item-subtitle class="caption mt-2" v-if="!user.cv">-</v-list-item-subtitle>
                <v-list-item-subtitle class="caption mt-2" v-if="user.cv">{{user.cv.job_Title}}</v-list-item-subtitle>
                
              </v-list-item-content>
              <v-list-item-avatar
                class="avatar"
                color="orange"
                size="80"
                >
                <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img></v-list-item-avatar>
            </v-list-item>
          </v-list>
        </v-card>

        <v-card>
          <v-card-title>Save this search and receive similar jobs:</v-card-title>
          <v-card-text>
            <v-form>
              <v-row>
                <v-col cols="4">
                  <v-card-text>Keywords</v-card-text>
                </v-col>
                <v-col cols="8">
                  <v-text-field
                    v-model="AlertKey"
                    dense
                    outlined
                    clearable
                    required>
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-card-text>Job Level</v-card-text>
                </v-col>
                <v-col cols="8">
                  <v-text-field
                    v-model="JobLevel"
                    dense
                    outlined
                    clearable
                    required>
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row class="justify-end mr-1">
                <v-btn class="mb-3" small right outlined>Create Job Alert</v-btn>
              </v-row>
            </v-form>
          </v-card-text>
          
        </v-card>

      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar2" timeout = "5000" color="error" outlined dark><v-icon class="mr-2">mdi-alert-octagon-outline</v-icon> Bad Information </v-snackbar>
    <v-snackbar v-model="snackbar1" timeout = "3000" color="success" outlined dark><v-icon class="mr-2">mdi-checkbox-marked-circle</v-icon> Your Application placed successfully </v-snackbar>
    <v-overlay :value="overlay" opacity="0.9" >
        <fingerprint-spinner
          class="justify-center"
          :animation-duration="1500"
          :size="120"
          color="#FF9800"
        />
    </v-overlay>
  </div>
</template>

<script>
import ApiService from "../services/api.service";
import { FingerprintSpinner } from 'epic-spinners'
import { mapGetters,mapActions,mapMutations } from "vuex";
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
export default {
  components:{
      VuePhoneNumberInput,
      FingerprintSpinner
  },
  mounted() {
    this.loadingjobs=true
    ApiService.get('http://localhost:3000/jobs/list')
    .then((r)=>{
      if(r.status==200){
        this.jobs= r.data;
        this.loadingjobs=false;
        this.getUser();
      }
      else{
        console.log(r);
      }
      console.log(this.jobs);
    });
    
    
  },
  data: () => ({
    //page
    page: 1,
    itemsPerPage: 4,
    //report: false
    overlay:true,
    
    jobs:[],
    result:[],
    job:"",
    oneJob:{},
    AppliedJob:{
      jobID:"",
      applicantEmail:"",
      applicantPhone:null,
    },
    pageOfItems: [],
    cardcondition:false,
    loading:false,
    loadingjobs:false,
    user:{
      cv:{},
      account:{},
    },
    search:"",
    dialog:"",
    Valid:false,
    AlertKey:"",
    JobLevel:"",
    snackbar1:false,
    snackbar2:false,
    items:["Location","Job Type","Salary","Industry"],
    //------------------------ Phone Section ------------------------\\
    phoneNumber:null,
    results: {},
    hasLoaderActive: false,
    hasErrorActive: false,
    //##############################################################################\\
    //------------------------ Validation Rules ------------------------\\
    phoneRules: 
    [
      (v) => !!v || "Field is required",
    ],
    emailRules: 
    [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),
  computed: {
    ...mapGetters("auth", ["loggedIn"]),
    ...mapGetters("auth", ["user_id"]),
    //Search bar
    filteredJobs: function () {
      return this.jobs.filter((job)=>{
        return job.title.toLowerCase().match(this.search.toLowerCase());
      });
    },
  },
  methods: {
   
    GetJobs()
    {
      if(this.job){
        ApiService.get('http://localhost:3000/jobs/list')
        .then((r)=>{
          if(r.status==200){
            this.jobs=r.data;
            this.updateVisibleJobs();
            console.log(user.cv.job_Title)
          }
          else{
            console.log(r);
          }
        });
      }
    },

    GetJob(id)
    {
      this.loading=true
      
       ApiService.get(`http://localhost:3000/jobs/listjob/${id}`)
        .then((r)=>{
          console.log(r)
          if(r.status==200){
            this.oneJob=r.data;
            console.log(this.oneJob);
            this.loading=false
          }
          else{
            console.log(r);
          }
        });
    },
    ApplyJob()
    {
      this.loading = true;
      this.AppliedJob.jobID=this.oneJob._id
      ApiService.post(`http://localhost:3000/users/${this.user_id}`,this.AppliedJob)
        .then((r)=>{
          if(r.status==204)
          {
            this.loading = false;
            this.dialog = false;
            this.snackbar1=true;
            console.log(r)
          }
          else
          {
            this.loading = false;
            this.snackbar2=true;
            console.log(r);
          }
      });
      
    },
    getUser(){
        ApiService.get(`http://localhost:3000/users/${this.user_id}`)
        .then((r)=>{
          if(r.status==200)
          {
            this.user=r.data;
            console.log(this.user)
            this.overlay=false;
          }
          else
          {
            console.log(r);
          }
      });
    },
    onUpdate (payload) 
    {
      if(payload.isValid)
      {
        this.Valid= true;
        console.log(payload);
        this.AppliedJob.applicantPhone=payload.formattedNumber;
        console.log(this.AppliedJob.applicantPhone);
        // this.hasLoaderActive=false;
        // this.hasErrorActive= false;
      }
      else
      {
        this.Valid= false;
        // this.hasLoaderActive=true;
        // this.hasErrorActive= true;
      }
      
    },
  },
};
</script>

<style scoped>
.div {
  background-color: #E0E0E0;
  width: 100%;
}
.avatar{
  border: 1px solid #f57c00 !important;
}
</style>
