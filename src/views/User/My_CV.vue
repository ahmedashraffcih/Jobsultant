<template>
  <div class="div">
    <v-row justify="center">
      <!-- Filters card -->
      <v-col cols="2">
        <v-card>
          <v-card-title>Improve Your Profile</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="light-blue--text text--darken-4" >
            Reach profile strength of 80% to be in the top 10% of highly visibleusers.
          </v-card-text>
          <v-divider></v-divider>
          <v-list dense>
            <v-list-item>
              <v-list-item-title>CV reference number : </v-list-item-title>
              <v-list-item-subtitle class="orange--text text--darken-2 ml-2" v-if="user.cv._id">{{ user.cv._id.substring(0, 7) }}</v-list-item-subtitle>
              <v-list-item-subtitle class="orange--text text--darken-2 ml-2" v-if="!user.cv._id">-</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>CV last updated on : </v-list-item-title>
              <v-list-item-subtitle class="orange--text text--darken-2 ml-2" v-if="user.cv.date">{{ user.cv.date.substring(0, 10) }}</v-list-item-subtitle>
              <v-list-item-subtitle class="orange--text text--darken-2 ml-2" v-if="!user.cv.date">-</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <!-- jobs card -->

      <v-col cols="4">
        <v-card class="mx-auto mb-5" max-width="650">
          <v-img height="100%" src="../../assets/imgs/CV.png" >
            <v-row>
              <v-col align-self="start" cols="12">
                <v-avatar class="avatar profile ml-4" color="grey" size="180">
                  <v-img v-if="user.cv.image" :src="user.cv.image"></v-img>
                  <v-img v-if="!user.cv.image" src="../../assets/imgs/profile.jpg"></v-img>
                </v-avatar>
              </v-col>
              <v-col class="py-0 ml-2">
                <v-list-item color="rgba(0, 0, 0, .4)" dark>
                  <v-list-item-content>
                    <v-list-item-title class="title">{{ user.fname }} {{ user.lname }}</v-list-item-title>
                    <v-list-item-subtitle v-if="user.cv.job_Title">{{ user.cv.job_Title }}</v-list-item-subtitle>
                    <v-list-item-subtitle v-if="!user.cv.job_Title">-</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </v-img>
        </v-card>

        <v-card class="mb-5">
          <v-row>
            <v-card-title class="ml-7">Personal Information</v-card-title>
            <v-row justify="end" class="mr-10">
              <v-icon color="orange darken-2" dense>mdi-pencil</v-icon>
            </v-row>
          </v-row>
          <v-list class="ml-4" max-width="500px" dense>
            <v-list-item>
              <v-list-item-title>Name</v-list-item-title>
              <v-list-item-subtitle>{{ user.fname }} {{ user.lname }}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Birth date</v-list-item-title>
              <v-list-item-subtitle v-if="user.cv.birth_Date">{{ user.cv.birth_Date }}</v-list-item-subtitle>
              <v-list-item-subtitle v-if="!user.cv.birth_Date">-</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Gender</v-list-item-title>
              <v-list-item-subtitle v-if="user.cv.gender">{{ user.cv.gender }}</v-list-item-subtitle>
              <v-list-item-subtitle v-if="!user.cv.gender">-</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Nationality</v-list-item-title>
              <v-list-item-subtitle v-if="user.cv.nationality">{{ user.cv.nationality }}</v-list-item-subtitle>
              <v-list-item-subtitle v-if="!user.cv.nationality">-</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Residence Location</v-list-item-title>
              <v-list-item-subtitle v-if="user.cv.residence_Location">{{ user.cv.residence_Location }}</v-list-item-subtitle>
              <v-list-item-subtitle v-if="!user.cv.residence_Location">-</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>

        <v-card class="mb-5">
          <v-row>
            <v-card-title class="ml-7">Contact Information</v-card-title>
            <v-row justify="end" class="mr-10">
              <v-icon color="orange darken-2" dense>mdi-pencil</v-icon>
            </v-row>
          </v-row>
          <v-list class="ml-4" max-width="500px" dense>
            <v-list-item>
              <v-list-item-title>Email</v-list-item-title>
              <v-list-item-subtitle v-if="user.account.Email">{{ user.account.Email }}</v-list-item-subtitle>
              <v-list-item-subtitle v-if="!user.account.Email">-</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Mobile phone</v-list-item-title>
              <v-list-item-subtitle v-if="user.cv.mobile_Phone">{{ user.cv.mobile_Phone }}</v-list-item-subtitle>
              <v-list-item-subtitle v-if="!user.cv.mobile_Phone">-</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>

        <v-card class="mb-5">
          <v-row>
            <v-card-title class="ml-7">Work Experience</v-card-title>
            <v-row justify="end" class="mr-10">
              <v-icon dense color="orange darken-2">mdi-plus</v-icon>
            </v-row>
          </v-row>
          <v-card v-if="user.cv.work_Experience==' '" elevation="0 " v-for="(work, key) in user.cv.work_Experience" :key="key">
            <v-row>
              <v-card-title class="ml-7">{{ work.Job_title }}</v-card-title>
              <v-row justify="end" class="mr-10">
                <v-icon dense color="orange darken-2">mdi-pencil</v-icon>
                <v-icon class="ml-2" color="orange darken-2" dense>mdi-close</v-icon>
              </v-row>
            </v-row>
            <v-list class="ml-4" max-width="500px" dense>
              <v-list-item>
                <v-list-item-subtitle v-if="work.company_name">{{ work.company_name }}</v-list-item-subtitle>
                <v-list-item-subtitle v-if="!work.company_name">-</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-subtitle v-if="work.location">{{ work.location }}</v-list-item-subtitle>
                <v-list-item-subtitle v-if="!work.location">-</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-subtitle v-if="work.start_date">{{ work.start_date }}</v-list-item-subtitle>
                <v-list-item-subtitle v-if="!work.start_date">-</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-subtitle v-if="work.end_date">{{ work.end_date }}</v-list-item-subtitle>
                <v-list-item-subtitle v-if="!work.end_date">-</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card>
          <v-card v-if="!user.cv.work_Experience==' '" outlined tile>
            <v-row>
              <v-card-title class="ml-7 subtitle-1">You don't Have previous experience</v-card-title>
            </v-row>
          </v-card>
        </v-card>

        <v-card class="mb-5">
          <v-row>
            <v-card-title class="ml-7">Education</v-card-title>
            <v-row justify="end" class="mr-10">
              <v-icon dense color="orange darken-2">mdi-plus</v-icon>
            </v-row>
          </v-row>

          <v-card elevation="0 " v-for="(edu, key) in user.cv.education" :key="key">
            <v-row>
              <v-card-title class="ml-7" v-if="edu.degree">{{ edu.degree }} {{ " ," + edu.field }}</v-card-title>
              <v-card-title class="ml-7" v-if="!edu.degree">-</v-card-title>
              <v-row justify="end" class="mr-10">
                <v-icon dense color="orange darken-2">mdi-pencil</v-icon>
                <v-icon class="ml-2" dense color="orange darken-2">mdi-close</v-icon>
              </v-row>
            </v-row>
            <v-list class="ml-4" max-width="500px" dense>
              <v-list-item>
                <v-list-item-subtitle v-if="edu.university">{{ edu.university }}</v-list-item-subtitle>
                <v-list-item-subtitle v-if="!edu.university">-</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-subtitle v-if="edu.location">{{ edu.location }}</v-list-item-subtitle>
                <v-list-item-subtitle v-if="!edu.location">-</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-subtitle v-if="edu.graduation_date">{{ edu.graduation_date }}</v-list-item-subtitle>
                <v-list-item-subtitle v-if="!edu.graduation_date">-</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card>
        </v-card>

        <v-card class="mb-5">
          <v-row>
            <v-card-title class="ml-7">Skills</v-card-title>
            <v-row justify="end" class="mr-10">
              <v-icon dense color="orange darken-2">mdi-pencil</v-icon>
            </v-row>
          </v-row>
          <v-list class="ml-2" max-width="700px" dense>
            <v-list-item v-for="(skill, key) in user.cv.skills" :key="key">
              <v-icon color="orange darken-2">mdi-circle-small</v-icon>
              <v-list-item-title v-if="user.cv.skills"> {{ skill }}</v-list-item-title>
              <v-list-item-title v-if="!user.cv.skills">-</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>

        <v-card class="mb-5">
          <v-row>
            <v-card-title class="ml-7">Languges</v-card-title>
            <v-row justify="end" class="mr-10">
              <v-icon dense color="orange darken-2">mdi-pencil</v-icon>
            </v-row>
          </v-row>
          <v-list class="ml-2" max-width="700px" dense>
            <v-list-item v-for="(language, key) in user.cv.languages" :key="key">
              <v-icon color="orange darken-2">mdi-circle-small</v-icon>
              <v-list-item-title v-if="user.cv.languages"> {{ language }}</v-list-item-title>
              <v-list-item-title v-if="!user.cv.languages">-</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-overlay :value="overlay" opacity="0.9">
      <fingerprint-spinner class="justify-center" :animation-duration="1500" :size="120" color="#FF9800" />
    </v-overlay>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import ApiService from "../../services/api.service";
import { FingerprintSpinner } from "epic-spinners";
export default {
  components: {
    FingerprintSpinner,
  },
  data: () => ({
    group: null,
    overlay: true,
    user: {
      account: {},
      cv: {
        education: {},
        work_Experience: {},
        skills: {},
        languages: {},
      },
    },
  }),
  mounted() {
    this.getUser();
  },
  computed: {
    //Get states from store
    ...mapGetters("auth", ["user_id"]),
    // ...mapActions(['DISPLAY_SEARCH'])
  },
  methods: {
    log() {
      console.log(this.userdata);
    },
    getUser() {
      ApiService.get(`http://localhost:3000/users/${this.user_id}`).then((r) => {
        if (r.status == 200) {
          this.user = r.data;
          console.log(this.user);
          this.overlay = false;
        } else {
          console.log(r);
        }
      });
    },
  },
};
</script>
<style scoped>
.div {
  background-color: #e0e0e0;
  width: 100%;
}
.avatar{
  border: 2px solid #f57c00 !important;
}
</style>
