<template>
    <div>
        <div class="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="data in datalist" key="data">
                    {{data}}
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

        </div>
    </div>
</template>

<script>
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';
// import 'swiper/swiper-bundle.css' ;
// import {Pagination} from 'swiper' ;
// import 'swiper/components/pagination.min.css' ;
// Swiper.use([Pagination])

    export default {
        data(){
           return{
              datalist:[]  
           }

        },
        mounted() {
           setTimeout(() => {
               this.datalist=["aa","bb","cc"]
               
            //每次数据更新都调用一次  $nextTick  
               this.$nextTick(()=>{
                var mySwiper = new Swiper('.swiper', {
                // direction: 'vertical', // 垂直切换选项
                loop: true, // 循环模式选项
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                },
                on:{
                   slideChange:function(){    
                      console.log("改变了"+ this.activeIndex);
                   },
                }

            })   
               })
           }, 1000);  

            },
        updated(){

        },    
    }

</script>

<style>
.swiper{
   width: 600px;
   height: 300px;
}

</style>