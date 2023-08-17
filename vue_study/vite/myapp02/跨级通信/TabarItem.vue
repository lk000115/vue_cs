<template>

   <li @click="handelclick">
      {{item}}
   </li>

</template>

<script>
export default{
   props:['item'],
   inject:["app","navTitle"],
   methods:{
      handelclick(){
         console.log(app.navTitle);
         // app.navTitle = this.item
      }
   }

}


</script>
