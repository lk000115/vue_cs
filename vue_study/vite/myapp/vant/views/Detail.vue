<template>
    <div>
        <button @click="handleBack">返回</button>
        detail
        <h3>猜你喜欢</h3>
        <ul>
            <li @click="handleClick">电影1</li>
        </ul>
    </div>
</template>

<script setup>
    import { onMounted, onBeforeMount, onBeforeUnmount,watch } from "vue";
    import useTabbarStore from "../store/tabbarStore";
    import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router";
    const route = useRoute();           //代替this.$route  得到传过来的params.myid
    const router = useRouter();         //代替 this.$router,
    const store = useTabbarStore();

    onBeforeMount(() => {
        // store.isTabbarShow = false;
        store.change(false)
    });
    onBeforeUnmount(() => {
        // store.isTabbarShow = true;
        store.change(true)

    });
    const handleClick = () => {
        router.push(`/detail/6789`);
        // console.log(route.params);
    };
    const handleBack = () => {
        router.back();
    };
    watch(()=>route.params,()=>{
        console.log("监听ID变动");
    })
    //加载页面从后台取数
    onMounted(()=>{
        console.log("从后台取数 ",route.params.myid);
    })
    //路由更新的回调
    onBeforeRouteUpdate((to,from)=>{
        console.log("路由更新到了--- ",to.params.myid)
    })
    //     mounted(){
    //     //接受上一个页面传来的参数,并从后台取数
    //     //    console.log("从后台取数 ",this.$route.params.myid);

    //    //另一种接受数据方式
    //    //console.log("从后台取数 ",this.$route.qurey.myid);
    //     },
    // methods:{
    //     handleBack(){
    //         this.$router.back()
    //     },
    //     handleClick(){
    //         this.$router.push(`/detail/6789`)
    //     }
    // },
    // watch:{
    //     "$route.params": function(){
    //         console.log("猜你喜欢传参--从后台取数 ",this.$route.params.myid);
    //     }
    // }
</script>
