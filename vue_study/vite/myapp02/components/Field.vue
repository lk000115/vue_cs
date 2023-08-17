<template>
   <div style="background-color:aquamarine;">
       <label for="">{{label}}</label>  
       <input :type="type"> 
        
   </div>

</template>
<script>
export default{

    props:{
      label:{
        type:String,
        default:""
      },
      type:{
        type:String,
        default:"text"
      } 

    }

} 


</script>