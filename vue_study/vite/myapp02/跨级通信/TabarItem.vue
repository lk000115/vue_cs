<template>

   <li @click="handelclick">
      {{item}}
   </li>

</template>

<script>
export default{
   props:['item'],
   inject:["app"],
   methods:{
      handelclick(){
         // console.log(this.app.navTitle);
         this.app.navTitle = this.item
      }
   }

}


</script>
