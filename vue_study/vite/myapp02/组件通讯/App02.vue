<!--父传子  子传父  父强权  -->

<template>
  <div>
     <Child mytitle="父属性" :myname="name" :myleft="left"  :right="aright"
      @event="handleEvent"  ref="mych">
     </Child>
     <Field label="用户名" type="text"> </Field>
     <Field label="密码" type="password"> </Field>
     <Field label="年龄" type="number"> </Field>

  </div>
  <div>
     <button @click="handlebtn">refs</button>
     <input type="text" ref="myinput">  
  </div>
</template>


<script>
import Child from "./Child.vue";
import Field from "./Field.vue"
export default{
   components:{
      Child,
      Field,
   },
   data(){
      return{
        name:"aa",
        left:12,
        aright:true

      }

   },
   methods:{
      handleEvent(a,b){
         console.log("自定义事件",a,b);
      },
      handlebtn(){
         console.log(this.$refs.mych);
      }
   }
}

</script>
