<template>
  <v-footer padless>
    <v-row justify="center">
      <v-col cols="8">
        <v-card flat tile class="transparent white--text text-center">
          <v-card-title class="grey--text text--darken-3" style='font-family: "Montserrat"; font-size: 18px; font-weight: bold;'>About Jobsultant.com</v-card-title>
          <v-row>
            <v-col cols="8">
              <v-card-text class="grey--text text--darken-2 pt-0 text-left" style='font-family: "Montserrat"; font-size: 14px;'>
                Jobsultant.com is the leading job site in the Middle East and North Africa, connecting job seekers with employers looking to hire. Every
                day, thousands of new job vacancies are listed on the award-winning platform from the region's top employers.
              </v-card-text>
              <v-card-text class="text-left">
                <v-btn v-for="icon in icons" :key="icon" class="mr-5 grey--text text--darken-3" icon>
                  <v-icon size="24px">
                    {{ icon }}
                  </v-icon>
                </v-btn>
              </v-card-text>
            </v-col>

            <v-col cols="4">
              <v-card-text class="grey--text text--darken-2 pt-0 text-left" style='font-family: "Montserrat"; font-size: 14px;'>
                Jobsultant.com is the leading job site in the Middle East and North
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
<style scoped>
.captions {
  font-family: "Montserrat-mid"; 
  font-size: 16px;
}
.subtitles {
  font-family: "Montserrat"; 
  font-size: 25px;
}
</style>