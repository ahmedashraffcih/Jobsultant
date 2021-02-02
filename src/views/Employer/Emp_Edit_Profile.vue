<template>
  <v-row class="blue-grey lighten-5" justify="center">
    <v-col cols="6">
      <div class="form-header rounded-lg">
        <h1>About your company</h1>
        <p>Tell job seekers what they need to know!</p>
      </div>
      <form class="form-header rounded-lg">
        <div>
          <h2>Company Basic Information:</h2>
        </div>
        <v-text-field
          v-model="companyName"
          :rules="CompRules"
          :counter="20"
          label="Company Name"
          outlined
          dense
          
        ></v-text-field>

        <VuePhoneNumberInput size="lg" border-radius="4" v-model="phoneNumber" />
        <!--
        <v-text-field
          v-model="phoneNumber"
          :rules="nameRules"
          :counter="11"
          label="Company Number"
        ></v-text-field>
        -->

        <v-select
          v-model="industryOfCompany"
          :items="industries"
          :error-messages="selectErrors"
          label="Industry of company"
          class="MarginIndustry"
          required
          outlined
          dense
        ></v-select>

        <div>
          <h2>More Details about Your Company:</h2>
        </div>

        <v-textarea
          v-model="overview"
          label="Company overview"
          auto-grow
          rows="2"
          :counter="650"
          outlined
          dense
        >
        </v-textarea>

        <v-text-field
          v-model="website"
          label="Website"
          :rules="webRules"
          outlined
          dense
        ></v-text-field>

        <v-select
          v-model="companySize"
          :items="sizes"
          :error-messages="selectErrors"
          label="Company Size"
          outlined
          dense
        ></v-select>

        <v-text-field
          v-model="headquarters"
          :error-messages="headquartersErrors"
          label="Headquarters"
          outlined
          dense
        ></v-text-field>

        <v-select
          v-model="yearFounded"
          :items="years"
          label="Year founded"
          outlined
          dense
        ></v-select>

        <v-row>
          <v-btn class="mr-4" color="success" @click="submit"> Apply Edits</v-btn>

          <v-spacer></v-spacer>

          <v-btn color="error" class="mr-2" @click="clear"> clear </v-btn>
        </v-row>
      </form>
    </v-col>
  </v-row>
</template>

<script>
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
 
//Vue.component('vue-phone-number-input', VuePhoneNumberInput);
export default {
    components:{
        VuePhoneNumberInput
    },
    data () {
        return{
        companyName: '',
        phoneNumber: '',
        industryOfCompany: '',
        industries:[
            'Accounting',
            'Advertising',
            'Airlines',
            'Banking',
            'Computer Software',
            'Construction',
            'Education',
            'Government',
            'Health',
            'Insurance',
            'Real Estate',
            'Retails',
            'Sports',
            'Telecom Services'
        ],
        overview: '',
        website: null,
        companySize: '',
        sizes:[
            '10-49',
            '50-149',
            '150-200',
            'More than 200 employee'
        ],
        headquarters:'',
        yearFounded:'',
        years:[
            '2021',
            '2020',
            '2019',
            '2018',
            '2017',
            '2016',
            '2015',
            '2014',
            '2013',
            '2012',
            '2011',
            '2010',
            '2009',
            '2008',
            '2007',
            '2006',
            '2005',
            '2004',
            '2003',
            '2002',
            '2001',
            '2000',
            '1999',
            '1998',
            '1997',
            '1996',
            '1995',
            '1994',
            '1993',
            '1992',
            '1991',
            '1990',
            
        ],
        nameRules: [(v) => !!v || "Field is required"],
        CompRules: [
            (v) => !!v || "Field is required",
            (v) => (!!v && isNaN(v)) || "Can't include numbers",
        ],
        webRules: [
            (v) => /.+@.+\..+/.test(v) || "website must be valid",
        ],

        }
    },

      methods: {
        submit () {
            this.$v.$touch()
        },
        clear () {
            this.companyName = ''
            this.phoneNumber = ''
            this.industryOfCompany = null
            this.overview = ''
            this.website = ''
            this.companySize = null
            this.headquarters = ''
            this.yearFounded = null
            
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
.MarginIndustry{
    margin-top: 20px;
}
</style>