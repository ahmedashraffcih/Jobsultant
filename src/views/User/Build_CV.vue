<template>
  <div class="div">
    <v-row justify="center">
      <v-col cols="6">
        <h1 v-if="userdata">Welcome to Jobsultant.com, {{ userdata.firstName }}!</h1>
        <h1 v-if="!userdata">Welcome to Jobsultant.com,!</h1>
        <p class="light-blue--text text--darken-4">Let's go ahead and build your CV. It will only take 3 minutes.</p>
        <v-stepper v-model="e6" vertical>
          <v-stepper-step :complete="e6 > 1" step="1" color="orange darken-2">
            What is your current (or last) position?
            <small class="mt-2">You Can skip this</small>
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-form v-model="Valid">
              <v-list class="mb-4" max-width="850px" dense>
                <v-list-item class="pl-2">
                  <v-row>
                    <v-col cols="12" class="subtitle-2">
                      <span>What is the job title of this position?</span>
                      <v-text-field flat dense outlined required v-model="cv.work_Experience.Job_title" :rules="nameRules" class="mt-2" placeholder="Job Title">
                      </v-text-field>
                    </v-col>
                  </v-row>
                </v-list-item>
                <v-list-item class="pl-2">
                  <v-row>
                    <v-col cols="12" class="subtitle-2">
                      <span>Company name</span>
                      <v-text-field
                        dense
                        outlined
                        flat
                        required
                        v-model="cv.work_Experience.company_name"
                        :rules="nameRules"
                        placeholder="Company Name"
                        class="mt-2"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-list-item>

                <v-list-item dense class="pl-2">
                  <v-row>
                    <v-col cols="12" class="subtitle-2">
                      <span>Start date</span>
                      <v-dialog ref="dialog1" v-model="modal" :return-value.sync="cv.work_Experience.start_date" persistent width="290px">
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-if="datecondition"
                            v-model="cv.work_Experience.start_date"
                            readonly
                            outlined
                            flat
                            dense
                            v-bind="attrs"
                            v-on="on"
                            class="mt-3"
                            placeholder="Start Date"
                          ></v-text-field>
                        </template>
                        <v-date-picker v-model="cv.work_Experience.start_date" scrollable>
                          <v-spacer></v-spacer>
                          <v-btn text color="primary" @click="modal = false">
                            Cancel
                          </v-btn>
                          <v-btn text color="primary" @click="$refs.dialog1.save(cv.work_Experience.start_date)">
                            OK
                          </v-btn>
                        </v-date-picker>
                      </v-dialog>
                    </v-col>
                  </v-row>
                </v-list-item>

                <v-list-item dense class="pl-2">
                  <v-row>
                    <v-col cols="12" class="subtitle-2">
                      <span>End date</span>
                      <!-- <v-checkbox @click="datecondition=false" v-model="checkbox" flat label="Till Now"></v-checkbox> -->
                      <v-dialog ref="dialog2" v-model="endmodal" :return-value.sync="cv.work_Experience.end_date" persistent width="290px">
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-if="datecondition"
                            v-model="cv.work_Experience.end_date"
                            readonly
                            outlined
                            flat
                            dense
                            v-bind="attrs"
                            v-on="on"
                            class="mt-3"
                            placeholder="End Date"
                          ></v-text-field>
                        </template>
                        <v-date-picker v-model="cv.work_Experience.end_date" scrollable>
                          <v-spacer></v-spacer>
                          <v-btn text color="primary" @click="endmodal = false">
                            Cancel
                          </v-btn>
                          <v-btn text color="primary" @click="$refs.dialog2.save(cv.work_Experience.end_date)">
                            OK
                          </v-btn>
                        </v-date-picker>
                      </v-dialog>
                    </v-col>
                  </v-row>
                </v-list-item>

                <v-list-item dense class="pl-2">
                  <v-row>
                    <v-col cols="12" class="subtitle-2">
                      <span>Job Location</span>

                      <v-combobox
                        clearable
                        flat
                        required
                        dense
                        outlined
                        solo
                        v-model="cv.work_Experience.location"
                        :rules="nameRules"
                        class="mt-3"
                        placeholder="Location"
                      ></v-combobox>
                    </v-col>
                  </v-row>
                </v-list-item>
              </v-list>
            </v-form>

            <v-col cols="12" class="ma-0 pa-0 mb-5 ml-2">
              <v-btn class="white--text" :disabled="!Valid" color="orange darken-2" @click="e6 = 2">
                Continue
              </v-btn>
            </v-col>
            <v-col cols="12" class="ma-0 pa-0">
              <v-btn
                text
                color="orange darken-2"
                @click="
                  e6 = 2;
                  work_Experience = ' ';
                "
              >
                I have no experience / still studying
              </v-btn>
            </v-col>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 2" step="2" color="orange darken-2">
            What kind of job are you looking for?
          </v-stepper-step>

          <v-stepper-content step="2">
            <v-form v-model="Valid2">
              <v-list class="mb-4" max-width="850px" dense>
                <v-list-item dense class="pl-2">
                  <v-list-item-title>Job title(s)</v-list-item-title>
                  <v-list-item-subtitle>
                    <v-text-field flat dense outlined required :rules="nameRules" v-model="cv.job_Title" placeholder="Desired Job Title"></v-text-field>
                  </v-list-item-subtitle>
                </v-list-item>

                <v-list-item dense class="pl-2">
                  <v-list-item-title>Job Location</v-list-item-title>
                  <v-list-item-subtitle>
                    <v-text-field flat dense outlined required :rules="nameRules" v-model="cv.residence_Location" placeholder="Job Location"></v-text-field>
                  </v-list-item-subtitle>
                </v-list-item>
                <v-list-item dense class="pl-2">
                  <v-list-item-title>Job Level</v-list-item-title>

                  <v-list-item-subtitle>
                    <v-combobox :rules="nameRules" :items="joblevel" v-model="cv.job_Level" clearable flat required dense outlined solo placeholder="Job Level"> </v-combobox>
                  </v-list-item-subtitle>
                </v-list-item>
                <v-list-item dense class="pl-2">
                  <v-list-item-title>Your Skills</v-list-item-title>

                  <v-list-item-subtitle>
                    <v-combobox :items="skills" outlined flat required dense v-model="cv.skills" hint="Maximum of 5 skills" placeholder="Skills" multiple></v-combobox>
                  </v-list-item-subtitle>
                </v-list-item>
                <v-list-item dense class="pl-2">
                  <v-list-item-title>Your languages</v-list-item-title>

                  <v-list-item-subtitle>
                    <v-combobox
                      :items="languages"
                      outlined
                      flat
                      required
                      dense
                      v-model="cv.languages"
                      hint="Maximum of 5 languages"
                      multiple
                      placeholder="Languages"
                    ></v-combobox>
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-form>
            <v-btn :disabled="!Valid2" class="white--text" color="orange darken-2" @click="e6 = 3"> Continue </v-btn>
            <v-btn text @click="e6 = 1"> Back </v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 3" step="3" color="orange darken-2">
            Tell us about your education.
          </v-stepper-step>

          <v-stepper-content step="3">
            <v-form v-model="Valid3">
              <v-list class="mb-4" max-width="850px" dense>
                <v-list-item dense class="pl-2">
                  <v-list-item-title>Degree</v-list-item-title>
                  <v-list-item-subtitle>
                    <v-combobox clearable :rules="nameRules" :items="degree" v-model="cv.education.degree" flat required dense outlined solo placeholder="Degree">
                    </v-combobox>
                  </v-list-item-subtitle>
                </v-list-item>

                <v-list-item dense class="pl-2">
                  <v-list-item-title>University or institution</v-list-item-title>

                  <v-list-item-subtitle>
                    <v-combobox :rules="nameRules" v-model="cv.education.university" clearable flat required dense outlined solo placeholder="University"> </v-combobox>
                  </v-list-item-subtitle>
                </v-list-item>
                <v-list-item dense class="pl-2">
                  <v-list-item-title>Location</v-list-item-title>

                  <v-list-item-subtitle>
                    <v-combobox clearable v-model="cv.education.location" flat required dense outlined solo :rules="nameRules" placeholder="Location"> </v-combobox>
                  </v-list-item-subtitle>
                </v-list-item>
                <v-list-item dense class="pl-2">
                  <v-list-item-title>Field of study (Major)</v-list-item-title>

                  <v-list-item-subtitle>
                    <v-combobox v-model="cv.education.field" clearable flat required dense outlined solo :rules="nameRules" placeholder="Field"> </v-combobox>
                  </v-list-item-subtitle>
                </v-list-item>
                <v-list-item dense class="pl-2">
                  <v-list-item-title>Graduation Date</v-list-item-title>
                  <v-list-item-subtitle>
                    <v-combobox clearable v-model="cv.education.graduation_date" flat required dense outlined solo :rules="nameRules" placeholder="Graduation Date"> </v-combobox>
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-form>
            <v-btn :disabled="!Valid3" class="white--text" color="orange darken-2" @click="e6 = 4"> Continue </v-btn>
            <v-btn text @click="e6 = 2"> Back </v-btn>
          </v-stepper-content>

          <v-stepper-step step="4" color="orange darken-2">
            Make it easy for employers to contact you.<br />Tell them a bit about yourself.</v-stepper-step
          >
          <v-stepper-content step="4">
            <v-form v-model="Valid4">
              <v-list class="mb-4" max-width="850px" dense>
                <v-list-item dense class="pl-2">
                  <v-list-item-title>Birth date</v-list-item-title>
                  <v-list-item-subtitle>
                    <v-dialog ref="dialog" v-model="modal2" :return-value.sync="cv.birth_Date" persistent width="290px">
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field v-model="cv.birth_Date" readonly outlined flat dense v-bind="attrs" v-on="on" placeholder="Birth Date"></v-text-field>
                      </template>
                      <v-date-picker v-model="cv.birth_Date" scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="modal2 = false">
                          Cancel
                        </v-btn>
                        <v-btn text color="primary" @click="$refs.dialog.save(cv.birth_Date)">
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-dialog></v-list-item-subtitle
                  >
                </v-list-item>

                <v-list-item dense class="pl-2">
                  <v-list-item-title>Your nationality</v-list-item-title>

                  <v-list-item-subtitle>
                    <v-combobox :rules="nameRules" v-model="cv.nationality" clearable flat required dense outlined solo placeholder="Nationality"></v-combobox>
                  </v-list-item-subtitle>
                </v-list-item>
                <v-list-item dense class="pl-2">
                  <v-list-item-title>Gender</v-list-item-title>

                  <v-list-item-subtitle>
                    <v-select v-model="cv.gender" clearable flat required dense outlined :rules="nameRules" :items="items" placeholder="Gender"> </v-select>
                  </v-list-item-subtitle>
                </v-list-item>

                <v-list-item class="pl-2">
                  <v-list-item-title class="mb-3">Phone Number</v-list-item-title>

                  <v-list-item-subtitle class=" mb-7">
                    <VuePhoneNumberInput
                      id="phoneNumber1"
                      color="dodgerblue"
                      valid-color="green"
                      required
                      :loader="loading"
                      v-model="cv.mobile_Phone"
                      clearable
                      @update="onUpdate"
                    />
                  </v-list-item-subtitle>
                </v-list-item>

                <v-list-item dense class="pl-2">
                  <v-list-item-title class="pb-5">Profile Picture</v-list-item-title>
                  <v-list-item-subtitle>
                    <v-file-input color="light-blue darken-3" show-size  outlined dense prepend-icon="mdi-camera" v-model="cv.image" placeholder="CV Picture">
                    </v-file-input>
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-form>
            <v-btn :disabled="!Valid4" @click="CreateCV()" class="white--text" color="orange darken-2" :loading="loading"> Submit </v-btn>
            <v-btn text @click="e6 = 3"> Back </v-btn>
          </v-stepper-content>
        </v-stepper>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar2" timeout="5000" color="error" dark
      ><v-icon class="mr-2">mdi-alert-octagon-outline</v-icon> Bad Information
    </v-snackbar>
    <v-snackbar v-model="snackbar1" timeout="3000" color="success" dark
      ><v-icon class="mr-2">mdi-checkbox-marked-circle</v-icon> Your CV Created Successfully
    </v-snackbar>
  </div>
</template>

<script>
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import { TokenService } from "../../services/storage.service";
import ApiService from "../../services/api.service";
import { mapGetters, mapActions, mapMutations } from "vuex";
import jsonToFormData from "@ajoelp/json-to-formdata";
import axios from "axios";
export default {
  components: {
    VuePhoneNumberInput,
  },
  data() {
    return {
      e6: 1,
      datecondition: true,
      loading: false,
      error: true,
      items: ["Male", "Female"],
      languages: ["Arabic", "English", "French"],
      skills: ["JS", "CSS", "Python", "Java", "Html", "React", "SSIS", "C++"],
      joblevel: ["Senior", "Mid-Level", "Junior", "Intern"],
      degree: ["Doctoral degree", `Master's degree`, `Bachelor's degree`, "High School Diploma"],
      cv: {
        job_Title: "",
        gender: "",
        birth_Date: "",
        nationality: "",
        mobile_Phone: "",
        residence_Location: "",
        job_Level: "",

        education: {
          degree: "",
          university: "",
          location: "",
          field: "",
          graduation_date: "",
        },

        work_Experience: {
          company_name: "",
          Job_title: "",
          location: "",
          start_date: "",
          end_date: "",
        },

        skills: [],
        languages: [],
      },
      Validx: false,
      Valid: false, //section 1
      Valid2: false, //section 2
      Valid3: false, //section 3
      Valid4: false, //section 4
      modal: false,
      modal2: false,
      endmodal: false,
      checkbox: false,
      snackbar1: false,
      snackbar2: false,
      nameRules: [(v) => !!v || "Field is required"],
      CompRules: [(v) => !!v || "Field is required", (v) => (!!v && isNaN(v)) || "Can't include numbers"],
    };
  },
  computed: {
    //Get states from store
    ...mapGetters("auth", ["userdata"]),
    ...mapGetters("auth", ["user_id"]),
    // ...mapActions(['DISPLAY_SEARCH'])
  },
  methods: {
    ...mapActions("auth", ["register"]), //Apply Register function from auth module
    CreateCV() {
      this.loading = true;

      const formData = jsonToFormData(this.cv);
      axios({
        method: "post",
        url: `http://localhost:3000/users/MyCV/${this.user_id}`,
        data: formData,
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
      }).then((r) => {
        if (r.status == 204) {
          this.loading = false;
          //this.dialog = false;
          this.snackbar1 = true;
          TokenService.saveCVstat(true);
          this.$router.push("/User/My_CV");
          router.push(router.history.current.query.redirect || '/');
          console.log(r);
        } else {
          this.loading = false;
          console.log(r);
        }
      })
      .catch((error) => {
          this.loading = false;
          this.overlay = false;
        });
    },
    // CreateCV() {
    //   this.loading = true
    //   if (this.Valid && this.Valid2 && this.Valid3 && this.Valid4)
    //   {
    //     ApiService.post(`http://localhost:3000/users/MyCV/${this.user_id}`,this.cv)
    //     .then((r)=>{
    //       if(r.status==204)
    //       {
    //         this.loading = false;
    //         //this.dialog = false;
    //         this.snackbar1=true;
    //         TokenService.saveCVstat(true);
    //         this.$router.push('/User/My_CV');
    //         console.log(r)
    //       }
    //       else
    //       {
    //         this.loading = false;
    //         console.log(r);
    //       }
    //     });
    //   }
    //   else {
    //   //Validation Error
    //   this.snackbar2 = true;
    //   this.loading = false
    //   console.log(r)
    //   }
    // },
    onUpdate(payload) {
      if (payload.isValid) {
        this.Validx = true;
        console.log(payload);
        this.cv.mobile_Phone = payload.formattedNumber;
        console.log(this.cv.mobile_Phone);
        // this.hasLoaderActive=false;
        // this.hasErrorActive= false;
      } else {
        this.Validx = false;
        // this.hasLoaderActive=true;
        // this.hasErrorActive= true;
      }
    },
  },
};
</script>
<style scoped>
.div {
  background-color: #fff3e0;
  width: 100%;
}
</style>
