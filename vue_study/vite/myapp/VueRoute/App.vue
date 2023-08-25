<!-- 
    vue如有测试
 -->

 <template>
    <div>
        根组件
        <!-- 插槽 路由容器 -->
        <router-view></router-view>
        <Tabbar></Tabbar>
    </div>
 </template>

 <script setup>
 import Films from './views/Films.vue'
 import Center from './views/Center.vue'
 import Cinemas from './views/Cinemas.vue'
 import Tabbar  from './components/Tabbar.vue'


</script>


<style>
*{
   margin: 0;
   padding: 0;
}
ul{
    list-style: none;
}



</style>