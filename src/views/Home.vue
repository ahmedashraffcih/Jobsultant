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
          v-model="name"
          :disabled="isUpdating"
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
        <v-btn large height="55" color="teal accent-3">Search Jobs</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
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
