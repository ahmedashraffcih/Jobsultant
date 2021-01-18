<template>
    <input outlined color="white" dark  placeholder="Search" v-on:input="search()" v-model.trim="input" ref="input" @blur="closeSearchBar()">
</template>


<script>
export default {
    data :() =>({
        input:'',
    }),
    methods:{
        search(){
            //TODO : SEARCH THROUGH DATA
            console.log(this.input)
        },
        closeSearchBar(){
            this.$store.commit("SET_DISPLAY_SEARCH",false);
        }
    }
};
</script>