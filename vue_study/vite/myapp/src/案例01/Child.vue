<template>
    <div>
        child
        <button @click="handleclick">子节点按钮</button>
    </div>   
</template>

<script>
export default{
    data(){
        return{
          childtitle:"child---111"  
        }
    },
    methods:{
       handleclick(){
          this.$emit("event",this.childtitle)
       }

    }

}


</script>

<style scoped>

div{
    background:yellow;
}


</style>

