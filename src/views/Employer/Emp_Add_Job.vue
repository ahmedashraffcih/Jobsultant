<template>
  <v-row class="blue-grey lighten-5" justify="center">
    <v-col cols="6">
      <div class="form-header rounded-lg">
        <h1>Add New Job!</h1>
        <p>Tell job seekers what they need to know!</p>
      </div>
      <form class="form-header rounded-lg">
        <div>
          <h2>Job Details:</h2>
        </div>
        <v-text-field
          v-model="jobTitle"
          :rules="TitleRules"
          label="Job Title"
          required
          outlined
          dense
          
        ></v-text-field>

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

      <v-container >
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
                    No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
                    </v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </template>
            </v-combobox>
      </v-container>

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

        <v-row>
          <v-btn class="mr-4" color="success" @click="submit"> Post Job</v-btn>

          <v-spacer></v-spacer>

          <v-btn color="error" class="mr-2" @click="clear"> clear </v-btn>
        </v-row>
      </form>
    </v-col>
  </v-row>
</template>

<script>

 
//Vue.component('vue-phone-number-input', VuePhoneNumberInput);
export default {
    data () {
        return{
        types:[
            'Full-Time',
            'Part-Time',
            'Internship',
            'Freelance Project'
        ],
        levels:[
            'Manager',
            'Senior-level',
            'Junior-level',
            'Entry-level',
            'Student'
        ],
        skills:[
            'Gaming',
            'Programming', 
            'Vue', 
            'Vuetify'
        ],
        skillsBox: ['Programming'],
        search: null,
        skillsRulles: [(v) => v.length >= 3 || "Minimum of 3 skills" ],
        fieldRules: [(v) => !!v || "Field is required"],
        TitleRules: [
            (v) => !!v || "Field is required",
            (v) => (!!v && isNaN(v)) || "Can't include numbers",
        ],
        }
    },

      methods: {
        submit () {
            this.$v.$touch()
        },
        clear () {
            this.jobTitle = null
            this.careerLevel = null
            this.skillsBox = null
            this.description = null
            this.details = null
            
        },
    },
}
</script>


<style scoped>
.form-header {
  padding: 10px;
  padding-left: 20px;
  margin-bottom: 15px;
  background-color: white;
}
.MarginField{
    margin-top: 10px;
}
</style>