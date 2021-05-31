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
            <v-text-field
              v-model="jobTitle"
              :rules="TitleRules"
              label="Job Title"
              required
              outlined
              dense
              max-width="100px"
            ></v-text-field>
          </v-row>
          <v-row justify="center" class="pl-7 pr-7">
            <v-select
              v-model="jobType"
              :items="types"
              :error-messages="selectErrors"
              label="Job Type"
              class="MarginField"
              required
              outlined
              dense
            ></v-select>
          </v-row>
          <v-row justify="center" class="pl-7 pr-7">
            <v-select
              v-model="careerLevel"
              :items="levels"
              :error-messages="selectErrors"
              label="Career Level"
              class="MarginField"
              required
              outlined
              dense
            ></v-select>
          </v-row>
          <v-row justify="center" class="pl-7 pr-7">
            <v-combobox
              v-model="skillsBox"
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
            <v-textarea
              v-model="description"
              label="Job Description"
              auto-grow
              rows="2"
              :rules="fieldRules"
              :counter="650"
              outlined
              dense
            >
            </v-textarea>
          </v-row>
          <v-row justify="center" class="pl-7 pr-7 mt-4">
            <v-textarea
            v-model="details"
            label="Job Details"
            auto-grow
            rows="2"
            :rules="fieldRules"
            :counter="650"
            outlined
            dense
          >
          </v-textarea>
          </v-row>
          <v-row class="mt-4 mb-4">
            <v-btn class="ml-7" dark color="light-blue darken-4" @click="submit"> Post Job</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="orange darken-2" dark class="mr-7" @click="clear"> clear </v-btn>
          </v-row>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
//Vue.component('vue-phone-number-input', VuePhoneNumberInput);
export default {
  data() {
    return {
      types: ["Full-Time", "Part-Time", "Internship", "Freelance Project"],
      levels: [
        "Manager",
        "Senior-level",
        "Junior-level",
        "Entry-level",
        "Student",
      ],
      skills: ["Gaming", "Programming", "Vue", "Vuetify"],
      skillsBox: ["Programming"],
      search: null,
      skillsRulles: [(v) => v.length >= 3 || "Minimum of 3 skills"],
      fieldRules: [(v) => !!v || "Field is required"],
      TitleRules: [
        (v) => !!v || "Field is required",
        (v) => (!!v && isNaN(v)) || "Can't include numbers",
      ],
    };
  },
  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.jobTitle = null;
      this.careerLevel = null;
      this.skillsBox = null;
      this.description = null;
      this.details = null;
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
