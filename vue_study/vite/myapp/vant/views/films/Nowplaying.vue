<template>

    <div>
        <van-list>
            <van-cell v-for="item in datalist" :key="item.filmId" @click="handleClick(item.filmId)">
                <img :src="item.poster" alt="" style="width:100px;float: left;">
                 {{ item.name }}
            </van-cell>
        </van-list>
    </div>
</template>

<script setup>
import {List as vanList ,Cell as vanCell} from 'vant'
import axios from 'axios' ;
import {ref, onMounted} from 'vue'
import { useRoute, useRouter } from "vue-router";
// const route = useRoute()
const router = useRouter();
const datalist = ref([])
onMounted(  async ()=>{
    const res = await axios({
           url:"https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=4005062",
          
           headers:{
            'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"16932023362813800579334145","bc":"110100"}',
            'X-Host': 'mall.film-ticket.film.list'
           }  
        })

        datalist.value = res.data.data.films 
        // console.log(res.data.data.films);   

})

const handleClick = (id)=>{
    router.push(`/detail/${id}`)
    // console.log(route);
}

</script>




<!-- <script>    // option api 写法
import axios from 'axios'
export default{
    data(){
        return{
            datalist:[]
        }
    },
    async mounted(){
       const res = await axios({
           url:"https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=4005062",
          
           headers:{
            'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"16932023362813800579334145","bc":"110100"}',
            'X-Host': 'mall.film-ticket.film.list'
           }  
        })
        this.datalist = res.data.data.films 
        // console.log(this.datalist);


     },
     methods:{
        handleClick(id){
            // console.log(id);
            this.$router.push(`/detail/${id}`)

            //另一种传参方式
            //this.$router.push({
        //      path:"/detail" ,
        //      qurey:{myid:id }         
         //   })
        }
     }
     

}
</script> -->