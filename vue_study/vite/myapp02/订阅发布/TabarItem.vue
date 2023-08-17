<template>

   <li @click="handelclick">
      {{item}}
   </li>

</template>

<script>
import store from './store.js' 
export default{
   props:['item'],
   // inject:["app","navTitle"],
   methods:{
      handelclick(){
         // console.log(this.app.navTitle);
         // this.app.navTitle = this.item
         store.publish(this.item)
      }
   },

}


</script>
