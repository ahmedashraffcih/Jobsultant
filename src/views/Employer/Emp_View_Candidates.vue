<template>
    <v-row class="blue-grey lighten-5" justify="center">
        <v-col cols="8">
            <v-col class="form-header rounded-lg">
                <h1 class="font-weight-light">Applicants for <span class="font-weight-regular">{{JobTitle}}</span>  position</h1>
                <p>{{ApplicantsCount}} applicants!</p>
            </v-col>

            <v-col class="jobs-header rounded-lg">
                <v-row>
                    <v-col cols="8">
                        <v-card class="mb-3">
                            <v-card-title>{{username}} </v-card-title>
                            <v-card-subtitle class="text-subtitle-1" >{{workExp}}</v-card-subtitle>
                            <v-row>
                                <v-col cols="8">
                                    <h4 class="mb-2 ml-4 grey--text">Skills: <v-chip color="primary" text-color="white" class="mr-2" small v-for="skill in Skills" :key="skill.id">{{skill.id}} </v-chip> </h4>
                                    <h4 class="mb-2 ml-4 grey--text">Education: <span class="black--text">{{Education}}</span> </h4>
                                    <h4 class="mb-2 ml-4 grey--text">Location:  <span class="black--text">{{Location}}</span> </h4>
                                    <h4 class="mb-2 ml-4 grey--text">Phone:  <span class="black--text">{{Phone}}</span> </h4>
                                    <h4 class="mb-2 ml-4 grey--text">Email:  <span class="black--text">{{Email}}</span> </h4>
                                    <v-col cols="8">
                                        <v-btn
                                            :loading="loading"
                                            :disabled="loading"
                                            color="success"
                                            @click="loader = 'loading'"
                                            >
                                            Shortlist
                                            <template v-slot:loader>
                                                <span>Loading...</span>
                                            </template>
                                        </v-btn>

                                        <v-btn
                                            class=" ml-1"
                                            :loading="loading2"
                                            :disabled="loading2"
                                            color="error"
                                            @click="loader = 'loading2'"
                                            >
                                            Reject
                                            <template v-slot:loader>
                                                <span>Loading...</span>
                                            </template>
                                        </v-btn>
                                    </v-col>
                                    <!-- last -->
                                </v-col>
                                <v-col cols="4">
                                    <vue-ellipse-progress 
                                        :progress="requirmentsPercent" 
                                        :size="150" 
                                        :legend-value="requirments"
                                        >
                                        <span slot="legend-value"> %</span>
                                        <span slot="legend-caption">Of Requirments</span>
                                        </vue-ellipse-progress >
                                </v-col>
                            </v-row>   
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-col>
        <v-snackbar v-model="snackbar1" timeout = "2000" color="success" outlined dark> Applicant Shortlisted  </v-snackbar>
        <v-snackbar v-model="snackbar2" timeout = "2000" color="error" outlined dark> Applicant Rejected </v-snackbar>
    </v-row>
</template>
<script>

export default {
data () {
    return {
      CompanyName:"Vodafone Egypt",
      ApplicantsCount: 150,
      JobTitle : "Junior .NET Developer", 
      
      //userdata
      username:"Ahmed Ashraf",
      workExp:".Net developer at ITWORXS",
      Education:"Bachelor's degree, Computer Science",
      Location:"Egypt-Cairo",
      Phone:"01012347575",
      Email:"ahmedashraf@gmail.com",
      requirmentsDone: 75,
      Skills:[  {id:'.NET'},
                {id:'HTML'},
                {id:'MySQL'},
                {id:'Javascript'}],
      //action buttons          
      loading: false,
      loading2: false,
      loader: null,

      //snackbars
      snackbar1 : false,
      snackbar2 : false,
    }
  },

    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },
    computed: {
    requirmentsPercent() {
      return (this.requirmentsDone * 100) / 100;
    }},

   
    
}
</script>


<style scoped>
.form-header {
  padding: 10px;
  padding-left: 20px;
  margin-bottom: 15px;
  background-color: white;
}
.jobs-header {
  padding: 10px;
  padding-left: 20px;
  margin-bottom: 15px;
  background-color: #24305e;
}

</style> 