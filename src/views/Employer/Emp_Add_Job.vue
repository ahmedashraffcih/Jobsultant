<template>
  <v-row class="grey lighten-3" justify="center">
    <v-col cols="6">
      <v-card class="mb-5" elevation="0">
        <v-card-title class="ml-6">Add New Job!</v-card-title>
        <v-card-subtitle class="ml-6 light-blue--text text--darken-4">Tell job seekers what they need to know!</v-card-subtitle>
      </v-card>
      <v-card elevation="0">
        <v-form class="form-header rounded-lg">
          <v-card-title>Job Details</v-card-title>
          <v-row justify="center" class="pl-7 pr-7">
            <v-text-field v-model="Job.title" :rules="TitleRules" label="Job Title" required outlined dense max-width="100px"></v-text-field>
          </v-row>
          <v-row justify="center" class="pl-7 pr-7">
            <v-select v-model="Job.type" :items="types" label="Job Type" class="MarginField" required outlined dense></v-select>
          </v-row>
          <v-row justify="center" class="pl-7 pr-7">
            <v-select v-model="Job.career_Level" :items="levels" label="Career Level" class="MarginField" required outlined dense></v-select>
          </v-row>
          <v-row justify="center" class="pl-7 pr-7">
            <v-combobox
              v-model="Job.skills"
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
          </v-row>
          <v-row justify="center" class="pl-7 pr-7 mt-4">
            <v-textarea v-model="Job.description" label="Job Description" auto-grow rows="2" :rules="fieldRules" :counter="650" outlined dense>
            </v-textarea>
          </v-row>
          <v-row class="mt-4 mb-4">
            <v-btn class="ml-7" dark color="light-blue darken-4" :loading="loading1" @click="PostJob()"> Post Job</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="orange darken-2" dark class="mr-7" :loading="loading2" @click="clear"> clear </v-btn>
          </v-row>
        </v-form>
      </v-card>
      <v-alert v-model="alert1" dense transition="scale-transition" dismissible type="success">
        Your job posted successfully!
      </v-alert>
      <v-alert v-model="alert2" dense transition="scale-transition" dismissible type="warning">
        Please complete required fields!
      </v-alert>
    </v-col>
  </v-row>
</template>

<script>
//Vue.component('vue-phone-number-input', VuePhoneNumberInput);

import ApiService from "../../services/api.service";
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  computed: {
    //Get states from store
    ...mapGetters("auth", ["userdata"]),
    ...mapGetters("auth", ["user_id"]),
    // ...mapActions(['DISPLAY_SEARCH'])
  },
  data() {
    return {
      types: ["Full-Time", "Part-Time", "Internship", "Freelance"],
      levels: ["Senior", "Junior", "Entry level"],
      skills: ["Gaming", "Programming", "Vue", "Vuetify"],
      search: null,
      // Rules
      skillsRulles: [(v) => v.length >= 3 || "Minimum of 3 skills"],
      fieldRules: [(v) => !!v || "Field is required"],
      TitleRules: [(v) => !!v || "Field is required", (v) => (!!v && isNaN(v)) || "Can't include numbers"],

      // Job Data
      Job: {
        title: "",
        career_Level: "",
        type: "",
        description: "",
        skills: [],
      },

      // Loaders
      loading1: false,
      loading2: false,
      alert1: false,
      alert2: false,
    };
  },
  methods: {
    PostJob() {
      this.loading1 = true;
      if (this.Job.title != "" && this.Job.description != "") {
        ApiService.post(`http://localhost:3000/jobs/AddJob/${this.user_id}`, this.Job)
          .then((r) => {
            console.log(this.user_id);
            console.log(this.Job);
            console.log(r);
            if (r.status == 204) {
              console.log(r);
              this.loading1 = false;
              this.alert1 = true;
              this.alert2 = false;
              this.$router.push('/Employer/Emp_Manage_Jobs');
            } else {
              console.log(r);
              console.log(this.user);
              this.loading1 = false;
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.alert2 = true;
        this.loading1 = false;
      }
    },

    clear() {
      this.Job.title = null;
      this.Job.career_Level = null;
      this.Job.skills = null;
      this.Job.description = null;
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
.MarginField {
  margin-top: 10px;
}
</style>
