<template>
    <v-row class="blue-grey lighten-5" justify="center">
        <v-col cols="8">
            <div class="UpperSection row">
                <div class="ProfilePic col col-2" >
                    <v-card
                        class="mx-auto"
                        max-width="157"
                    >
                        <v-img
                        class="white--text align-end"
                        height="200px"
                        src="../../assets/imgs/CompanyLogo.png"
                        >
                        </v-img>

                        <v-card-actions>
                        <v-btn
                            small
                            color="primary"
                            text
                        >
                            Update Profile
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
                
                <div class="CoverPic col col-10">
                    <v-card
                        class="mx-auto"
                        max-width="900"
                    >
                        <v-img
                        class="white--text align-end"
                        height="200px"
                        src="../../assets/imgs/CompanyCover.jpeg"
                        >
                        </v-img>

                        <v-card-actions>
                        <v-btn
                            small
                            color="primary"
                            text
                        >
                            Update Cover
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
                
            </div>

            <div class="ProfileSection row">
                <div class="background col col-6" >
                  <h3>Company Profile!</h3>
                  <v-btn
                    class="ma-2"
                    x-small
                    color="primary"
                    dark
                    >
                    Edit
                        <v-icon x-small dark right>
                            mdi-fountain-pen
                        </v-icon>
                  </v-btn>
                </div>

                <v-spacer></v-spacer>

                <v-card
                    class="mx-auto"
                    max-width="344"
                    outlined
                >
                    <v-list-item two-line>
                        <v-list-item-content>
                            
                            <v-list-item-title class="font-weight-bold text-h6">
                            Share with friends:
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-card-actions>
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
                    </v-card-actions>
                </v-card>
            </div>   

            <div class="JopSection row">
                <div class="background col col-6">
                    <h3>Open Vacancies at $Company!</h3>
                    <v-btn
                        x-small
                        color="primary"
                        dark
                        >
                        Manage Jobs
                        <v-icon x-small dark right>
                            mdi-card-account-details
                        </v-icon>
                    </v-btn>
                </div>
            </div>
            
            

        </v-col>
    </v-row>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style scoped>
.background {
height: min-content;    
padding: 10px;
padding-left: 20px;
margin-bottom: 15px;
background-color: white;
}
.ProfilePic{
max-width:fit-content
}
</style>