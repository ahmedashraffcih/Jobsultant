<template>
  <div class="div">
    <v-container>
      <v-row justify="center">
        <v-col cols="10">
          <v-row justify="center">
            <h1 class="text-center" style='font-family: "Dela Gothic One"; font-size: 35px;'>Jobsultant Blog</h1>
          </v-row>
          <v-row justify="center">
            <div class="light-blue--text text--darken-4 mt-2" >For people who care about their careers</div>
          </v-row>
          <v-row>
            <v-col cols="12">
              <slot />
            </v-col>

            <feed-card v-for="(article, i) in paginatedArticles" :key="article.title" :size="layout[i]" :value="article" />
          </v-row>

          <v-row align="center">
            <v-col cols="3">
              <base-btn v-if="page !== 1" class="ml-0" square title="Previous page" @click="page--">
                <v-icon>mdi-chevron-left</v-icon>
              </base-btn>
            </v-col>

            <v-col class="text-center subheading" cols="6"> PAGE {{ page }} OF {{ pages }} </v-col>

            <v-col class="text-right" cols="3">
              <base-btn v-if="pages > 1 && page < pages" class="mr-0" square title="Next page" @click="page++">
                <v-icon>mdi-chevron-right</v-icon>
              </base-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// Utilities
import { mapState } from "vuex";

export default {
  name: "Feed",

  components: {
    FeedCard: () => import("@/components/FeedCard"),
  },

  data: () => ({
    layout: [2, 2, 1, 2, 2, 3, 3, 3, 3, 3, 3],
    page: 1,
  }),

  computed: {
    ...mapState("articles", ["articles"]),
    pages() {
      return Math.ceil(this.articles.length / 11);
    },
    paginatedArticles() {
      const start = (this.page - 1) * 11;
      const stop = this.page * 11;

      return this.articles.slice(start, stop);
    },
  },

  watch: {
    page() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
<style scoped>
.div {
  background-color: #FFF3E0;
  width: 100%;
}
</style>
