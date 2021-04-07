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
          <v-card-text> Filter Your Search </v-card-text>
          <v-card-title>Career Level</v-card-title>
          <v-card-text>
            <v-chip-group active-class="deep-purple accent-4 white--text" column>
              <v-chip>Intern</v-chip>
              <v-chip>Mid-level</v-chip>
              <v-chip>Senior-level</v-chip>
              <v-chip>Managment</v-chip>
            </v-chip-group>
          </v-card-text>
          <v-expansion-panels flat hover>
            <v-expansion-panel v-for="(item, i) in 5" :key="i">
              <v-expansion-panel-header> Item </v-expansion-panel-header>
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
          <v-card
            flat
            rounded="0"
            outlined
            v-for="job in filteredJobs"
            :key="job._id"
            @click="cardcondition=true; GetJob(job._id);">
            
            <v-list>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="title">{{job.title}}</v-list-item-title>
                  <v-list-item-subtitle class="subtitle-1">{{job.Company}}</v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle-2 mt-5">{{job.career_level}}</v-list-item-subtitle>
                  <v-list-item-subtitle class="caption mt-5">{{job.description}}</v-list-item-subtitle>
                  <v-list-item-subtitle class="caption mt-5">1/1/2020</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar
                  tile
                  size="60"
                  color="grey">
                </v-list-item-avatar>
              </v-list-item>
            </v-list>
          </v-card>

          <div class="text-center">
            <v-pagination  :length="3"></v-pagination>
          </div>
        </v-card>
      </v-col>

      <!-- Apply Card -->

      <v-col cols="3" v-if="cardcondition">
        <v-card flat >
          <v-progress-linear
            absolute
            v-if="loading"
            color="blue"
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
                <v-list-item-subtitle class="subtitle-1">{{oneJob.Company}}</v-list-item-subtitle>
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
          <v-btn class="ml-3 mb-3" outlined>Apply</v-btn>
          <v-divider></v-divider>

          <v-card-title class="title">Job Description</v-card-title>
          <v-card-text>{{oneJob.description}}</v-card-text>

          <v-card-title class="title">Skills</v-card-title>
          <ul class="ml-3">
            <li v-for="skill in oneJob.skills">{{skill}}</li>
          </ul>
          
          <v-card-title class="title">Job Details</v-card-title>
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
                <v-list-item-subtitle class="subtitle-2 mt-5">Preferred job title</v-list-item-subtitle>
                <v-list-item-subtitle class="caption mt-2">Data Engineer</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-avatar
                tile
                size="60"
                color="blue">
              </v-list-item-avatar>
            </v-list-item>
          </v-list>
        </v-card>
        <v-card >
          <v-list>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="title">Save this search and receive similar jobs:</v-list-item-title>
                <v-list-item-subtitle class="subtitle-2 mt-7">Keywords</v-list-item-subtitle>
                <v-list-item-subtitle class="subtitle-2 mt-5">Job Location</v-list-item-subtitle>
                <v-list-item-subtitle class="subtitle-2 mt-5">Alert Frequency</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-row class="justify-end mr-3">
            <v-btn class="ml-3 mb-3" small right outlined>Create Job Alert</v-btn>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ApiService from "../services/api.service";
import { mapGetters,mapActions,mapMutations } from "vuex";
export default {
  mounted() {
    this.loadingjobs=true
    ApiService.get('http://localhost:3000/jobs/list')
    .then((r)=>{
      if(r.status==200){
        this.jobs= r.data;
        this.loadingjobs=false
      }
      else{
        console.log(r);
      }
      console.log(this.jobs);
    });
    this.getUser();
  },
  data: () => ({
    //report: false
    jobs:[],
    result:[],
    job:"",
    oneJob:{},
    pageOfItems: [],
    cardcondition:false,
    loading:false,
    loadingjobs:false,
    user:{},
    search:"",
  }),
  computed: {
    ...mapGetters("auth", ["loggedIn"]),
    ...mapGetters("auth", ["user_id"]),
    //Search bar
    filteredJobs: function () {
      return this.jobs.filter((job)=>{
        return job.title.toLowerCase().match(this.search.toLowerCase());
      });
    }
  },
  methods: {
   
    GetJobs()
    {
      if(this.job){
        ApiService.get('http://localhost:3000/jobs/list')
        .then((r)=>{
          if(r.status==200){
            this.jobs=r.data;
            
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
       ApiService.get(`http://localhost:3000/jobs/list/${id}`)
        .then((r)=>{
          if(r.status==200){
            this.oneJob=r.data;
            this.loading=false
          }
          else{
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
            //console.log(this.user)
          }
          else
          {
            console.log(r);
          }
      });
    },
  },
};
</script>

<style scoped>
.div {
  background-color: #a8d0e6;
  width: 100%;
}
</style>
