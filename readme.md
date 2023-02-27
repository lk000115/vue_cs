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
*  常用鼠标事件
*  常用键盘事件
*  