<template>
  <div class="div">
    <v-row justify="center">
      <v-col cols="5">
        <h1 class="display-1 mt-3 mb-10 white--text">My Account</h1>
        <v-card class="mb-5">
          <v-row>
            <v-card-title class="ml-13">Personal Information</v-card-title>
            <v-row justify="end" class="mr-15">
              <v-dialog
                  transition="dialog-bottom-transition"
                  max-width="1000"
                  v-model="dialog3"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon  v-bind="attrs" v-on="on">mdi-pencil</v-icon>
                  </template>
                  <template v-slot:default="dialog3">
                    <v-card>
                      <v-toolbar
                        color="#24305E"
                        dark>
                        Edit Personal Information
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
                              <v-text-field
                                dense
                                outlined
                                label="First Name"
                                v-model="firstname"
                                required
                                :rules="nameRules"
                              >
                              </v-text-field>
                            </v-col>
                            <!-- Last Name -->
                            <v-col cols="5">
                              <v-text-field
                                dense
                                outlined
                                label="Last Name"
                                v-model="lastname"
                                required
                                :rules="nameRules"
                              >
                              </v-text-field>
                            </v-col>
                          </v-row>
                          <!-- /////////////////////////////////////////////////////////// -->
                          <!-- Birth date field -->
                          <!-- /////////////////////////////////////////////////////////// -->
                          <v-row justify="center" >
                            <v-col cols="2">
                              <v-card-text>Birth Date</v-card-text>
                            </v-col>
                            <v-col cols="10" class="subtitle-2">
                              <v-dialog
                                ref="dialog4"
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
                                    label="Select"
                                  >
                                  </v-text-field>
                                </template>
                                <template v-slot:default="modal">
                                <v-date-picker v-model="date" scrollable>
                                  <v-spacer></v-spacer>
                                  <v-btn text color="primary" @click="modal.value = false">
                                    Cancel
                                  </v-btn>
                                  <v-btn
                                    text
                                    color="primary"
                                    @click="$refs.dialog4.save(date)"
                                  >
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
                              <v-select
                                dense
                                outlined
                                label="Gender"
                                :items="items"
                                >
                              </v-select>
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
                              <v-select
                                dense
                                outlined
                                label="Location"
                                :items="items"
                                >
                              </v-select>
                            </v-col>
                          </v-row>
                        </v-form>
                        <v-row class="justify-space-between">
                          <v-btn
                            width="120px"
                            class="ml-6 white--text"
                            color="#24305E"
                            
                            @click="editemail()":loading="loading">
                            Save
                          </v-btn>
                          <v-btn
                            text
                            @click="dialog3.value = false">
                            Close
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
              <v-list-item-subtitle>{{userdata.firstName}} {{userdata.lastName}}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Birth date</v-list-item-title>
              <v-list-item-subtitle>-</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Gender</v-list-item-title>
              <v-list-item-subtitle>-</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Residence Location</v-list-item-title>
              <v-list-item-subtitle>-</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
<!-- /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- ///////////////////////----------------------Contact info Section------------------------////////////////////////// -->
        <v-card class="mb-5">
          <v-row>
            <v-card-title class="ml-13">Contact Information</v-card-title>
            <v-row justify="end" class="mr-15">
              <v-dialog
                  transition="dialog-bottom-transition"
                  max-width="600"
                  v-model="dialog2"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon  v-bind="attrs" v-on="on">mdi-pencil</v-icon>
                  </template>
                  <template v-slot:default="dialog2">
                    <v-card>
                      <v-toolbar
                        color="#24305E"
                        dark>
                        Change Your Email
                      </v-toolbar>
                      
                      <v-card-text>
                        <v-form v-model="Valid2">
                          
                          <v-text-field
                            class="mt-5"
                            dense
                            outlined
                            label="New Email"
                            v-model="email"
                            :rules="emailRules"
                            required>
                          </v-text-field>
                        </v-form>
                        <v-row class="justify-space-between">
                          <v-btn
                            class="ml-3 white--text"
                            color="#24305E"
                            :disabled="!Valid2"
                            @click="editemail()":loading="loading">
                            change email
                          </v-btn>
                          <v-btn
                            text
                            @click="dialog2.value = false">
                            Close
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
              <v-list-item-subtitle>{{userdata.email}}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Mobile phone</v-list-item-title>
              <v-list-item-subtitle>-</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
<!-- /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- /////////////////////////----------------------Password Section------------------------//////////////////////////// -->
        <v-card class="mb-5">
          <v-row>
            <v-card-title class="ml-13">Password</v-card-title>
              <v-row justify="end" class="mr-15">
                <v-dialog
                  transition="dialog-bottom-transition"
                  max-width="600"
                  v-model="dialog"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon  v-bind="attrs" v-on="on">mdi-pencil</v-icon>
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-toolbar
                        color="#24305E"
                        dark>
                        Change Your Password
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
                            :append-icon="value1 ? 'mdi-eye-off':'mdi-eye'"
                            @click:append="() => (value1 = !value1)"
                            :type="value1 ? 'password' : 'text'"
                            required>
                          </v-text-field>
                          <v-text-field
                            dense
                            outlined
                            label="New Password"
                            v-model="newpassord"
                            required
                            :rules="passRules"
                            :append-icon="value2 ? 'mdi-eye-off':'mdi-eye'"
                            @click:append="() => (value2 = !value2)"
                            :type="value2 ? 'password' : 'text'"
                            required>
                          </v-text-field>
                        </v-form>
                        <v-row class="justify-space-between">
                          <v-btn
                            class="ml-3 white--text"
                            color="#24305E"
                            
                            :disabled="!Valid"
                            @click="editpassword()":loading="loading">
                            change password
                          </v-btn>
                          <v-btn
                            text
                            @click="dialog.value = false">
                            Close
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
            <v-card-title class="ml-13">Email notification</v-card-title>
            <v-row justify="end" class="mr-15">
              <v-icon>mdi-pencil</v-icon>
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
            <v-card-title class="ml-13">Delete My Account</v-card-title>
            <v-row justify="end" class="mr-15">
              <v-icon>mdi-pencil</v-icon>
            </v-row>
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
    <v-snackbar v-model="snackbar1" timeout = "1000" color="success" outlined dark> Password Changed </v-snackbar>
    <v-snackbar v-model="snackbar2" timeout = "1000" color="error" outlined dark> Fill the required fields </v-snackbar>
    <v-snackbar v-model="snackbar3" timeout = "1000" color="error" outlined dark> Old password is wrong </v-snackbar>

    <v-snackbar v-model="snackbar4" timeout = "1000" color="success" outlined dark> Email Changed </v-snackbar>
    <v-snackbar v-model="snackbar5" timeout = "1000" color="error" outlined dark> Email is already used </v-snackbar>
    <v-snackbar v-model="snackbar6" timeout = "1000" color="error" outlined dark> E-mail must be valid </v-snackbar>
  </div>
</template>


<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import ApiService from "../../services/api.service";
export default {
  data: () => ({
    //---------------
    //------------------------ Personal Information Section ------------------------\\
    
    //------------------------ Name Section  ------------------------\\
    firstname:"",
    lastname:"",
    //------------------------
    //------------------------ Date Picker ------------------------\\
    modal: false, //date picker Dialog
    date: null,
    dialog3:false,
    //------------------------
    //------------------------ Gender Section  ------------------------\\
    items: ['Male', 'Female'],
    Gender:"",
    Valid3:false,
    //------------------------
    //------------------------ Residence Location Section  ------------------------\\
    //##############################################################################\\


    //------------------------ Contact Information Section  ------------------------\\
    //------------------------ Email Section ------------------------\\
    email:"",
    Valid2: false, //Email Form Validation flag
    dialog2:false, //Email Dialog
    snackbar4:false,
    snackbar5:false,
    snackbar6:false,
    //##############################################################################\\


    //------------------------ Password Section ------------------------\\
    value1: String, //eye passowrd reveal
    value2: String, //eye passowrd reveal
    oldpassword:"",
    newpassord:"",
    Valid: false, //Password Form Validation flag
    dialog:false, //Passwrod Dialog
    snackbar1:false,
    snackbar2:false,
    snackbar3:false,
    //------------------------
    //##############################################################################\\

    loading:false,//loading till user change
    //------------------------
    
    //------------------------ Validation Rules ------------------------\\
    nameRules: 
    [
      (v) => !!v || "Field is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      (v) => (!!v && isNaN(v)) || "Can't include numbers",
    ],
    emailRules: 
    [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    passRules: 
    [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 8) || "Password must be more than 8 characters",
    ],
    //##############################################################################\\
  }),
  components: {  },

  computed: {
    //Get states from store
    ...mapGetters("auth", ["userdata"]),
    // ...mapActions(['DISPLAY_SEARCH'])
  },
  methods: {
    log() {
      console.log(this.oldpassword);
      console.log(this.newpassord);
      console.log(this.userdata.email);
    },
    editpassword()
    {
      this.loading = true
      let data={
        oldPassword: this.oldpassword,
        password: this.newpassord,
        token: this.userdata.token
      }
      if(this.oldpassword !="" && this.newpassord !="")
      {
        ApiService.put('http://localhost:3000/EditProfile/EditPassword',data)
        .then((r)=>{
          //console.log(r);
          if(r.data!="Invalid Password !"){
            this.snackbar1=true;
            this.oldpassword="";
            this.newpassord=""
            this.loading = false
            this.dialog = false
          }
          else
          {
            console.log(r);
            this.loading = false
            this.snackbar3 = true; 
            this.oldpassword="";
            this.newpassord=""
          }
        });
      }
      else
      {
        this.snackbar2 = true; 
        this.loading = false
      }
    },
    editemail()
    {
      this.loading = true
      let data={
        Email: this.email,
        token: this.userdata.token
      }
      if(this.email !="")
      {
        ApiService.put('http://localhost:3000/EditProfile/EditEmail',data)
        .then((r)=>{
          //console.log(r);
          // TODO: condition to change
          if(r.data!="Invalid Password !"){
            this.snackbar4=true;
            this.loading = false
            this.dialog = false
          }
          else
          {
            console.log(r);
            this.loading = false
            this.snackbar5 = true; 
            this.snackbar6 = true; 

          }
        });
      }
      else
      {
        this.snackbar6 = true; 
        this.loading = false
      }
    },
  },
};
</script>

<style scoped>
.div {
  background-color: #a8d0e6;
  width: 100%;
}
</style>
