<!-- 
    vca: 组合式 API (Composition API)
    vca中的provide 和 inject
 -->

 <template>

<div>
    <Navbar/>

    <component :is="which"></component>

</div>
 </template>


<script>
import Navbar from './Navbar.vue'
import List from './List.vue'
import Detail from './Detail.vue'
import {ref,provide} from 'vue'

export default{
    components:{
        Navbar,
        List,
        Detail
    },
    setup(){
        const which = ref("List")
        provide("which",which)
        return{
            which
        }

    }


}



</script>