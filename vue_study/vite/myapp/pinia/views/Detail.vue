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
    import { onMounted, onBeforeMount, onBeforeUnmount } from "vue";
    import useTabbarStore from "../store/tabbarStore";
    import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router";
    const route = useRoute();
    const router = useRouter();
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
        // console.log(router);
        router.push(`/detail/6789`);
    };
    const handleBack = () => {
        router.back();
    };
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
