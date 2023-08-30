<template>

    <div>
        <ul>
            <li v-for="item in datalist" :key="item.filmId" @click="handleClick(item.filmId)">
                 {{ item.name }}
            </li>
        </ul>
    </div>
</template>

<script>
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


</script>