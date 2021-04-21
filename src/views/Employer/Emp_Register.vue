<template>
  <v-row class="blue-grey lighten-5" justify="center">
    <v-col cols="4">
        <div class="form-header rounded-lg">
            <h1>Employer / Company Registration</h1>
            <p>Hire Smarter, Grow Faster</p>
        </div>

      <v-stepper v-model="e6" vertical mb-10>
        <v-form v-model="Valid">
          <v-stepper-step :complete="e6 > 1" step="1">
            Contact Information
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-list class="mb-4" max-width="500px" dense>

        <!-- First Name -->
              <v-list-item dense class="pl-2">
                <v-list-item-title>First Name</v-list-item-title>
                <v-list-item-subtitle
                  ><v-text-field
                    v-model="firstname"
                    hide-details
                    flat
                    dense
                    outlined
                    :rules="nameRules"
                    required
                    placeholder="Enter your first name"
                  ></v-text-field
                ></v-list-item-subtitle>
              </v-list-item>

        <!-- Last Name -->
              <v-list-item dense class="pl-2 mt-6">
                <v-list-item-title>Last Name</v-list-item-title>

                <v-list-item-subtitle
                  ><v-text-field
                    v-model="lastname"
                    hide-details
                    dense
                    outlined
                    flat
                    :rules="nameRules"
                    required
                    placeholder="Enter your last name"
                  ></v-text-field
                ></v-list-item-subtitle>
              </v-list-item>

        <!-- Title -->
              <v-list-item dense class="pl-2 mt-6">
                <v-list-item-title>Title</v-list-item-title>

                <v-list-item-subtitle
                  ><v-text-field
                    v-model="title"
                    hide-details
                    dense
                    outlined
                    flat
                    required
                    :rules="titleRules"
                    placeholder="e.g. HR Manager, CEO"
                  ></v-text-field
                ></v-list-item-subtitle>
              </v-list-item>

        <!-- Mobile Number -->
              <v-list-item dense class="pl-2 mt-6">
                <v-list-item-title>Mobile Number</v-list-item-title>
                  <VuePhoneNumberInput  
                    size="sm" 
                    border-radius="4" 
                    v-model="phoneNumber" 
                    required = 'true'
                    color="orangered"
                    no-example = 'true'
                    default-country-code= "EG"
                    class="phone-number-width"
                    :rules="requiredRules"
                /> 
              </v-list-item>
            </v-list>

            <v-col cols="12" class="ma-0 pa-0 mb-5 ml-2">
              <v-btn color="primary" @click="e6 = 2"> Continue </v-btn>
            </v-col>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 2" step="2">
            Login Information
          </v-stepper-step>

          <v-stepper-content step="2"> 
            <v-list class="mb-4" max-width="500px" dense>

          <!-- E-mail --> 
              <v-list-item dense class="pl-2">
                <v-list-item-title>Your Business Email</v-list-item-title>
                <v-list-item-subtitle
                  ><v-text-field
                    v-model="email"
                    hide-details
                    flat
                    dense
                    outlined
                    required
                    :rules="emailRules"
                    placeholder="Enter business email"
                  ></v-text-field
                ></v-list-item-subtitle>
              </v-list-item>

          <!-- Password -->
              <v-list-item dense class="pl-2 mt-6">
                <v-list-item-title>New Password</v-list-item-title>
                <v-list-item-subtitle
                  ><v-text-field
                    v-model="password"
                    hide-details
                    flat
                    dense
                    outlined
                    required
                    :rules="passRules"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    @click:append="show1 = !show1"
                  ></v-text-field
                ></v-list-item-subtitle>
              </v-list-item>

          <!-- Confirm Password -->
              <v-list-item dense class="pl-2 mt-6">
                <v-list-item-title>Confirm Password</v-list-item-title>
                <v-list-item-subtitle
                  ><v-text-field
                    v-model="confirm_password"
                    hide-details
                    flat
                    dense
                    outlined
                    required
                    :rules="passRules"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    @click:append="show1 = !show1"
                  ></v-text-field
                ></v-list-item-subtitle>
              </v-list-item>

            </v-list>
            <v-btn color="primary" @click="e6 = 3"> Continue </v-btn>
            <v-btn text @click="e6 = 1"> Back </v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 3" step="3">
            Company Basic Information
          </v-stepper-step>

          <v-stepper-content step="3">
            <v-list class="mb-4" max-width="500px" dense>

            <!-- Company Name -->  
              <v-list-item dense class="pl-2">
                <v-list-item-title>Company Name</v-list-item-title>
                <v-list-item-subtitle
                  ><v-text-field
                    v-model="company_name"
                    hide-details
                    flat
                    dense
                    outlined
                    required
                    :rules="titleRules"
                    placeholder="Enter company name"
                  ></v-text-field
                ></v-list-item-subtitle>
              </v-list-item>

            <!-- Company Phone --> 
              <v-list-item dense class="pl-2 mt-6">
                <v-list-item-title>Company Phone</v-list-item-title>
                  <VuePhoneNumberInput
                    v-model="company_phoneNumber"  
                    size="sm" 
                    border-radius="4" 
                    required = 'true'
                    color="orangered"
                    no-example = 'true'
                    default-country-code= "EG"
                    class="phone-number-width"
                    :rules="requiredRules"
                /> 
              </v-list-item>

            <!-- Industry of Company -->
              <v-list-item dense class="pl-2 mt-6">
                <v-list-item-title>Industry of Company</v-list-item-title>
                <v-list-item-subtitle>
                  <v-combobox
                    v-model="industry" 
                    :items="industry_items"
                    clearable
                    hide-details
                    flat
                    required
                    :rules="requiredRules"
                    dense
                    outlined
                    solo
                    placeholder="Choose industry"
                  ></v-combobox> 
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
            <v-btn 
            rounded 
            large 
            block 
            color="success" 
            :disabled="!Valid"
            @click="tryRegister" :loading="loading" 
            to="/Employer/Emp_Profile"
            > Join JobSultunt As a Company </v-btn>
            <v-btn rounded large block text @click="e6 = 2"> Back </v-btn>
          </v-stepper-content>
          </v-form>
      </v-stepper>
      <!-- ======================================================================= -->
      <v-snackbar v-model="snackbar1" timeout="3000">Complete You Information as needed</v-snackbar>
      <v-snackbar v-model="snackbar2" timeout="1000" color="success" outlined dark> Registered </v-snackbar>
    <!-- ======================================================================= -->
    </v-col>
  </v-row>
</template>

<script>
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';

export default {
  components:{
        VuePhoneNumberInput
    },
  data() {
    return {
      e6: 1,
      show1: false,
      firstname:'',
      lastname:'',
      title:'',
      phoneNumber:'',
      email:'',
      password: 'Password',
      confirm_password:'Password',
      company_name:'',
      company_phoneNumber:'',
      industry:'',
      industry_items:[
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
      //=====================
      Valid: false, //Form Validation flag
      snackbar1: false,
      snackbar2: false,
      loading:false,//loading till user registerd

      //Validation Rules
      nameRules: [
        (v) => !!v || "Field is required",
        (v) => (v && v.length <= 15) || "Name must be less than 15 characters",
        (v) => (!!v && isNaN(v)) || "Can't include numbers",
        (v) => /^[a-zA-Z]+$/.test(v) || "Can't include special characters"
      ],
      titleRules: [
        (v) => !!v || "Title is required",
        (v) => (!!v && isNaN(v)) || "Can't include numbers",
        (v) => /^[a-zA-Z]+$/.test(v) || "Can't include special characters"
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passRules: [
        (v) => !!v || "Password is required",
        (v) => (v && v.length >= 8) || "Password must be more than 8 characters",
      ],
      requiredRules: [
        (v) => !!v || "Industry is required",
      ],
    };
  },
  // Methods
  methods: {
      
  }
};
</script>

<style scoped>
.form-header {
padding: 10px;
padding-left: 20px;
margin-bottom: 15px;
background-color: white;
}
.phone-number-width{
  width: 410px;
}
</style>