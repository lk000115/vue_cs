<template>
<div>
    <button @click="handleBack">返回</button>
    detail
    <h3>猜你喜欢</h3>
    <ul>
        <li  @click="handleClick">电影1</li>
    </ul>
</div>

</template>

<script>
import{mapMutations} from 'vuex'    //辅助函数可以把store中的Mutations函数映射为本地函数
export default{
    beforeMount(){
        // this.$store.state.isTabbarShow = false
        // this.$store.commit("changeTabbar",false)
        this.changeTabbar(false)
    },
    beforeUnmount(){
        // this.$store.state.isTabbarShow = true
        // this.$store.commit("changeTabbar",true) 
        this.changeTabbar(true)
    },
    mounted(){
    //接受上一个页面传来的参数,并从后台取数  
       console.log("从后台取数 ",this.$route.params.myid);
       
   //另一种接受数据方式    
   //console.log("从后台取数 ",this.$route.qurey.myid);
    },
    methods:{
        ...mapMutations(["changeTabbar"]),
        handleBack(){
            this.$router.back()
        },
        handleClick(){
            this.$router.push(`/detail/6789`)
        }
    },
    watch:{
        "$route.params": function(){
            console.log("猜你喜欢传参--从后台取数 ",this.$route.params.myid);
        }  
    }
    

}

</script>