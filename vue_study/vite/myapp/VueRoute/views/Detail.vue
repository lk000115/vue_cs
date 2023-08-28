<template>
<div>
    <button @click="handleBack">返回</button>
    detail
</div>

</template>

<script>
export default{
    mounted(){
    //接受上一个页面传来的参数,并从后台取数  
       console.log("从后台取数 ",this.$route.params.myid); 

    },
    methods:{
        handleBack(){
            this.$router.back()
        }
    }
  

}

</script>