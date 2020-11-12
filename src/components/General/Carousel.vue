<!--<v-carousel :show-arrows="false" hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src">
      </v-carousel-item>
  </v-carousel>
 -->

 <script>
// @ is an alias to /src

export default {
  data() {
    return {
      items: [
        {
          src: require("../assets/imgs/opening.png"),
        },
      ],
    };
  },
};
</script>