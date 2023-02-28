### node 节点
1. children   父节点的所有直接子节点 
2. parentNode 父节点
3. 创建节点   document.createElement 
4. 添加节点   node.appendChild  insertBfore(要添加的元素,添加位置)
5. 删除节点   node.removeChild(child)    删除父节点(node)下面的子节点(child)
6. 复制节点   node.cloneNode(true)   括号里面是true就复制标签里面的内容,否指只复制元素

### 元素的新建，增 删 改 查



*  注册事件（绑定事件）
   注册事件两种方式： 传统方式和方法监听注册方式
   传统方式 ： 例： btn.onclick = function(){}   同一事件只能绑定一个处理函数
   方法监听： 例：btn.addEventListener('click',function(){})  同一事件可以绑定两个处理函数

*  删除事件（解绑事件）
*  DOM事件流
*  事件对象
*  阻止事件冒泡
*  事件委托
*  常用鼠标事件   contextmenu 禁止鼠标右键   selectstart 开始选中
*  常用键盘事件
*  
### 对dom操作,主要对元素的操作,有创建,增,删,改.查,属性操作,事件操作
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
  - 鼠标事件 onclick onmouseover  onfocus
  - 注册事件的两种方式
    1. 传统方式:
       - btn.onclick = function(){处理事件代码}    同一事件只能绑定一个处理函数
    2. 方法监听注册方式
       - btn.addEventListener('click' , fn [,可选布尔值] ) 同一事件可绑定多个处理函数
    3.  123
