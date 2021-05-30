<template>
  <v-btn
    :style="styles"
    color="primary"
    fab
    small
    v-bind="$attrs"
    elevation="0"
    v-on="$listeners"
  >
    <slot />
  </v-btn>
</template>

<script>
  export default {
    name: 'BaseBtn',

    props: {
      square: Boolean,
    },

    computed: {
      styles () {
        return {
          borderRadius: this.square ? '2px' : undefined,
        }
      },
    },
  }
</script>
