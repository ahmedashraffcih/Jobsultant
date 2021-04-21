<template>
  <v-row justify="center">
    <!-- Filters card -->
    <v-col cols="2">
      <v-card>
        <v-card-title>Improve Your Profile</v-card-title>
        <v-divider></v-divider>
        <v-card-text>Reach profile strength of 80% to be in the top 10% of highly visibleusers.</v-card-text>
      </v-card>
    </v-col>

    <!-- jobs card -->

    <v-col cols="4">
      <v-card class="mb-5">
        <v-row>
          <v-card-title class="ml-7">Personal Information</v-card-title>
          <v-row justify="end" class="mr-10">
            <v-icon dense>mdi-pencil</v-icon>
          </v-row>
        </v-row>
        <v-list class="ml-4" max-width="500px" dense>
          <v-list-item>
            <v-list-item-title>Name</v-list-item-title>
            <v-list-item-subtitle>{{user.fname}} {{user.lname}}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Birth date</v-list-item-title>
            <v-list-item-subtitle v-if="user.BirthDate">{{user.BirthDate}}</v-list-item-subtitle>
            <v-list-item-subtitle v-if="!user.BirthDate">-</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Gender</v-list-item-title>
            <v-list-item-subtitle v-if="user.Gender">{{user.Gender}}</v-list-item-subtitle>
            <v-list-item-subtitle v-if="!user.Gender">-</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Nationality</v-list-item-title>
            <v-list-item-subtitle v-if="user.Nationality">{{user.Nationality}}</v-list-item-subtitle>
            <v-list-item-subtitle v-if="!user.Nationality">-</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Residence Location</v-list-item-title>
            <v-list-item-subtitle>Egypt - Cairo</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card>

      <v-card class="mb-5">
        <v-row>
          <v-card-title class="ml-7">Contact Information</v-card-title>
          <v-row justify="end" class="mr-10">
            <v-icon dense>mdi-pencil</v-icon>
          </v-row>
        </v-row>
        <v-list class="ml-4" max-width="500px" dense>
          <v-list-item>
            <v-list-item-title>Email</v-list-item-title>
            <v-list-item-subtitle v-if="user.account.Email">{{user.account.Email}}</v-list-item-subtitle>
            <v-list-item-subtitle v-if="!user.account.Email">-</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Mobile phone</v-list-item-title>
            <v-list-item-subtitle v-if="user.Mobile">{{user.Mobile}}</v-list-item-subtitle>
            <v-list-item-subtitle v-if="!user.Mobile">-</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card>

      <v-card class="mb-5">
        <v-row>
          <v-card-title class="ml-7">Work Experience</v-card-title>
          <v-row justify="end" class="mr-10">
            <v-icon dense>mdi-plus</v-icon>
          </v-row>
        </v-row>
        <v-list class="ml-4" max-width="500px" dense>
          <v-list-item>
            <v-list-item-title>No Experience</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>

      <v-card class="mb-5">
        <v-row>
          <v-card-title class="ml-7">Education</v-card-title>
          <v-row justify="end" class="mr-10">
            <v-icon dense>mdi-plus</v-icon>
          </v-row>
        </v-row>

        <v-card elevation="0 " v-for="(edu, i) in 2" :key="i">
          <v-row>
            <v-card-title class="ml-7">Bachelor's degree, Computer Science</v-card-title>
            <v-row justify="end" class="mr-10">
              <v-icon dense>mdi-pencil</v-icon>
              <v-icon class="ml-2" dense>mdi-close</v-icon>
            </v-row>
          </v-row>
          <v-list class="ml-4" max-width="500px" dense>
            <v-list-item>
              <v-list-item-subtitle>‎at Helwan University</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-subtitle>‎Egypt-Cairo</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-subtitle>‎July 2021</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-subtitle>Description</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </v-card>

      <v-card class="mb-5">
        <v-row>
          <v-card-title class="ml-7">Skills</v-card-title>
          <v-row justify="end" class="mr-10">
            <v-icon dense>mdi-pencil</v-icon>
          </v-row>
        </v-row>
        <v-list class="ml-4" max-width="500px" dense>
          <v-list-item>
            <v-list-item-title>Skill Name</v-list-item-title>
            <v-list-item-subtitle>Level: [[level]]</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card>

      <v-card class="mb-5">
        <v-row>
          <v-card-title class="ml-7">Languges</v-card-title>
          <v-row justify="end" class="mr-10">
            <v-icon dense>mdi-pencil</v-icon>
          </v-row>
        </v-row>
        <v-list class="ml-4" max-width="500px" dense>
          <v-list-item>
            <v-list-item-title>language</v-list-item-title>
            <v-list-item-subtitle>Level: [[level]]</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

import { mapGetters, mapActions, mapMutations } from "vuex";
import ApiService from "../../services/api.service";
export default {
  data: () => ({
    group: null,
    user:{}
  }),
  mounted(){
    this.getUser();
  },
  components: {  },

  computed: {
    //Get states from store
    ...mapGetters("auth", ["user_id"]),
    // ...mapActions(['DISPLAY_SEARCH'])
  },
  methods: {
    log() {
      console.log(this.userdata);
    },
    getUser(){
        ApiService.get(`http://localhost:3000/users/${this.user_id}`)
        .then((r)=>{
          if(r.status==200)
          {
            this.user=r.data;
            console.log(this.user)
          }
          else
          {
            console.log(r);
          }
      });
    },
  },
};
</script>