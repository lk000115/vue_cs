<template>
<div>
   <h2>login页面</h2>
    <button @click="handleLogin" >注册</button>
</div>

</template>

<script >
export default{
 
   methods:{
    handleLogin(){
       localStorage.setItem("token","aaaaaa")  
       this.$router.push("/films")   //引导跳转到films页面

    }  
   

   }  



}



</script>