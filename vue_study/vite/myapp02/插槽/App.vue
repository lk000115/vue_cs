<template>
    <div>
        <input type="text" v-model="text">
        <!--v-slot="myprops" 简写#=myprops  -->
        <!-- <Nowplay #=myprops > -->
            <!--myprops对象可以直接解构，下面的nm也是结构出对象  -->
            <Nowplay #="{mylist}" >   
            <ul>
                <li v-for=" {nm} in mylist " key="data.id">
                    <div v-if="nm.includes(text) && text!='' " style="color:red">
                        {{nm}}      
                     </div>
                     <div v-else>
                        {{nm}}
                     </div>
                </li>
            </ul>          
        </Nowplay>
    </div>
</template>

<script>
import Nowplay from "./Nowplay.vue";


export default {
   components:{
      Nowplay,
   },
   data(){
    return{
       text:"",
    }
   },
   methods:{
    
   },

}

</script>


