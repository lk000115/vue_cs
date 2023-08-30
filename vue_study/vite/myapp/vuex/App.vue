<!-- 
    vue如有测试
 -->

<template>
    <div>
        <!-- 插槽 路由容器 -->
        <router-view></router-view>
        <!-- this.$store.state.isTabbarShow -->
        <Tabbar v-show="isTabbarShow"></Tabbar>
    </div>
</template>

<script >
    import Tabbar from './components/Tabbar.vue'
    import {mapState} from 'vuex'   //导入辅助函数
    export default {
        components: {
            Tabbar,
        },
        mounted(){
            console.log("----",this.$store.state.isTabbarShow);
        },
        // computed:{
        //     isTabbarShow(){
        //         return this.$store.state.isTabbarShow
        //     }
        // },
        computed:{
           ...mapState(["isTabbarShow"]),
        },
        data() {
            return {


            }
        }

    }

</script>


<style>
* {
    margin: 0;
    padding: 0;
}

ul {
    list-style: none;
}
</style>