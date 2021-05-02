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
                <v-btn small right color="primary" dark to="/Employer/Emp_Edit_Profile">
                  <h3> Edit </h3>
                  <v-icon small dark right>
                    mdi-pencil
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-row class="pl-5">
              <v-col cols="4">
                <h4 >Name:</h4>
                <h4>Phone:</h4>
                <h4 >Industry:</h4>
                <h4 >Website:</h4>
                <h4 >Company Size:</h4>
                <h4 >Headquarters:</h4>
                <h4 >Founded:</h4>
              </v-col>

              <v-col cols="5">
                <h4>{{ employer.companyName }}</h4>
                <h4>{{ employer.companyPhone }}</h4>
                <h4>{{ employer.industry }}</h4>
                <h4>{{ Website }}</h4>
                <h4>{{ Size }} employees</h4>
                <h4>{{ Headquarters }}</h4>
                <h4>{{ Year }}</h4>
              </v-col>
            </v-row>

            
            
          </v-card>
        </v-col>

        <v-spacer></v-spacer>
        

        <v-col cols="3">
          <v-card outlined shaped elevation="1">
              <v-card-title class="ml-3 text-h5">Share with friends:</v-card-title>
            <v-card-actions>
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4"
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
        <v-col cols="6">
          <v-card outlined>
            <v-card-title class="text-h4" >Open Vacancies at {{ employer.companyName }}!</v-card-title>
            <v-btn class="ml-4 mb-3" small color="primary" dark to="/Employer/Emp_Manage_Jobs">
              <h3> Manage Jobs </h3>
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
              <v-card-title class="ml-3 text-h5">Contact Information:</v-card-title>
                <v-row justify="end" class="mr-10">
                  <v-dialog
                      transition="dialog-bottom-transition"
                      max-width="1000"
                      v-model="dialog"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon  v-bind="attrs" v-on="on">mdi-pencil</v-icon>
                      </template>

                      <template v-slot:default="dialog">
                              <v-card>
                                <v-toolbar
                                  color="#24305E"
                                  dark>
                                  <v-toolbar-title class="ml-5">Edit Personal Information</v-toolbar-title>
                                  <v-spacer></v-spacer>
                                  <v-icon class="mr-2" @click="dialog.value = false">mdi-close</v-icon>  
                                </v-toolbar>
                                
                                <v-card-text>
                                  <v-form v-model="Valid3" class="mt-5">
                                    <!-- /////////////////////////////////////////////////////////// -->
                                    <!-- Full name field -->
                                    <!-- /////////////////////////////////////////////////////////// -->
                                    <v-row justify="center">
                                      <v-col cols="2">
                                        <v-card-text>Full name</v-card-text>
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
                                        <v-card-text>Title</v-card-text>
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
                                        <v-card-text>Phone</v-card-text>
                                      </v-col>
                                      <!-- Phone Number -->
                                      <v-col cols="10">
                                        <VuePhoneNumberInput 
                                          color="dodgerblue"
                                          valid-color="green"
                                          required 
                                          v-model="employer.phone"
                                          default-country-code= "EG"
                                          clearable/>
                                      </v-col>
                                    </v-row>

                                  </v-form>

                                  <v-row class="justify-end mr-1">
                                    <!-- :disabled="!Valid" -->
                                    <v-btn
                                      class="white--text"
                                      width="150px"
                                      color="#24305E"
                                      
                                      @click="editProfile()":loading="loading">
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
              <h4 >Name: {{employer.fname}} {{employer.lname}}</h4>
              <h4 >Title: {{employer.title}}</h4>
              <h4 >Phone: {{employer.phone}}</h4>
            </v-col>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <v-card outlined>
            <v-card-title class="text-h4">Overview:</v-card-title>
            <v-card-text class="text-h6"> 
              <read-more more-str="read more" :text="companyOverview" link="#" less-str="read less" :max-chars="100"></read-more>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-snackbar v-model="snackbar" timeout = "2000" color="success" outlined dark> Your changes have been successfully saved </v-snackbar>
  </v-row>
</template>

<script>
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import { mapGetters, mapActions, mapMutations } from "vuex";
import ApiService from "../../services/api.service";
import TokenService from "../../services/storage.service";


export default {
  data: () => ({
    Website: "www.vodafoneEg.com",
    Size: "200-300",
    Headquarters: "Cairo,Egypt",
    Year: "1990",
    companyOverview:"Etisalat Misr offers premium international services, enabling its customers to enjoy competitive international calling rates to all countries across the globe. Etisalat also provides high-speed Internet services, ADSL for homes, while launching fixed landline services to become the first fully digital operator.",
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    

    //Edit Dialog and snackbar
    dialog: false,
    snackbar: false,
    loading:false,

    // Contact Information:
    employer:{},

    //Rules
    nameRules: 
    [
      (v) => !!v || "Field is required",
      (v) => (v && v.length <= 15) || "Name must be less than 15 characters",
      (v) => (!!v && isNaN(v)) || "Can't include numbers",
      (v) => /^[a-zA-Z]+$/.test(v) || "Can't include special characters"
    ],
    
  }),
  mounted(){
    this.getUser();
  },
  components:{
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
    getUser(){
        ApiService.get(`http://localhost:3000/employers/${this.user_id}`)
        .then((r)=>{
          if(r.status==200)
          {
            this.employer=r.data;
            console.log(this.employer)
          }
          else
          {
            console.log(r);
          }
      });
    },

    editProfile(){
      this.loading = true;
      ApiService.put(`http://localhost:3000/EditInfo/${this.user_id}`,this.user)
      .then((r)=>{
        console.log(r);
        if(r.status==204)
        {
          this.getUser();
          this.loading = false;
          this.dialog = false;
          this.snackbar=true;
          console.log(r)
        }
        else
        {
          this.loading = false;
          console.log(r);
          console.log(this.user);
        }
      })
      .catch(error=>{
        this.loading = false;
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
