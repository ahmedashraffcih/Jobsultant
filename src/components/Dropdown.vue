<template>
    <div >
        <v-btn class="buttoncase" text flat @click="isOpen = !isOpen" >  {{title}}
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 213.333 213.333" style="enable-background:new 0 0 213.333 213.333;" xml:space="preserve" width="10px" fill="white">
                <g>
                    <g>
                        <polygon points="0,53.333 106.667,160 213.333,53.333"/>
                    </g>
                </g>
            </svg>
            <transition name="fade" appear>
                <div class="sub-menu" v-if="isOpen">
                    <div v-for="(item,i) in items" :key="i">
                        <v-btn class="buttoncase sub-buttoncase" :to="item.link" text flat>{{item.title}}</v-btn>
                    </div>
                </div>
            </transition>
        </v-btn>

    </div>
</template>

<script>
export default {
    name: 'dropdown',
    props: ['title','items'],
    data (){
        return{
            isOpen: false
        }
    }
}
</script>

<style scoped>
.buttoncase svg{
    margin-left: 5px;
}
.sub-menu{
position: absolute;
background-color: #2C3C5B;
top: calc(100% + 18px);
left: 50%;
transform: translateX(-50%);
width: max-content;
border-radius: 0px 0px 16px 16px;
}
.sub-buttoncase{
border-radius: 0px 0px 16px 16px;
}
.fade-enter-active,
.fade-leave-active {
    transition: all .5s ease-out;
}
.fade-enter,
.fade-leave-to{
    opacity: 0;
}
</style> 