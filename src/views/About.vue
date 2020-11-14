<template>
  <v-row justify="center">
    <!-- Filters card -->

    <v-col cols="2">
      <v-card>
        <v-card-title>Filter</v-card-title>
        <v-divider></v-divider>
        <v-col cols="11" class="mt-3">
          <v-text-field class="searchbar" outlined label="Search" rounded-0>
          </v-text-field>
        </v-col>
        <v-card-text>
          Filter Your Search
        </v-card-text>
        <v-card-title>Career Level</v-card-title>
        <v-card-text>
          <v-chip-group
            v-model="selection"
            active-class="deep-purple accent-4 white--text"
            column
          >
            <v-chip>Intern</v-chip>
            <v-chip>Mid-level</v-chip>
            <v-chip>Senior-level</v-chip>
            <v-chip>Managment</v-chip>
          </v-chip-group>
        </v-card-text>
        <v-expansion-panels>
          <v-expansion-panel v-for="(item, i) in 5" :key="i">
            <v-expansion-panel-header>
              Item
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </v-col>

    <!-- jobs card -->

    <v-col cols="3">
      <v-card>
        <v-card-title>X in Jobs</v-card-title>
        <v-divider></v-divider>
        <v-card outlined v-for="(job, i) in 5" :key="i" @click="report = true">
          <v-list>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="title">Job Title</v-list-item-title>
                <v-list-item-subtitle class="subtitle-1"
                  >Company</v-list-item-subtitle
                >
                <v-list-item-subtitle class="subtitle-2 mt-5"
                  >Career Level</v-list-item-subtitle
                >
                <v-list-item-subtitle class="caption mt-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                  atque, quos porro ea velit possimus in nisi dicta nemo
                  voluptatem sequi esse deleniti obcaecati. Voluptatibus
                  deleniti error sint hic sequi.</v-list-item-subtitle
                >
                <v-list-item-subtitle class="caption mt-5"
                  >1/1/2020</v-list-item-subtitle
                >
              </v-list-item-content>
              <v-list-item-avatar
                tile
                size="60"
                color="grey"
              ></v-list-item-avatar>
            </v-list-item>
          </v-list>
        </v-card>
        <div class="text-center">
          <v-pagination v-model="page" :length="3"></v-pagination>
        </div>
      </v-card>
    </v-col>

    <!-- Apply Card -->

    <v-col cols="3" v-if="report">
      <v-card>
        <v-list>
          <v-row class="justify-end mr-3">
            <v-icon @click="report = false">mdi-close</v-icon>
          </v-row>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="title">Job Title</v-list-item-title>
              <v-list-item-subtitle class="subtitle-1"
                >Company</v-list-item-subtitle
              >
              <v-list-item-subtitle class="subtitle-2 mt-5"
                >Career Level</v-list-item-subtitle
              >
              <v-list-item-subtitle class="caption mt-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                atque, quos porro ea velit possimus in nisi dicta nemo
                voluptatem sequi esse deleniti obcaecati. Voluptatibus deleniti
                error sint hic sequi.</v-list-item-subtitle
              >
              <v-list-item-subtitle class="caption mt-5"
                >1/1/2020</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="60"
              color="grey"
            ></v-list-item-avatar>
          </v-list-item>
        </v-list>
        <v-btn class="ml-3 mb-3" outlined>Apply</v-btn>
        <v-divider></v-divider>

        <v-card-title class="title">Job Description</v-card-title>
        <v-card-text
          >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
          accusantium maiores vel possimus quasi necessitatibus magni iusto
          doloribus? Illum necessitatibus repellat rerum sed nemo exercitationem
          reiciendis a illo laborum neque.</v-card-text
        >
        <v-card-title class="title">Skills</v-card-title>
        <v-card-text
          >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
          accusantium maiores vel possimus quasi necessitatibus magni iusto
          doloribus? Illum necessitatibus repellat rerum sed nemo exercitationem
          reiciendis a illo laborum neque.</v-card-text
        >
        <v-card-title class="title">Job Details</v-card-title>
      </v-card>
    </v-col>

    <!-- Profile Card -->

    <v-col cols="3" v-if="report != true">
      <v-card>
        <v-list>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="title">User Name</v-list-item-title>
              <v-list-item-subtitle class="subtitle-2 mt-10"
                >Last CV Refresh Date: 2020-11-03</v-list-item-subtitle
              >
              <v-list-item-subtitle class="subtitle-2 mt-5"
                >Preferred job title</v-list-item-subtitle
              >
              <v-list-item-subtitle class="caption mt-2"
                >Data Engineer</v-list-item-subtitle
              >
            </v-list-item-content>
            <v-list-item-avatar
              tile
              size="60"
              color="blue"
            ></v-list-item-avatar>
          </v-list-item>
        </v-list>
      </v-card>
      <v-card class="mt-5">
        <v-list>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="title"
                >Save this search and receive similar jobs:</v-list-item-title
              >
              <v-list-item-subtitle class="subtitle-2 mt-7"
                >Keywords</v-list-item-subtitle
              >
              <v-list-item-subtitle class="subtitle-2 mt-5"
                >Job Location</v-list-item-subtitle
              >
              <v-list-item-subtitle class="subtitle-2 mt-5"
                >Alert Frequency</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-row class="justify-end mr-3">
          <v-btn class="ml-3 mb-3" small right outlined>Create Job Alert</v-btn>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  mounted() {},
  data: () => ({
    report: false,
  }),
  methods: {},
};
</script>

<style scoped></style>
