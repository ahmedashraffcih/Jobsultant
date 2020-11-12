<template>
  <v-footer padless>
    <v-row justify="center">
      <v-col cols="6">

        <v-card flat tile class="transparent white--text text-center">
          <v-card-title class="grey--text">Footer</v-card-title>

          <v-card-text class="grey--text  pt-0 text-left">
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
            Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
            accumsan id ultrices nunc. Sed at orci sed massa consectetur
            dignissim a sit amet dui. Duis commodo vitae velit et faucibus.
            Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum
            ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel
            diam elementum tempor vel ut orci. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus.
          </v-card-text>
          <v-divider></v-divider>

        </v-card>

      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="6">
        
        <v-card flat tile class="transparent white--text text-center">
          <v-card-title class="grey--text">
            About Jobsultant.com
          </v-card-title>

          <v-row>
            <v-col cols="8">
              <v-card-text class="grey--text pt-0 text-left">
                Bayt.com is the leading job site in the Middle East and North
                Africa, connecting job seekers with employers looking to hire.
                Every day, thousands of new job vacancies are listed on the
                award-winning platform from the region's top employers.
              </v-card-text>

              <v-card-text class="text-center">
                <v-btn
                  v-for="icon in icons"
                  :key="icon"
                  class="mx-4 grey--text"
                  icon
                >
                  <v-icon size="24px">
                    {{ icon }}
                  </v-icon>
                </v-btn>
              </v-card-text>

            </v-col>

            <v-col cols="4">
              <v-card-text class="grey--text pt-0 text-left">
                Bayt.com is the leading job site in the Middle East and North
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
