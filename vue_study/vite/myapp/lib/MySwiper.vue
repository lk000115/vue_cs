<template>
    <div class="swiper">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    // import Swiper bundle with all modules installed
    import Swiper from 'swiper/bundle';
    // import styles bundle
    import 'swiper/css/bundle';
    export default {
        
        props:{
            slidesPerView:{
                type:Number,
                default:3  
            },
            spaceBetween:{
                type:Number,
                default:50
            },   
        },
        mounted() {
        var mySwiper = new Swiper('.swiper', {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            slidesPerView:this.slidesPerView,
            spaceBetween:this.spaceBetween,

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            on: {
                slideChange: ()=>{
                    // console.log("改变了" + this.activeIndex);
                    this.$emit('slideChange',mySwiper.activeIndex)  
                },
            }
        })

    }, 
    }


</script>

<style>
.swiper{
   width: 600px;
   height: 300px;
}
</style>