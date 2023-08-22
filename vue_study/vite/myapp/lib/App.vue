<template>
    <div>
        <MySwiper v-if="datalist.length" 
        :slides-per-view="3" 
        :space-between="50"
        @slideChange="onSlideChange" >
            <MySwiperItem v-for="data in datalist" key="data.id">
                <img :src="data.img" alt="" style="width:100%">
            </MySwiperItem>
        </MySwiper>
    </div>
</template>

<script>
    import MySwiper from './MySwiper.vue'
    import MySwiperItem from './MySwiperItem.vue'
    import axios from 'axios'
    export default {
        data() {
            return {
                datalist: []
            }

        },
        components: {
            MySwiper,
            MySwiperItem,
        },
        mounted(){
           axios.get('/test_my.json').then(res=>{
               this.datalist = res.data.data.hot
               console.log(this.datalist); 
           })
        },
        methods:{
            onSlideChange(index){
                console.log("aa",index);
            }   
        }
    }

</script>

<style></style>