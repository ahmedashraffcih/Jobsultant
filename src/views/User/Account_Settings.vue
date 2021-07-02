<template>
  <div class="div">
    <v-row justify="center">
      <v-col cols="5">
        <h1 class="mt-3 mb-3 " style='font-family: "Montserrat"; font-size: 32px; font-weight: 700;'>Account settings</h1>
        <v-card class="mb-5">
          <v-row>
            <v-card-title class="titles ml-13">Personal Information</v-card-title>
            <v-row justify="end" class="mr-15">
              <v-dialog transition="dialog-bottom-transition" max-width="1000" v-model="dialog3">
                <template v-slot:activator="{ on, attrs }">
                  <v-icon color="orange darken-2" v-bind="attrs" v-on="on">mdi-pencil</v-icon>
                </template>
                <template v-slot:default="dialog3">
                  <v-card>
                    <v-toolbar color="light-blue darken-4" dark>
                      <v-toolbar-title class="titles ml-5">Edit Personal Information</v-toolbar-title>
                      <v-spacer></v-spacer>
                      <v-icon class="mr-2" @click="dialog3.value = false">mdi-close</v-icon>
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
                            <v-text-field dense outlined label="First Name" v-model="user.fname" required :rules="nameRules" clearable>
                            </v-text-field>
                          </v-col>
                          <!-- Last Name -->
                          <v-col cols="5">
                            <v-text-field dense outlined label="Last Name" v-model="user.lname" required :rules="nameRules" clearable> </v-text-field>
                          </v-col>
                        </v-row>
                        <!-- /////////////////////////////////////////////////////////// -->
                        <!-- Birth date field -->
                        <!-- /////////////////////////////////////////////////////////// -->
                        <v-row justify="center">
                          <v-col cols="2">
                            <v-card-text>Birth Date</v-card-text>
                          </v-col>
                          <v-col cols="10" class="subtitle-2">
                            <v-dialog ref="dialog4" v-model="modal" :return-value.sync="user.cv.birth_Date" persistent width="290px">
                              <template v-slot:activator="{ on, attrs }">
                                <v-text-field v-model="user.cv.birth_Date" outlined flat dense v-bind="attrs" v-on="on" label="Select">
                                </v-text-field>
                              </template>
                              <template v-slot:default="modal">
                                <v-date-picker v-model="date" scrollable>
                                  <v-spacer></v-spacer>
                                  <v-btn text color="primary" @click="modal.value = false">
                                    Cancel
                                  </v-btn>
                                  <v-btn text color="primary" @click="$refs.dialog4.save(date)">
                                    OK
                                  </v-btn>
                                </v-date-picker>
                              </template>
                            </v-dialog>
                          </v-col>
                        </v-row>

                        <!-- /////////////////////////////////////////////////////////// -->
                        <!-- Gender date field -->
                        <!-- /////////////////////////////////////////////////////////// -->
                        <v-row justify="center">
                          <v-col cols="2">
                            <v-card-text>Gender</v-card-text>
                          </v-col>
                          <v-col cols="10">
                            <v-select v-model="user.cv.gender" dense outlined label="Gender" :items="items"> </v-select>
                          </v-col>
                        </v-row>
                        <!-- /////////////////////////////////////////////////////////// -->
                        <!-- Location date field -->
                        <!-- /////////////////////////////////////////////////////////// -->
                        <v-row justify="center">
                          <v-col cols="2">
                            <v-card-text>Location</v-card-text>
                          </v-col>
                          <v-col cols="10">
                            <v-combobox
                              dense
                              v-model="user.cv.residence_Location"
                              :items="locations"
                              outlined
                              hide-selected
                              clearable
                              persistent-hint
                            >
                            </v-combobox>
                          </v-col>
                        </v-row>
                      </v-form>
                      <v-row class="justify-end mr-1">
                        <!-- :disabled="!Valid" -->
                        <v-btn class="white--text" width="150px" color="light-blue darken-4" @click="editProfile()" :loading="loading">
                          Apply
                        </v-btn>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </template>
              </v-dialog>
            </v-row>
          </v-row>
          <v-divider></v-divider>
          <v-list class="ml-10" max-width="500px">
            <v-list-item>
              <v-list-item-title>Name</v-list-item-title>
              <v-list-item-subtitle>{{ user.fname }} {{ user.lname }}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Birth date</v-list-item-title>
              <v-list-item-subtitle v-if="user.cv">{{ user.cv.birth_Date }}</v-list-item-subtitle>
              <v-list-item-subtitle v-if="!user.cv">-</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Gender</v-list-item-title>
              <v-list-item-subtitle v-if="user.cv">{{ user.cv.gender }}</v-list-item-subtitle>
              <v-list-item-subtitle v-if="!user.cv">-</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Residence Location</v-list-item-title>
              <v-list-item-subtitle v-if="user.cv">{{ user.cv.residence_Location }}</v-list-item-subtitle>
              <v-list-item-subtitle v-if="!user.cv">-</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
        <!-- /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
        <!-- ///////////////////////----------------------Contact info Section------------------------////////////////////////// -->
        <v-card class="mb-5">
          <v-row>
            <v-card-title class="titles ml-13">Contact Information</v-card-title>
            <v-row justify="end" class="mr-15">
              <v-dialog transition="dialog-bottom-transition" max-width="800" v-model="dialog2">
                <template v-slot:activator="{ on, attrs }">
                  <v-icon color="orange darken-2" v-bind="attrs" v-on="on">mdi-pencil</v-icon>
                </template>
                <template v-slot:default="dialog2">
                  <v-card>
                    <v-toolbar color="light-blue darken-4" dark>
                      <v-toolbar-title class="titles ml-5">Edit Contact Information</v-toolbar-title>
                      <v-spacer></v-spacer>
                      <v-icon class="mr-2" @click="dialog2.value = false">mdi-close</v-icon>
                    </v-toolbar>

                    <v-card-text>
                      <v-form v-model="Valid2">
                        <v-row justify="center" class="mt-4">
                          <v-col cols="3">
                            <v-card-text>Email</v-card-text>
                          </v-col>
                          <v-col cols="9">
                            <v-text-field dense outlined label="New Email" v-model="user.account.Email" :rules="emailRules" clearable required>
                            </v-text-field>
                          </v-col>
                        </v-row>

                        <v-row justify="center" class="mb-3">
                          <v-col cols="3">
                            <v-card-text>Phone Number</v-card-text>
                          </v-col>
                          <v-col cols="9">
                            <VuePhoneNumberInput
                              id="phoneNumber1"
                              color="dodgerblue"
                              valid-color="green"
                              required
                              :error="hasErrorActive"
                              :loader="hasLoaderActive"
                              v-model="user.cv.mobile_Phone"
                              :rules="phoneRules"
                              clearable
                              @update="onUpdate"
                            />
                          </v-col>
                        </v-row>
                      </v-form>
                      <v-row class="justify-end mr-1">
                        <v-btn
                          class="white--text"
                          width="150px"
                          color="light-blue darken-4"
                          :disabled="!Valid2"
                          @click="editEmail()"
                          :loading="loading"
                        >
                          Apply
                        </v-btn>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </template>
              </v-dialog>
            </v-row>
          </v-row>
          <v-divider></v-divider>
          <v-list class="ml-10" max-width="500px">
            <v-list-item>
              <v-list-item-title>Email</v-list-item-title>
              <v-list-item-subtitle v-if="user.account.Email">{{ user.account.Email }}</v-list-item-subtitle>
              <v-list-item-subtitle v-if="!user.account.Email">-</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Mobile phone</v-list-item-title>
              <v-list-item-subtitle v-if="user.cv">{{ user.cv.mobile_Phone }}</v-list-item-subtitle>
              <v-list-item-subtitle v-if="!user.cv">-</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
        <!-- /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
        <!-- /////////////////////////----------------------Password Section------------------------//////////////////////////// -->
        <v-card class="mb-5">
          <v-row>
            <v-card-title class="titles ml-13">Password</v-card-title>
            <v-row justify="end" class="mr-15">
              <v-dialog transition="dialog-bottom-transition" max-width="600" v-model="dialog">
                <template v-slot:activator="{ on, attrs }">
                  <v-icon color="orange darken-2" v-bind="attrs" v-on="on">mdi-pencil</v-icon>
                </template>
                <template v-slot:default="dialog">
                  <v-card>
                    <v-toolbar color="light-blue darken-4" dark>
                      <v-toolbar-title class="titles ml-3">Change Your Password</v-toolbar-title>
                      <v-spacer></v-spacer>
                      <v-icon class="mr-2" @click="dialog.value = false">mdi-close</v-icon>
                    </v-toolbar>

                    <v-card-text>
                      <v-form v-model="Valid">
                        <v-text-field
                          class="mt-5"
                          dense
                          outlined
                          label="Old Password"
                          v-model="oldpassword"
                          :rules="passRules"
                          :append-icon="value1 ? 'mdi-eye-off' : 'mdi-eye'"
                          @click:append="() => (value1 = !value1)"
                          :type="value1 ? 'password' : 'text'"
                          required
                        >
                        </v-text-field>
                        <v-text-field
                          dense
                          outlined
                          label="New Password"
                          v-model="newpassord"
                          required
                          :rules="passRules"
                          :append-icon="value2 ? 'mdi-eye-off' : 'mdi-eye'"
                          @click:append="() => (value2 = !value2)"
                          :type="value2 ? 'password' : 'text'"
                          required
                        >
                        </v-text-field>
                        <v-text-field
                          dense
                          outlined
                          label="Confirm New Password"
                          v-model="confirmnewpassord"
                          required
                          :rules="passRules"
                          :append-icon="value3 ? 'mdi-eye-off' : 'mdi-eye'"
                          @click:append="() => (value3 = !value3)"
                          :type="value3 ? 'password' : 'text'"
                          required
                        >
                        </v-text-field>
                      </v-form>
                      <v-row class="justify-end ">
                        <v-btn
                          class="white--text mr-3"
                          width="150px"
                          color="light-blue darken-4"
                          :disabled="!Valid"
                          @click="editpassword()"
                          :loading="loading"
                        >
                          Confirm
                        </v-btn>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </template>
              </v-dialog>
            </v-row>
          </v-row>
          <v-list-item>
            <v-list-item-title class="ml-10">Change your account password</v-list-item-title>
          </v-list-item>
        </v-card>
        <!-- /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
        <!-- /////////////////////////-----------------------Notify Section-------------------------//////////////////////////// -->
        <v-card class="mb-5">
          <v-row>
            <v-card-title class="titles ml-13">Email notification</v-card-title>
            <v-row justify="end" class="mr-15">
              <v-icon color="orange darken-2">mdi-pencil</v-icon>
            </v-row>
          </v-row>
          <v-list-item>
            <v-list-item-title class="ml-10">
              Modify your Jobsultant.com email notifications settings.
            </v-list-item-title>
          </v-list-item>
        </v-card>
        <!-- /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
        <!-- /////////////////////////-----------------------Delete Section-------------------------//////////////////////////// -->
        <v-card class="mb-5">
          <v-row>
            <v-card-title class="titles ml-13">Delete My Account</v-card-title>
          </v-row>
          <v-list-item>
            <v-list-item-title class="ml-10">Permanently remove your account from Jobsultant.com</v-list-item-title>
          </v-list-item>
          <v-btn class="ml-14 mb-3" outlined>Delete My Account</v-btn>
        </v-card>
      </v-col>
    </v-row>
    <!-- /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
    <!-- ///////////////////////------------------------Snackbars Section-------------------------////////////////////////// -->

    <v-snackbar v-model="snackbar1" timeout = "2000" color="success" dark><v-icon class="mr-2">mdi-checkbox-marked-circle</v-icon> Your password changed successfully </v-snackbar>
    <v-snackbar v-model="snackbar2" timeout = "3000" color="warning" dark><v-icon class="mr-2">mdi-alert-outline</v-icon> Please enter the same new password twice in order to confirm it</v-snackbar>
    <v-snackbar v-model="snackbar3" timeout = "5000" color="error" dark><v-icon class="mr-2">mdi-alert-octagon-outline</v-icon> Old password is wrong </v-snackbar>
    <v-snackbar v-model="snackbar4" timeout = "3000" color="warning" dark><v-icon class="mr-2">mdi-alert-outline</v-icon> There's no change</v-snackbar>
    <v-snackbar v-model="snackbar5" timeout = "5000" color="error" dark><v-icon class="mr-2">mdi-alert-octagon-outline</v-icon> Email is already used </v-snackbar>
    <v-snackbar v-model="snackbar6" timeout = "2000" color="success" dark><v-icon class="mr-2">mdi-checkbox-marked-circle</v-icon> Your changes have been successfully saved </v-snackbar>
    
    <v-overlay :value="overlay" opacity="0.95" color="#01579B" >
        <semipolar-spinner
          class="justify-center"
          :animation-duration="1500"
          :size="120"
          color="#FF9800"
        />
    </v-overlay>
  </div>
</template>

<script>
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import { mapGetters, mapActions, mapMutations } from "vuex";
import ApiService from "../../services/api.service";
import TokenService from "../../services/storage.service";
import { FingerprintSpinner,SemipolarSpinner } from "epic-spinners";
export default {
  mounted() {
    this.getUser();
  },
  components: {
    VuePhoneNumberInput,
    FingerprintSpinner,
    SemipolarSpinner
  },
  data: () => ({
    //---------------
    //------------------------ Personal Information Section ------------------------\\
    user: {
      account: {},
      cv: {
        education: {},
        work_Experience: {},
        skills: {},
        languages: {},
      },
    },
    dialog3: false,
    overlay: true,
    snackbar4: false,
    snackbar6: false,
    //------------------------ Name Section  ------------------------\\
    firstname: "",
    lastname: "",
    //------------------------
    //------------------------ Date Picker ------------------------\\
    modal: false, //date picker Dialog
    date: null,
    //------------------------
    //------------------------ Gender Section  ------------------------\\
    items: ["Male", "Female"],
    locations: ["Egypt", "UAE", "USA", "Germany", "France", "England", "Australia"],
    Gender: "",
    Valid3: false,
    //------------------------
    //------------------------ Residence Location Section  ------------------------\\

    //##############################################################################\\

    //------------------------ Contact Information Section  ------------------------\\

    //------------------------ Email Section ------------------------\\
    email: "",
    Valid2: false, //Email Form Validation flag
    dialog2: false, //Email Dialog

    snackbar5: false,

    //------------------------ Phone Section ------------------------\\
    phoneNumber: null,
    results: {},
    hasLoaderActive: false,
    hasErrorActive: false,

    //##############################################################################\\

    //------------------------ Password Section ------------------------\\
    value1: String, //eye passowrd reveal
    value2: String, //eye passowrd reveal
    value3: String,
    oldpassword: "",
    newpassord: "",
    confirmnewpassord: "",
    Valid: false, //Password Form Validation flag
    dialog: false, //Passwrod Dialog
    snackbar1: false,
    snackbar2: false,
    snackbar3: false,
    //------------------------

    //##############################################################################\\

    loading: false, //loading till user change
    //------------------------

    //------------------------ Validation Rules ------------------------\\
    nameRules: [
      (v) => !!v || "Field is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      (v) => (!!v && isNaN(v)) || "Can't include numbers",
    ],
    phoneRules: [(v) => !!v || "Field is required"],
    emailRules: [(v) => !!v || "E-mail is required", (v) => /.+@.+\..+/.test(v) || "E-mail must be valid"],
    passRules: [(v) => !!v || "Password is required", (v) => (v && v.length >= 8) || "Password must be more than 8 characters"],
    //##############################################################################\\
  }),

  computed: {
    //Get states from store
    ...mapGetters("auth", ["accessToken"]),
    ...mapGetters("auth", ["user_id"]),
    // ...mapActions(['DISPLAY_SEARCH'])
  },
  methods: {
    ValidPass() {
      // check if user passowrd matches or not
      return this.newpassord === this.confirmnewpassord;
    },
    getUser() {
      ApiService.get(`http://localhost:3000/users/${this.user_id}`)
      .then((r) => {
        if (r.status == 200) {
          this.user = r.data;
          console.log(this.user);
          this.overlay = false;
        } else {
          console.log(r);
        }
      });
    },
    editProfile() {
      this.loading = true;

      ApiService.put(`http://localhost:3000/users/${this.user_id}`, {
        fname: this.user.fname,
        lname: this.user.lname,
        birth_Date: this.user.cv.birth_Date,
        gender: this.user.cv.gender,
        residence_Location: this.user.cv.residence_Location,
      })

        .then((r) => {
          if (r.status == 204) {
            this.getUser();
            this.loading = false;
            this.dialog3 = false;
            this.snackbar6 = true;
          } else {
            this.loading = false;
            console.log(this.user);
            this.snackbar4 = true;
          }
        })
        .catch((error) => {
          this.loading = false;
          //this.dialog3 = false;
          this.snackbar4 = true;
        });
    },
    editEmail() {
      this.loading = true;
      ApiService.put(`http://localhost:3000/EditProfile/EditEmail/${this.user.account._id}`, this.user.account)
        .then((r) => {
          console.log(r);
          if (r.status == 204) {
            console.log(this.user.account.Email);
            this.loading = false;
            this.dialog2 = false;
            this.snackbar6 = true;
            //this.getUser();
          } else {
            this.loading = false;
            this.snackbar5 = true;
            console.log("zby brdo");
          }
        })
        .catch((error) => {
          this.loading = false;
          this.snackbar5 = true;
          this.snackbar4 = true;
        });
    },

    log() {
      console.log(this.oldpassword);
      console.log(this.newpassord);
    },

    onUpdate(payload) {
      this.results = payload;
      if (payload.isValid) {
        console.log(this.results);
        // this.hasLoaderActive=false;
        // this.hasErrorActive= false;
      } else {
        // this.hasLoaderActive=true;
        // this.hasErrorActive= true;
      }
    },

    editpassword() {
      this.loading = true;
      let data = {
        oldPassword: this.oldpassword,
        password: this.newpassord,
        token: this.accessToken,
      };
      if (this.oldpassword != "" && this.newpassord != "" && this.ValidPass()) {
        ApiService.put("http://localhost:3000/EditProfile/EditPassword", data)
          .then((r) => {
            if (r.status == 204) {
              this.snackbar1 = true;
              this.oldpassword = "";
              this.newpassord = "";
              this.loading = false;
              this.dialog = false;
            }
          })
          .catch((error) => {
            console.log(error);
            this.loading = false;
            this.snackbar3 = true;
            this.oldpassword = "";
            this.newpassord = "";
          });
      } else {
        this.snackbar2 = true;
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.div {
  background-color: #e0e0e0;
  width: 100%;
}
.titles{
  font-family: "Montserrat"; 
  font-size: 20px; 
  font-weight: bold;
}
</style>
