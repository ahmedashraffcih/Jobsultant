<template>
  <v-row class="blue-grey lighten-5" justify="center">
    <v-col cols="4">
        <div class="form-header rounded-lg">
            <h1>Employer / Company Registration</h1>
            <p>Hire Smarter, Grow Faster</p>
        </div>
      
      <v-stepper v-model="e6" vertical mb-10>
        <v-stepper-step :complete="e6 > 1" step="1">
          Contact Information
        </v-stepper-step>

        <v-stepper-content step="1">
          <v-list class="mb-4" max-width="500px" dense>
            <v-list-item dense class="pl-2">
              <v-list-item-title>First Name</v-list-item-title>
              <v-list-item-subtitle
                ><v-text-field
                  hide-details
                  flat
                  dense
                  outlined
                  required
                ></v-text-field
              ></v-list-item-subtitle>
            </v-list-item>

            <v-list-item dense class="pl-2 mt-6">
              <v-list-item-title>Last Name</v-list-item-title>

              <v-list-item-subtitle
                ><v-text-field
                  hide-details
                  dense
                  outlined
                  flat
                  required
                ></v-text-field
              ></v-list-item-subtitle>
            </v-list-item>

            <v-list-item dense class="pl-2 mt-6">
              <v-list-item-title>Title</v-list-item-title>

              <v-list-item-subtitle
                ><v-text-field
                  hide-details
                  dense
                  outlined
                  flat
                  required
                  placeholder="e.g. HR Manager, CEO"
                ></v-text-field
              ></v-list-item-subtitle>
            </v-list-item>

            <v-list-item dense class="pl-2 mt-6">
              <v-list-item-title>Mobile Number</v-list-item-title>

              <v-list-item-subtitle
                ><v-text-field
                  hide-details
                  dense
                  outlined
                  flat
                  required
                ></v-text-field
              ></v-list-item-subtitle>
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
            <v-list-item dense class="pl-2">
              <v-list-item-title>Your Business Email</v-list-item-title>
              <v-list-item-subtitle
                ><v-text-field
                  hide-details
                  flat
                  dense
                  outlined
                  required
                ></v-text-field
              ></v-list-item-subtitle>
            </v-list-item>

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
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  @click:append="show1 = !show1"
                ></v-text-field
              ></v-list-item-subtitle>
            </v-list-item>

            <v-list-item dense class="pl-2 mt-6">
              <v-list-item-title>Confirm Password</v-list-item-title>
              <v-list-item-subtitle
                ><v-text-field
                  v-model="password"
                  hide-details
                  flat
                  dense
                  outlined
                  required
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
            <v-list-item dense class="pl-2">
              <v-list-item-title>Company Name</v-list-item-title>
              <v-list-item-subtitle
                ><v-text-field
                  hide-details
                  flat
                  dense
                  outlined
                  required
                ></v-text-field
              ></v-list-item-subtitle>
            </v-list-item>

            <v-list-item dense class="pl-2 mt-6">
              <v-list-item-title>Company Phone</v-list-item-title>
              <v-list-item-subtitle
                ><v-text-field
                  hide-details
                  flat
                  dense
                  outlined
                  required
                ></v-text-field
              ></v-list-item-subtitle>
            </v-list-item>

            <v-list-item dense class="pl-2 mt-6">
              <v-list-item-title>Industry of Company</v-list-item-title>

              <v-list-item-subtitle>
                <v-combobox
                  clearable
                  hide-details
                  flat
                  required
                  dense
                  outlined
                  solo
                ></v-combobox>
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>
          <v-btn rounded large block color="success" @click="e6 = 1"> Join JobSultunt As a Company </v-btn>
          <v-btn rounded large block text @click="e6 = 2"> Back </v-btn>
        </v-stepper-content>
      </v-stepper>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      e6: 1,
      show1: false,
      password: 'Password'
    };
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
</style>
