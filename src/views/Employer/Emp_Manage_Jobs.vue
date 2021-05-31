<template>
  <v-row class="grey lighten-3" justify="center">
    <v-col cols="8">
      <div class="form-header rounded-lg">
        <h1 class="ml-5" >Manage Jobs!</h1>
        <p class="light-blue--text text--darken-4 ml-5">Adminstrate your posted Jobs!</p>
      </div>

      <div class="form-header rounded-lg">
        <v-row>
          <v-col md="10">
            <h2 class="ml-5">Latest Posted Jobs</h2>
          </v-col>

          <v-col>
            <v-btn rounded right color="orange darken-2" dark to="/Employer/Emp_Add_Job">
              Add New Job
            </v-btn>
          </v-col>
        </v-row>
      </div>

      <div class="form-header rounded-lg" >
        <v-tabs v-model="tabs" grow color="orange darken-2">
          <v-tab>Active Jobs</v-tab>
          <v-tab>Archived Jobs</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tabs">
          <v-tab-item class="margin-item">
            <v-card max-width="534" elevation="2" class="mb-5 ml-5">
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">
                    {{ CompanyName }}
                  </div>

                  <v-list-item-title class="headline mb-1">
                    {{ JobTitle }}
                  </v-list-item-title>

                  <v-list-item-subtitle>
                    {{ JobDesc }}
                  </v-list-item-subtitle>

                  <v-list-item-subtitle>
                    {{ Views }} views
                    <v-list-item-icon>
                      <v-icon small left>
                        mdi-eye
                      </v-icon>
                    </v-list-item-icon>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-card-actions>
                <v-btn class="ma-2" small color="success" dark to="/Employer/Emp_View_Candidates">
                  View Canidates
                  <v-icon small dark right>
                    mdi-account-multiple
                  </v-icon>
                </v-btn>

                <v-btn small class="ma-2" color="primary" dark>
                  Edit
                  <v-icon small dark right>
                    mdi-fountain-pen
                  </v-icon>
                </v-btn>

                <v-btn small class="ma-2" color="warning" dark>
                  Archive
                  <v-icon small dark right>
                    mdi-close-octagon
                  </v-icon>
                </v-btn>

                <v-btn small class="ma-2" color="error" dark>
                  Delete
                  <v-icon small dark right>
                    mdi-delete-sweep
                  </v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-tab-item>

          <v-tab-item>
            <!-- Archieved Posts Go Here -->
            <p>lol</p>
          </v-tab-item>
        </v-tabs-items>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      tabs: null,
      CompanyName: "Vodafone Egypt",
      Views: 150,
      JobTitle: "Junior .NET Developer",
      JobDesc:
        "We are looking for a .Net developer to build software using languages and technologies of the .NET framework. You will create applications from scratch, configure existing systems and provide user support.",
    };
  },
  methods: {},
};
</script>

<style scoped>
.form-header {
  padding: 10px;
  padding-left: 20px;
  margin-bottom: 15px;
  background-color: white;
}
.views {
  margin-left: 290px;
}
.margin-item {
  margin-top: 40px;
}
</style>
