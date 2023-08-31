<template>
    <div>
        <!-- <div style="height: 100px;line-height: 100px;text-align: center;background-color: #009f5d;">轮播</div> -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>

        <div class="sd">
            <ul class="fm">
                <router-link custom to="/films/nowplaying" v-slot="{ isActive, navigate }">
                    <li @click="navigate">
                        <span :class="isActive ? 'kerwin' : ''">正在热映</span>
                    </li>
                </router-link>
                <router-link custom to="/films/comingsoon" v-slot="{ isActive, navigate }">
                    <li @click="navigate">
                        <span :class="isActive ? 'kerwin' : ''">即将上映</span>
                    </li>
                </router-link>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script setup>
    import Nowplaying from '../views/films/Nowplaying.vue'
    import Comingsoon from '../views/films/Comingsoon.vue'

</script>

<style scoped lang="scss">
.sd .fm {
    display: flex;
    height: 50px;
    line-height: 50px;
    text-align: center;
    position: sticky;
    top: 0;
    z-index: 100;
    background: white;
    li {
        flex: 1
    }
}

.kerwin {
    color: red;
    border-bottom: 3px solid red;
}
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }

</style>