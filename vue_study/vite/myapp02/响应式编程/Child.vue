<template>
         <div>
             child
         </div>

</template>


<script>
export default{
    props:['title'],
    setup({title},{emit}){
        console.log();
        emit('event',"来自孩子的问候")
     

    }
   

}

</script>