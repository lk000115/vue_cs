<template>
    <div>
        <select v-model="type">
            <option :value="1">App订票</option>
            <option :value="0">前台兑换</option>
        </select>
        <ul>
            <!-- 传参给store,通过store.getters计算把结果返回 -->
            <!-- $store.getters.filterCinemaList  被mapGetters映射了-->
            <li v-for="data in filterCinemaList(type)" :key="data.cinemaid">
                {{ data.name }}
            </li>
        </ul>
    </div>
</template>

<script>
   import{mapState,mapGetters,mapActions} from 'vuex'
    export default {
        data() {
            return {
                type: 1
            }
        },
        //向store申请数据,如果缓存有数据直接获取,如果无就请store中的actions去获取
        mounted() {
            // this.$store.state.cinemalist.length
            if (this.cinemalist.length === 0) {
                // this.$store.dispatch("getCinemaList")
                this.getCinemaList()
            } else {
                console.log(this.cinemalist);
            }

        },
        methods:{
           ...mapActions(["getCinemaList"])
        },
        computed:{
            ...mapState(["cinemalist"]),
            ...mapGetters(["filterCinemaList"])
        },
        // computed: {
        //     filterCinemaList() {
        //         return this.$store.state.cinemalist.filter(item => item.eTicketFlag === this.type)
        //     }
        // }



    }




</script>