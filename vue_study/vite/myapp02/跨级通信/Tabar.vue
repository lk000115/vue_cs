<template>

   <div>
      <ul>
        <!-- <li v-for="data in datalist" key="data">
            {{ data }}
        </li> -->
          <TabarItem v-for="data in datalist" key="data" :item="data">

          </TabarItem>
      </ul> 
   </div>

</template>


<script>
import TabarItem from './TabarItem.vue'
export default{
   components:{
     TabarItem,
   }, 
   data(){
       return{
         datalist:['首页','列表','我的']

       }

   }


}

</script >

<style scoped>
ul{
   display: flex;
   position: fixed;
   bottom:0px;
   width: 100%;
   height: 50px;
   line-height: 50px;
}
li{
   flex:1 ;
   text-align: center;
}


</style>