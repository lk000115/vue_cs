<template>

   <div>
       <div class="aa" v-kw="111">
            <div v-kw02="'red'" >222</div>
            <div v-kw02="whichcolor" >333</div>
       </div>

   </div>


</template>

<script>
export default{
   data(){
      return{
         whichcolor: 'blue'
      }

   },

// 局部定义自定义指令
   directives:{
    // 
    //    kw02:{
    //        mounted(el,binding ){
    //           el.style.background = binding.value
    //        },
    //        updated(el,binding){
    //         el.style.background = binding.value
    //        }                
    //    }
        //以上的简写形式
          kw02(el,binding ){
            el.style.background = binding.value
          }  
   }

}


</script>