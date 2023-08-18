<!--父传子  子传父  父强权  -->

<template>
  <div>
     <Child mytitle="sj" :myname="name" :myleft="left"  :right="aright"
      @event="handleEvent"  ref="mychild">
     </Child>
    <p>---下面引入了3个label标签和3个input标签,通过父组件的自定义属性来引入子组件的标签--- </p> 
     <Field label="用户名" type="text"> </Field>
     <Field label="密码" type="password"> </Field>
     <Field label="年龄" type="number"> </Field>
  </div>
  <p>-父组件在引入的子组件(如:Child)标签上设置ref属性,可以拿到子组件的实例,即可以获取子组件的所有数据----</p>
  <div>
     <button @click="handlebtn">父强权取数</button>
     <!-- <input type="text" ref="myinput">   -->
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
        left:80,
        aright:true

      }

   },
   methods:{
      handleEvent(a,b){
         console.log("自定义事件",a,b);
      },
      handlebtn(){
         console.log(this.$refs.mychild);
      }
   }
}

</script>
