<template>
  <v-row class="grey lighten-3" justify="center">
    <v-col cols="6">
      <div class="form-header rounded-lg">
        <h1 class="titles1">About Your Company</h1>
        <p class="light-blue--text text--darken-4">Tell job seekers what they need to know!</p>
      </div>
      <form class="form-header rounded-lg">
        <div>
          <h2 class="mb-4 titles">Company Basic Information:</h2>
        </div>
        <v-text-field v-model="employer.companyName" :rules="CompRules" :counter="20" label="Company Name" outlined dense></v-text-field>

        <VuePhoneNumberInput size="lg" border-radius="4" default-country-code="EG" v-model="employer.companyPhone" />

        <v-select
          v-model="employer.industry"
          :items="industries"
          :error-messages="selectErrors"
          label="Industry of company"
          class="MarginIndustry"
          required
          outlined
          dense
        ></v-select>

        <div>
          <h2 class="titles">More Details about Your Company:</h2>
        </div>

        <v-text-field v-model="employer.website" label="Website" :rules="webRules" outlined dense></v-text-field>

        <v-select v-model="employer.size" :items="sizes" :error-messages="selectErrors" label="Company Size" outlined dense></v-select>

        <v-text-field v-model="employer.location" :error-messages="headquartersErrors" label="Headquarters" outlined dense></v-text-field>

        <v-row>
          <v-btn class="ml-3 mr-4 mb-4" dark color="light-blue darken-4" @click="editEmpInfo()" :loading="loading"> Apply Edits</v-btn>

          <v-btn color="orange darken-2" dark class="mr-2" @click="clear"> clear </v-btn>
        </v-row>
      </form>
    </v-col>
    <v-snackbar v-model="snackbar" timeout="2000" color="success" outlined dark>
      Your changes have been successfully saved
    </v-snackbar>
  </v-row>
</template>

<script>
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import { mapGetters, mapActions, mapMutations } from "vuex";
import ApiService from "../../services/api.service";
import TokenService from "../../services/storage.service";

//Vue.component('vue-phone-number-input', VuePhoneNumberInput);
export default {
  components: {
    VuePhoneNumberInput,
  },
  data() {
    return {
      employer: {},
      companyName: "",
      companyPhone: "",
      industry: "",
      industries: [
        "Accounting",
        "Advertising",
        "Airlines",
        "Banking",
        "Computer Software",
        "Construction",
        "Education",
        "Government",
        "Health",
        "Insurance",
        "Real Estate",
        "Retails",
        "Sports",
        "Telecom Services",
      ],
      //overview: '',
      website: null,
      size: "",
      sizes: ["10-49", "50-149", "150-200", "More than 200 employee"],
      location: "",

      // actions
      loading: false,
      snackbar: false,

      // Rules
      nameRules: [(v) => !!v || "Field is required"],
      CompRules: [(v) => !!v || "Field is required", (v) => (!!v && isNaN(v)) || "Can't include numbers"],
      webRules: [(v) => /^(http\:\/\/|https\:\/\/)?([a-z0-9][a-z0-9\-]*\.)+[a-z0-9][a-z0-9\-]*$/i.test(v) || "website must be valid"],
    };
  },
  mounted() {
    this.getUser();
  },
  computed: {
    //Get states from store
    ...mapGetters("auth", ["accessToken"]),
    ...mapGetters("auth", ["user_id"]),
    // ...mapActions(['DISPLAY_SEARCH'])
  },
  methods: {
    log() {
      console.log(this.userdata);
    },
    getUser() {
      ApiService.get(`http://localhost:3000/employers/${this.user_id}`).then((r) => {
        if (r.status == 200) {
          this.employer = r.data;
          console.log(this.employer);
        } else {
          console.log(r);
        }
      });
    },
    editEmpInfo() {
      this.loading = true;
      ApiService.put(`http://localhost:3000/EditInfo/${this.user_id}`, this.employer)
        .then((r) => {
          console.log(r);
          if (r.status == 204) {
            this.getUser();
            this.loading = false;
            this.snackbar = true;
            console.log(r);
          } else {
            this.loading = false;
            console.log(r);
            console.log(this.user);
          }
        })
        .catch((error) => {
          this.loading = false;
        });
    },
    clear() {
      this.employer.companyName = "";
      this.employer.companyPhone = "";
      this.employer.industry = null;
      this.employer.website = "";
      this.employer.size = null;
      this.employer.location = "";
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
.MarginIndustry {
  margin-top: 20px;
}
.titles1{
  font-family: "Montserrat-black"; 
  font-size: 25px;
  font-weight: bold;
}
.titles{
  font-family: "Montserrat"; 
  font-size: 20px; 
  font-weight: bold;
}
</style>
