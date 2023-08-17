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
<!-- json-server  test.json  --watch       运行程序 -->
  - nmp i  node-dev  -g       服务器实时刷新 
  - npm i  json-server -g     实时模拟后端api接口   
  - 用preview on webserver  代替  live server,
  - "content-type": "application/x-www-form-urlencoded"  
  - json-server 请求后端第一页3条数据   ?_page=1&limit=3  
  - Access-Control-Allow-Origin: *        允许跨域访问,由后端设置   
  - 跨域访问还可以用jsonp技术解决,(浏览器不同域名下的文件是不能访问,就是跨域限制)
  - vite安装  npm create vite@latest
  - vue 插件 volar
  - vite安装  npm create vite@latest  运行 ：  npm run dev
  - v-bind="$attrs"  加上此属性直接把父节点的属性透传过来
  - 父节点传子节点,通过在父节点上设置自定义属性,子节点设置prop属性接受
  - 子节点传父节点,通过父节点设置自定义事件,子节点执行this.$emit('event',this.data)把数据传递给父节点
  - $refs父组件强权,父组件的子组件引用上设置ref属性.父组件函数中用this.$refs可以直接拿到相应子组件的实例
  - 在子组件中通过$parent访问父组件,$root访问根组件
  - 跨级通信: 父组件提供---provide    子组件注入---inject
  - 订阅发布
