<template>

<div>
    <ul>
        <li v-for="data in $store.state.cinemalist" :key="data.cinemaid">
             {{ data.name }}
        </li>
    </ul>
</div>

</template>

<script>
export default{
    mounted(){
        if(this.$store.state.cinemalist.length===0){
             this.$store.dispatch("getCinemaList") 
        }else{
            console.log(this.$store.state.cinemalist);
        }

    }
     


}




</script>