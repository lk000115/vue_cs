<template>
    <div>
        <div style="height: 100px;line-height: 100px;text-align: center;background-color: #009f5d;">轮播</div>
        <div>
            <ul class="fm">
                <router-link custom to="/films/nowplaying" v-slot="{ isActive, navigate }">
                    <li  @click="navigate">
                       <span :class="isActive ? 'kerwin' : ''" >正在热映</span>  
                    </li>
                </router-link>
                <router-link custom to="/films/comingsoon" v-slot="{ isActive, navigate }">
                    <li  @click="navigate">
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
.fm{
    display: flex;
    height: 50px;
    line-height: 50px;
    text-align: center;
    li{
        flex:1
    }
}
.kerwin{
    color: red;
    border-bottom: 3px solid red;
}

</style>