<template>
  <div class="opening">
    <v-row justify="center">
      <h1 class="display-4 white--text mt-10">JobSultant</h1>
    </v-row>
    <v-row justify="center">
      <h1 class="white--text mt-5">Find Jobs,Netowrk and Learn</h1>
    </v-row>
    <v-row justify="center" class="mt-15">
      <v-col cols="4">
        <v-text-field
          outlined
          color="white"
          label="Enter job title,skills,etc."
          dark
          filled
          rounded-4
          autofocus
        >
        </v-text-field>
      </v-col>
      <v-col cols="1">
        <v-btn large height="55" color="#a8d0e6">Search Jobs</v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <div class="justify-center ml-20">
      <vue-tel-input-vuetify
        :error="hasErrorActive" 
        :loader="hasLoaderActive" 
        v-model="phoneNumber" 
        outlined 
        dark 
        dense
        
        background-color="white"
        :preferred-countries="['id', 'gb', 'ua', 'us']"
        :valid-characters-only="true"
        @input="onInput"
       >
       </vue-tel-input-vuetify>
       <v-btn @click="ChangePhone()">Set phone</v-btn>
    </div>
    
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import VueTelInputVuetify from '../lib/vue-tel-input-vuetify.vue';

export default {
  name: "Home",
  components: {
    VueTelInputVuetify,
  },
  data() {
      return {
        phoneNumber:"",
        phone: {
          number: '',
          valid: false,
          country: undefined,
        },
        hasLoaderActive: false,
        hasErrorActive: false
      }
    },
  methods: {

    onInput(formattedNumber, { number, valid, country }) {
      this.phone.number = number.international;
      this.phone.valid = valid;
      this.phone.country = country && country.name;
    },
    ChangePhone(){
      console.log(this.phone);
      console.log(this.country);
      console.log(this.phoneNumber1);
      console.log(this.phoneNumber2);

    }
  },
};
</script>
<style scoped>
.opening {
  background-image: url("../assets/imgs/open.jpg");
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: center;
}
</style>
