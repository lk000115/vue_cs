<template>
<div>
   <button>返回</button>
   <span>{{app.navTitle}}</span>
   <button>我的</button>

</div>

</template>
<script>
export default{
   inject:["app","navTitle"]
}
</script>

<style scoped>
div{
   display: flex;
   width: 100%;
  justify-content: space-between;
  height: 50px;
  line-height: 50px;
  background: gray; 
}
</style>