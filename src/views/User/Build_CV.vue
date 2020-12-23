<template>
  <v-row justify="center">
    <v-col cols="4">
      <h1>Welcome to Jobsultant.com, Username!</h1>
      <p>Let's go ahead and build your CV. It will only take 3 minutes.</p>
      <v-stepper v-model="e6" vertical>
        <v-stepper-step :complete="e6 > 1" step="1">
          What is your current (or last) position?
          <small class="mt-2">You Can skip this</small>
        </v-stepper-step>

        <v-stepper-content step="1">
          <v-list class="mb-4" max-width="500px" dense>
            <v-list-item dense class="pl-2">
              <v-list-item-title
                >What is the job title<br />of this position?</v-list-item-title
              >
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
              <v-list-item-title>Company name</v-list-item-title>

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
              <v-list-item-title>Start date</v-list-item-title>
              <v-row class="ma-0 pa-0">
                <v-col cols="6" class="ma-0 pa-0 pr-1">
                  <v-list-item-subtitle>
                    <v-select
                      required
                      flat
                      dense
                      hide-details
                      outlined
                      placeholder="Month"
                    ></v-select>
                  </v-list-item-subtitle>
                </v-col>
                <v-col cols="6" class="ma-0 pa-0 pl-1">
                  <v-list-item-subtitle>
                    <v-select
                      required
                      flat
                      dense
                      hide-details
                      outlined
                      placeholder="Year"
                    ></v-select>
                  </v-list-item-subtitle>
                </v-col>
              </v-row>
            </v-list-item>
            <v-list-item dense class="pl-2 mt-6">
              <v-list-item-title>End date</v-list-item-title>

              <v-row class="ma-0 pa-0 pl-3">
                <v-col cols="12" class="ma-0 pa-0 mb-4">
                  <v-checkbox v-model="checkbox" flat hide-details></v-checkbox>
                </v-col>
                <v-col cols="6" class="ma-0 pa-0 pr-1">
                  <v-list-item-subtitle>
                    <v-select
                      required
                      flat
                      dense
                      hide-details
                      outlined
                      placeholder="Month"
                    ></v-select>
                  </v-list-item-subtitle>
                </v-col>
                <v-col cols="6" class="ma-0 pa-0 pl-1">
                  <v-list-item-subtitle>
                    <v-select
                      required
                      flat
                      dense
                      hide-details
                      outlined
                      placeholder="Year"
                    ></v-select>
                  </v-list-item-subtitle>
                </v-col>
              </v-row>
            </v-list-item>

            <v-list-item dense class="pl-2 mt-6">
              <v-list-item-title>Job Location</v-list-item-title>

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

            <v-list-item dense class="pl-2 mt-6">
              <v-list-item-title
                >Which job field does<br />
                this title fall under?
              </v-list-item-title>

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

            <v-list-item dense class="pl-2 mt-6">
              <v-list-item-title>Company Industry</v-list-item-title>

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
          <v-col cols="12" class="ma-0 pa-0 mb-5 ml-2">
            <v-btn color="primary" @click="e6 = 2"> Continue </v-btn>
          </v-col>
          <v-col cols="12" class="ma-0 pa-0 ml-2">
            <p>I have no experience / still studying</p>
          </v-col>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 2" step="2">
          What kind of job are you looking for?
        </v-stepper-step>

        <v-stepper-content step="2">
          <v-list class="mb-4" max-width="500px" dense>
            <v-list-item dense class="pl-2">
              <v-list-item-title>Job title(s)</v-list-item-title>
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
              <v-list-item-title>Preferred job role</v-list-item-title>

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
            <v-list-item dense class="pl-2 mt-6">
              <v-list-item-title>Job Location</v-list-item-title>
              <v-row class="ma-0 pa-0">
                <v-col cols="6" class="ma-0 pa-0 pr-1">
                  <v-list-item-subtitle>
                    <v-select
                      required
                      flat
                      dense
                      hide-details
                      outlined
                      placeholder="Location"
                    ></v-select>
                  </v-list-item-subtitle>
                </v-col>
                <v-col cols="6" class="ma-0 pa-0 pl-1">
                  <v-list-item-subtitle>
                    <v-select
                      required
                      flat
                      dense
                      hide-details
                      outlined
                      placeholder="Visa"
                    ></v-select>
                  </v-list-item-subtitle>
                </v-col>
              </v-row>
            </v-list-item>

            <v-list-item dense class="pl-2 mt-6">
              <v-list-item-title>Job Level </v-list-item-title>

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
          <v-btn color="primary" @click="e6 = 3"> Continue </v-btn>
          <v-btn text @click="e6 = 1"> Back </v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 3" step="3">
          Tell us about your education.
        </v-stepper-step>

        <v-stepper-content step="3">
          <v-list class="mb-4" max-width="500px" dense>
            <v-list-item dense class="pl-2">
              <v-list-item-title>Degree</v-list-item-title>
              <v-list-item-subtitle
                ><v-combobox
                  clearable
                  hide-details
                  flat
                  required
                  dense
                  outlined
                  solo
                ></v-combobox
              ></v-list-item-subtitle>
            </v-list-item>

            <v-list-item dense class="pl-2 mt-6">
              <v-list-item-title>University or institution</v-list-item-title>

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
            <v-list-item dense class="pl-2 mt-6">
              <v-list-item-title>Country</v-list-item-title>

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
            <v-list-item dense class="pl-2 mt-6">
              <v-list-item-title>City</v-list-item-title>

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
            <v-list-item dense class="pl-2 mt-6">
              <v-list-item-title>Field of study (Major)</v-list-item-title>

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
            <v-list-item dense class="pl-2 mt-6">
              <v-list-item-title>Graduation Date</v-list-item-title>
              <v-row class="ma-0 pa-0">
                <v-col cols="6" class="ma-0 pa-0 pr-1">
                  <v-list-item-subtitle>
                    <v-select
                      required
                      flat
                      dense
                      hide-details
                      outlined
                      placeholder="Month"
                    ></v-select>
                  </v-list-item-subtitle>
                </v-col>
                <v-col cols="6" class="ma-0 pa-0 pl-1">
                  <v-list-item-subtitle>
                    <v-select
                      required
                      flat
                      dense
                      hide-details
                      outlined
                      placeholder="Year"
                    ></v-select>
                  </v-list-item-subtitle>
                </v-col>
              </v-row>
            </v-list-item>
          </v-list>
          <v-btn color="primary" @click="e6 = 4"> Continue </v-btn>
          <v-btn text @click="e6 = 2"> Back </v-btn>
        </v-stepper-content>

        <v-stepper-step step="4">
          Make it easy for employers to contact you.<br />Tell them a bit about
          yourself.</v-stepper-step
        >
        <v-stepper-content step="4">
          <v-list class="mb-4" max-width="500px" dense>
            <v-list-item dense class="pl-2">
              <v-list-item-title>Birth date</v-list-item-title>
              <v-list-item-subtitle>
                <v-dialog
                  ref="dialog"
                  v-model="modal"
                  :return-value.sync="date"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      readonly
                      outlined
                      flat
                      hide-details
                      dense
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="modal = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.dialog.save(date)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog></v-list-item-subtitle
              >
            </v-list-item>

            <v-list-item dense class="pl-2 mt-6">
              <v-list-item-title>Your nationality</v-list-item-title>

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
            <v-list-item dense class="pl-2 mt-6">
              <v-list-item-title>Residence country</v-list-item-title>

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
            <v-list-item dense class="pl-2 mt-6">
              <v-list-item-title>City</v-list-item-title>

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
            <v-list-item dense class="pl-2 mt-6">
              <v-list-item-title>Visa Status in Country</v-list-item-title>

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
            <v-list-item dense class="pl-2 mt-6">
              <v-list-item-title>Phone Number</v-list-item-title>

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
          <v-btn color="primary" @click="e6 = 1"> Continue </v-btn>
          <v-btn text @click="e6 = 3"> Back </v-btn>
        </v-stepper-content>
      </v-stepper>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      e6: 1
    };
  }
};
</script>
