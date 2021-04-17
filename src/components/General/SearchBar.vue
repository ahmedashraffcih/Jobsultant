<template>
    <!-- need to style this -->
    <input  color="white" style="background-color:white;" dark  placeholder="Search" v-on:input="search()" v-model.trim="input" ref="input" @blur="closeSearchBar()">
</template>


<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
    data :() =>({
        input:'',
    }),
    methods:{
        ...mapMutations("ui", ["SET_DISPLAY_SEARCH"]),//get set display function from ui module
        search(){
            //TODO : SEARCH THROUGH DATA
            console.log(this.input)
        },
        closeSearchBar(){
            this.SET_DISPLAY_SEARCH(false);
        }
    }
};
</script>