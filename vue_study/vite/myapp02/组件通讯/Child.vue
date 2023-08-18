<template>
   <div>
       <div>
        <p>
        父组件上的自定义属性,子组件通过props属性接收,父组件的数据变动会自动传输到子组件:
        </p>
         父组件静态数据:{{ mytitle }}--------父组件动态数据:{{myname}}
       </div>
      <p>
        父组件动态数据:{{myleft}}-----子组件props上做了校验,只允许是数字
      </p> 
      <button v-show="right">按钮</button>
      <button @click="handleclick">子传父--通过自定义事件</button>
      <div>
          <button @click="handleclick02">子组件拿父组件数据</button>
      </div>
   </div>
</template>

<script>
export default{
    props:{
     'mytitle': String,
     'left':Number,
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
           datalist:[1,2,3],
           fname:"sj--子组件数据"
        }
    },
    methods:{
// 通过触发执行父节点的自定义事件event,把子节点的数据传递给父节点 
        handleclick(){
            this.$emit('event',this.datalist,this.fname)  
        },
// 子组件通过$parent拿父组件的数据,$root拿根组件数据, $parent.$parent拿父亲的父亲的数据 
        handleclick02(){
            console.log(this.$parent.name);
        }
    }

}


</script>

