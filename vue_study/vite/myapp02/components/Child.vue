<template>
   <div>
       child--{{ mytitle }}{{myname}}
      <p>
        {{myleft}}
      </p> 
      <button v-show="right">按钮</button>
      <button @click="handleclick">子传父--通过自定义事件</button>
   </div>
</template>

<script>
export default{
    props:{
     'mytitle': String,
     myname:{
        required:true,             //此字段是必传值            
        validator(value){
            return ["aa","bb","cc"].includes(value)    //检查属性取值范围
        }
    },
    'myleft':{
        type:[String,Number],
        default:"kk"
    },
    'right': Boolean

    },
    data(){
        return{
           datalist:[1,2,3]
        }
    },
    methods:{
// 通过触发执行父节点的自定义事件event,把子节点的数据传递给父节点 
        handleclick(){
            this.$emit('event',this.datalist)  
        }
    }

}


</script>

