<template>
    <button @click="isShow =!isShow">显示/隐藏 </button>
    <Transition name="kj" appear>
        <div v-if="isShow">11111 </div>
    </Transition>
</template>

<script>
    export default {
        data() {
            return {
                isShow: true

            }

        }

    }

</script>

<style>
.kj-enter-active {
    animation: kjanimate 1s;
}

.kj-leave-active,
{
animation: kjanimate 1s rerverse;
}

@keyframes kjanimate {
    0% {
        transform: translateX(100px);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;


    }


}
</style>