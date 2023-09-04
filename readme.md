### node 节点
1. children   父节点的所有直接子节点 
2. parentNode 父节点
3. 创建节点   document.createElement 
4. 添加节点   node.appendChild  insertBfore(要添加的元素,添加位置)
5. 删除节点   node.removeChild(child)    删除父节点(node)下面的子节点(child)
6. 复制节点   node.cloneNode(true)   括号里面是true就复制标签里面的内容,否指只复制元素
7. css一开始需要设定margin和padding为 0px

### 元素的新建，增 删 改 查



*  注册事件（绑定事件）
   注册事件两种方式： 传统方式和方法监听注册方式
   传统方式 ： 例： btn.onclick = function(){}   同一事件只能绑定一个处理函数
   方法监听： 例：btn.addEventListener('click',function(){})  同一事件可以绑定两个处理函数

*  删除事件（解绑事件）
   例如: div.onclick = null   div.removeEventListener('click', fn)  ---fn:是绑定的事件函数
*  DOM事件流
   1 捕获阶段  2 执行阶段 3 冒泡阶段
   元素.onclick = function 形式只能得到冒泡阶段   
   元素.addEventListener('click',fn,true) 能处理捕获和冒泡,第三参数=true时,得到捕获阶段,
   第三参数为false或空时,得到冒泡阶段,
   有些事件没有冒泡 如: onblur onfocus
*  事件对象
   事件处理函数的系统自带参数: event,记录事件发生的一些信息.如鼠标事件就记录鼠标点击坐标的参数等  
*  阻止事件冒泡
*  事件委托
   在父节点上设置事件监听,让子节点的事件冒泡到父节点来处理 
*  常用鼠标事件   contextmenu 禁止鼠标右键   selectstart 开始选中
*  常用键盘事件
*  
### 对dom操作,主要对元素的操作,有创建,增,删,改.查,属性操作,事件操作
- 利用DOM,JAVASCRIPT可以方便操作html,dom使得html成为一颗dom树,包含文档,元素,节点 
- 创建 
  - document.write   　*[缺点:] 在页面加载完后会重绘页面,原有的页面都会消失*
  - innerHTML       　*如果循环拼串复制给innerHTML,会影响效率*  
  - document.creatElement      
- 元素的增加   
  - 父元素.appendChild(子元素)　　　
  - insertBfore
- 删除节点
  - node.removeChild(child)    删除父节点(node)下面的子节点(child)
- 改 主要修改dom的元素属性,内容,表单的值
  - 修改元素的属性: src,href,title等
  - 修改普通元素内容:innerHTML , innerText
  - 修改表单元素: value , type , disable等
  - 修改元素样式: style , className 
- 查 主要获取查询dom的元素
  - DOM提供的API方法: getElmentById , getElementsByTagName等
  - H5提供的新方法: querySelector , querySelectorAll
  - 利用节点操作获取元素: 父(parentNode), 子(children),兄(previiousElementSibling, nextElemntSibling)
- 属性的操作
  - setAttribute: 设置dom的属性
  - getAttribute: 得到dom的属性值
  - removeAttribute 移除属性
- 事件操作  给事件绑定处理函数或者说是注册事件
  - 鼠标事件 onclick onmouseover  focus(获取焦点),blur (失去焦点)
  - 注册事件的两种方式
    1. 传统方式:
       - btn.onclick = function(){处理事件代码}    同一事件只能绑定一个处理函数
    2. 方法监听注册方式
       - btn.addEventListener('click' , fn [,可选布尔值] ) 同一事件可绑定多个处理函数
  - 键盘事件  keyup keydown keypress(检测不到功能键:回车键,等) 
  - 事件对象属性 
      event.target  返回执行事件的对象
  - 事件对象方法
      Event.preventDefault()  取消浏览器对当前事件的默认行为
      Event.stopPropagation 阻止事件在DOM中继续传播
###  BOM
- resize 屏幕大小改变时触发事件  可以获取窗口尺寸 window.innerWidth

###  node导入报错
 
   import { createRequire } from 'module';
   const require = createRequire(import.meta.url);

  /*
   以上两个语句解决COMMONJS导入规范报错问题
   */
### 语法要点   
<!-- json-server  test.json  --watch       运行程序 -->
  - nmp i  node-dev  -g   全局安装    服务器实时刷新, 
  - npm i  json-server -g  全局安装   实时模拟后端api接口   
  - 用preview on webserver  代替  live server,
  - "content-type": "application/x-www-form-urlencoded"  
  - json-server 请求后端第一页3条数据   ?_page=1&limit=3  
  - Access-Control-Allow-Origin: *        允许跨域访问,由后端设置   
  - 跨域访问还可以用jsonp技术解决,(浏览器不同域名下的文件是不能访问,就是跨域限制)
  - vue 插件 volar
  - vite安装  npm create vite@latest  运行 ：  npm run dev
  - v-bind="$attrs"  加上此属性直接把父组件的属性透传过来
  - 父组件传子组件,通过在父组件上设置自定义属性,子组件设置prop属性接受
  - 子组件传父组件,通过父组件设置自定义事件,子组件执行this.$emit('event',this.data)把数据传递给父组件
  - $refs父组件强权,父组件的子组件引用上设置ref属性.父组件函数中用this.$refs可以直接拿到相应子组件的实例
  - 在子组件中通过$parent访问父组件,$root访问根组件
  - 跨级通信: 父组件提供---provide    子组件注入---inject
  - 订阅发布-- 建立一个中间js文件，其中存储数组和订阅方法，发布方法，需要数据的组件作为订阅方，把回调函数存入数组，
    提供数据的一方作为发布方，把数据通过发布方法传给回调函数并执行，数据最终显示在订阅方组件上 
  - 组件上的v-model,子组件接受modelValue属性,执行事件updata:modelValue,子组件上用this.$emit("updata:modelValue",target.value)
  - 异步组件 import {defineAsyncComponent} from vue        
  - 生命周期  created--->mounted-->updated-dom更新后被调用(所有状态改变都会执行)，$nextTick(()=>{}) : 此回调函数在updated之后执行
  - 生命周期销毁 beforeUnmount  unmounted: 组件被卸载-如组件上设置状态，组件被隐藏(v-if  v-show控制的组件卸载或隐藏)都将执行 ，
    组件卸载后，上面绑定的状态，方法等数据都将被清除，但是绑定到windows上的方法和属性必须自己手动清除，  
  - 安装轮播组件 npm i swiper --save 

### vue几种写法

 ```  
// 1 html页面
   var obj ={
        //定义数据
        data(){
           return{
             aa:"da1",
             bb:"da2"
           }          
        },
        //定义函数 
        methods:{
           a (){},
           b (){}
        } 
        //数据监听 
        watch:{
          被监听数据1: function(value){"监听处理函数1",value},  //可以写匿名函数,value是被监听数据变动的值  
          被监听数据2: ()=>{"监听处理函数2"},        //可以写箭头函数 
        }
       //计算属性
       computed:{
         computedName(){
            return 结果
         }
       },  
   }
   //再把以上定义的数据挂载到DOM主节点上 
   var app = Vue.createApp(obj).mount("#box");
-----------------------------------------------------------------------------
// 2 选项式 API (Options API)--vue2.0   组件写法1
  //模块导入
  import * from 'vue'
  //组件数据导出 
   export default{
    //组件注册
      components:{
         组件1,
         组件2 
      },
     //数据定义    
      data(){
        return{
          aa:"da1",
          bb:"da2"         
        }
      },
     //方法定义 
      methods:{
       a (){},
       b (){}        
     },
    //数据监听 
     watch:{
      被监听数据1: function(){"监听处理函数1"},  //可以写匿名函数  
      被监听数据2: ()=>{"监听处理函数2"},        //可以写箭头函数 
    }
    //计算属性
     computed:{
      computedName(){
         return 结果
       }
   },      
   //如果父组件设置了自定义属性传值给子组件,子组件需设置props接受
     props:{
        属性1:{
          type:String
          default:"aa"
        },
        属性2:{
          type:Number
          default:12 
        }
     } 

  } 

-----------------------------------------------------------------------------
// 3 组合式 API (Composition API)--vue3.0 vca  组件写法2 
  //模块导入
  import {ref,reactive,computed,watch} from 'vue'
  export default{
   //组件注册
     components:{
       组件1,
       组件2
     },
     props:['title'] 
     setup({title},{emmit}){   //子组件设置两个参数接受父组件传递的属性和自定义事件
    //初始化响应式对象      
       //方法1:
       const obj = reactive({
          name:"aa",
          age: 18
       })
       //方法2
       const mytest = ref("aa")
    //方法定义
       const handleclk = ()=>{函数体} 
    //计算属性
       const computedName = computed(()=>obj.name)    
    //监听属性
       watch(data,(value)=>{value})
    //函数定义
       const handleClk = ()=>{
          console.log(obj.name,mytest.value)
          emmit("event","传递给父组件的数据")
      }
        return{
           name,
           age,
           mytest,
           computedName,
           hanleClk
        }
     }   
  } 


------------------------------------------------------------
// vue3.0的语法糖
<script  setup>    //直接把setup写在标签上,代码中不在需要写return语句
   import {ref,reactive,computed,watch,onmounted} from 'vue'
   import 组件  from  '组件'  //组件导入只需要此一条语句,不需要注册
     import {defineProps,defineEmits} from 'vue'   //引入父传子,子传父的处理函数
  //定义响应式数据
   const name = ref("aa")
   //定义父组件传来的自定义属性接受变量,并对值做校验
   const props = defineProps({
      mytitle:{
        type:String,
        default:"初始值"
      }
   })
   //定义父组件传来的自定义事件处理函数,通过执行此函数可以传值给父组件
   const emit = defineEmits(["event1","event2"])
   //组件状态提供--在父件上
   provide("myname",name)
   //组件状态注入--在子组件上,此数据可以双向修改
   const myname = inject("myname")
  //计算属性
   const computedName = computed(()=>name.value)    
  //监听属性
   watch(data,(value)=>{value})
  //函数定义
   const handleClk = ()=>{
       console.log(name.value)
       emmit("event","传递给父组件的数据")  //父组件上自定义事件event,子组件激活此事件并传递数据
       console.log(myname.value)
       emit("event1","来自子组件的问候")    //子传父--触发父组件的自定义事件,并把值传给父组件  
       console.log(props.mytitle)        //父传子的值 

    }
    // 生命周期,组件加载 onMounted
    onMounted(()=>{
        console.log("处理代码")
    })

</script>

 ```

### vue-router
- 安装 npm install vue-router@4 --save
- <router-view> 装载组件的容器.利用插槽技术,根据路由配置加载不同的组件
- <router-link> 组件内定义跳转的容器
 ### vuex        vuex与vca不兼容
- 安装 npm i vuex@next --save  
- 设定一个index.js文件同一存放各组件共享的状态和缓存数据,即共享存储store
- 更改状态:组件提交更改申请 this.$store.commit("函数名-fn"),store中的mutations根据申请执行fn来修改状态
- 数据缓存,组件提交获取数据申请--this.$store.dispatch("getList"),store中的actions把异步数据取回.并向
  mutations发数据提交,组件在获取数据前先检查store中是否有数据,如果有就可以直接从缓存取数
- 辅助函数--更方便的拿store中的数据  
### Pinia  替代vuex
- npm i pinia 
  
### vant 4  手机端组件库-适用vue3  
- npm i vant
- 样式加上 :deep(被作用选择器)-----深度选择器
- lodash库，js工具库   npm i lodash
- lodash  js工具库   npm i lodash   import _ from 'lodash'

### element 
- npm i element-plus --save
