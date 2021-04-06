<template>
  <div class="div">
    <v-row justify="center">
      <v-col cols="4">
        <h1>Welcome to Jobsultant.com, {{userdata.firstName}}!</h1>
        <p>Let's go ahead and build your CV. It will only take 3 minutes.</p>
        <v-stepper v-model="e6" vertical>
          <v-stepper-step :complete="e6 > 1" step="1">
            What is your current (or last) position?
            <small class="mt-2">You Can skip this</small>
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-form v-model="Valid">
              <v-list class="mb-4" max-width="500px" dense>
                <v-list-item class="pl-2">
                  <v-row>
                    <v-col cols="12" class="subtitle-2">
                      <span>What is the job title of this position?</span>
                      <v-text-field
                        flat
                        dense
                        outlined
                        required
                        v-model="JobTitle"
                        :rules="nameRules"
                        class="mt-2"
                      >
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
                        v-model="CompName"
                        :rules="nameRules"
                        class="mt-2"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-list-item>

                <v-list-item dense class="pl-2">
                  <v-row>
                    <v-col cols="12" class="subtitle-2">
                      <span>Start date</span>
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
                            dense
                            v-bind="attrs"
                            v-on="on"
                            class="mt-3"
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
                      </v-dialog>
                    </v-col>
                  </v-row>
                </v-list-item>
                
                <v-list-item dense class="pl-2">
                  <v-row>
                    <v-col cols="12" class="subtitle-2">
                      <span>End date</span>
                      <v-checkbox @click="datecondition=false" v-model="checkbox" flat label="Till Now"></v-checkbox>
                      <v-dialog
                        ref="dialog2"
                        v-model="endmodal"
                        :return-value.sync="Enddate"
                        persistent
                        width="290px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-if="datecondition"
                            v-model="Enddate"
                            readonly
                            outlined
                            flat
                            dense
                            v-bind="attrs"
                            v-on="on"
                            class="mt-3"
                          ></v-text-field>
                        </template>
                        <v-date-picker v-model="Enddate" scrollable>
                          <v-spacer></v-spacer>
                          <v-btn text color="primary" @click="endmodal = false">
                            Cancel
                          </v-btn>
                          <v-btn
                            text
                            color="primary"
                            @click="$refs.dialog2.save(Enddate)"
                          >
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
                      v-model="JobLoc"
                      :rules="nameRules"
                      class="mt-3"
                    ></v-combobox>
                    </v-col>
                  </v-row>
                </v-list-item>
                <v-list-item dense class="pl-2">
                  <v-row>
                    <v-col cols="12" class="subtitle-2">
                  <span>Company Industry</span>

                    <v-combobox
                      clearable
                      flat
                      required
                      dense
                      outlined
                      solo
                      :items="IndustryItems"
                      v-model="Industry"
                      :rules="CompRules"
                      class="mt-3"
                    ></v-combobox>
                    </v-col>
                  </v-row>
                </v-list-item>
              </v-list>
            </v-form>
            
            <v-col cols="12" class="ma-0 pa-0 mb-5 ml-2">
              <v-btn :disabled="!Valid" color="primary" @click="e6 = 2">
                Continue
              </v-btn>
            </v-col>
            <v-col cols="12" class="ma-0 pa-0 ml-2">
              <p>I have no experience / still studying</p>
            </v-col>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 2" step="2">
            What kind of job are you looking for?
          </v-stepper-step>

          <v-stepper-content step="2">
            <v-form v-model="Valid2">
            <v-list class="mb-4" max-width="500px" dense>
              <v-list-item dense class="pl-2">
                <v-list-item-title>Job title(s)</v-list-item-title>
                <v-list-item-subtitle>
                  <v-text-field flat dense outlined required :rules="nameRules"></v-text-field>
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item dense class="pl-2">
                <v-list-item-title>Preferred job role</v-list-item-title>

                <v-list-item-subtitle>
                  <v-combobox
                    :rules="nameRules"
                    clearable
                    flat
                    required
                    dense
                    outlined
                    solo
                  >
                  </v-combobox>
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item dense class="pl-2">
                <v-list-item-title>Job Location</v-list-item-title>
                <v-row class="ma-0 pa-0">
                  <v-col cols="6" class="ma-0 pa-0 pr-1">
                    <v-list-item-subtitle>
                      <v-select
                        required
                        flat
                        dense
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
                        outlined
                        placeholder="Visa"
                      ></v-select>
                    </v-list-item-subtitle>
                  </v-col>
                </v-row>
              </v-list-item>

              <v-list-item dense class="pl-2">
                <v-list-item-title>Job Level</v-list-item-title>

                <v-list-item-subtitle>
                  <v-combobox
                    :rules="nameRules"
                    clearable
                    flat
                    required
                    dense
                    outlined
                    solo
                  >
                  </v-combobox>
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
            </v-form>
            <v-btn :disabled="!Valid2" color="primary" @click="e6 = 3"> Continue </v-btn>
            <v-btn text @click="e6 = 1"> Back </v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 3" step="3">
            Tell us about your education.
          </v-stepper-step>

          <v-stepper-content step="3">
            <v-form v-model="Valid3">
            <v-list class="mb-4" max-width="500px" dense>
              <v-list-item dense class="pl-2">
                <v-list-item-title>Degree</v-list-item-title>
                <v-list-item-subtitle>
                  <v-combobox
                    clearable
                    :rules="nameRules"
                    flat
                    required
                    dense
                    outlined
                    solo
                  >
                  </v-combobox>
                  </v-list-item-subtitle>
              </v-list-item>

              <v-list-item dense class="pl-2">
                <v-list-item-title>University or institution</v-list-item-title>

                <v-list-item-subtitle>
                  <v-combobox
                    :rules="nameRules"
                    clearable
                    flat
                    required
                    dense
                    outlined
                    solo
                  >
                  </v-combobox>
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item dense class="pl-2">
                <v-list-item-title>Country</v-list-item-title>

                <v-list-item-subtitle>
                  <v-combobox
                    clearable
                    flat
                    required
                    dense
                    outlined
                    solo
                    :rules="nameRules"
                  >
                  </v-combobox>
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item dense class="pl-2">
                <v-list-item-title>City</v-list-item-title>

                <v-list-item-subtitle>
                  <v-combobox
                    clearable
                    flat
                    required
                    dense
                    outlined
                    solo
                    :rules="nameRules"
                  >
                  </v-combobox>
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item dense class="pl-2">
                <v-list-item-title>Field of study (Major)</v-list-item-title>

                <v-list-item-subtitle>
                  <v-combobox
                    clearable
                    flat
                    required
                    dense
                    outlined
                    solo
                    :rules="nameRules"
                  >
                  </v-combobox>
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item dense class="pl-2">
                <v-list-item-title>Graduation Date</v-list-item-title>
                <v-row class="ma-0 pa-0">
                  <v-col cols="6" class="ma-0 pa-0 pr-1">
                    <v-list-item-subtitle>
                      <v-select
                        required
                        flat
                        dense
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
                        outlined
                        placeholder="Year"
                      >
                      </v-select>
                    </v-list-item-subtitle>
                  </v-col>
                </v-row>
              </v-list-item>
            </v-list>
            </v-form>
            <v-btn :disabled="!Valid3" color="primary" @click="e6 = 4"> Continue </v-btn>
            <v-btn text @click="e6 = 2"> Back </v-btn>
          </v-stepper-content>

          <v-stepper-step step="4">
            Make it easy for employers to contact you.<br />Tell them a bit about
            yourself.</v-stepper-step
          >
          <v-stepper-content step="4">
            <v-form v-model="Valid4">
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

              <v-list-item dense class="pl-2">
                <v-list-item-title>Your nationality</v-list-item-title>

                <v-list-item-subtitle>
                  <v-combobox
                    :rules="nameRules"
                    clearable
                    flat
                    required
                    dense
                    outlined
                    solo
                  ></v-combobox>
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item dense class="pl-2">
                <v-list-item-title>Residence country</v-list-item-title>

                <v-list-item-subtitle>
                  <v-combobox
                    :rules="nameRules"
                    clearable
                    flat
                    required
                    dense
                    outlined
                    solo
                  ></v-combobox>
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item dense class="pl-2">
                <v-list-item-title>City</v-list-item-title>

                <v-list-item-subtitle>
                  <v-combobox
                    :rules="nameRules"
                    clearable
                    flat
                    required
                    dense
                    outlined
                    solo
                  >
                  </v-combobox>
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item dense class="pl-2">
                <v-list-item-title>Visa Status in Country</v-list-item-title>

                <v-list-item-subtitle>
                  <v-combobox
                    :rules="nameRules"
                    clearable
                    flat
                    required
                    dense
                    outlined
                    solo
                  ></v-combobox>
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item dense class="pl-2">
                <v-list-item-title>Phone Number</v-list-item-title>

                <v-list-item-subtitle>
                  <v-combobox
                    :rules="nameRules"
                    clearable
                    flat
                    required
                    dense
                    outlined
                    solo
                  ></v-combobox>
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
            </v-form>
            <v-btn :disabled="!Valid4" color="primary" to="/"> Continue </v-btn>
            <v-btn text @click="e6 = 3"> Back </v-btn>
          </v-stepper-content>
        </v-stepper>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      e6: 1,
      datecondition:true,
      JobTitle: "",
      CompName: "",
      JobLoc: "",
      Industry: "",
      IndustryItems:[],
      Valid: false, //section 1
      Valid2: false, //section 2
      Valid3: false, //section 3
      Valid4: false, //section 4
      modal: false,
      endmodal:false,
      date: null,
      Enddate:null,
      checkbox: false,
      nameRules: [(v) => !!v || "Field is required"],
      CompRules: [
        (v) => !!v || "Field is required",
        (v) => (!!v && isNaN(v)) || "Can't include numbers",
      ],
    };
  },
  computed: {
    //Get states from store
    ...mapGetters("auth", ["userdata"]),
    // ...mapActions(['DISPLAY_SEARCH'])
  },
};
</script>
<style scoped>
.div {
  background-color: #a8d0e6;
  width: 100%;
}
</style>