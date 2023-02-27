// 在外部文件中定义构造函数
class CreateTabObj{
    // 构造器 定义属性和属性值
    // element  创建生成选项卡的标签对象
    // msgArr   生成选项开内容的数组
    constructor( element , msgArr ){
        this.ele = element ;
        this.arr = msgArr ;
 
        // 定义属性 存储 面向过程中 需要的全局变量
        this.oUlLis;
        this.oOlLis;
    }
 
    // 构造器外定义函数方法
 
    // 函数1 动态生成页面
    setPage(){
        // 创建固定的标签节点 ul ol 
        const oUl = document.createElement('ul');
        const oOl = document.createElement('ol');
 
        // 定义字符串 存储动态渲染生成的ul>li ol>li
        let ulLiStr = '';
        let olLiStr = '';
 
        // 循环遍历数组 根据数组中的内容动态渲染生成li标签
        
        // 之前是 直接调用 变量 arr1 中 存储的数据 
        // 现在是 调用 实例化对象中arr属性存储的数据
        // arr1 ---> this.arr
        this.arr.forEach( function(item,key){
            // item 是 数组单元存储的数据 也就是 存储数据的对象
            // key 是 数组单元的索引下标
 
            // 第一个ul>li 有 class,active样式
            ulLiStr += key === 0 ? `<li name="ulLi" index="${key}" class="active">${item.ulLi}</li>` : `<li index="${key}" name="ulLi">${item.ulLi}</li>` ;
 
            // 第一个ol>li 有 class,active样式
            olLiStr += key === 0 ? `<li class="active">${item.olLi}</li>` : `<li>${item.olLi}</li>` ;
        });
 
 
        // 将字符串写入ul ol 标签
        oUl.innerHTML = ulLiStr ;
        oOl.innerHTML = olLiStr ;
 
        // 将 ul ol 标签 写入 div标签中
 
        // 标签对象 ---> this.ele
        this.ele.appendChild( oUl );
        this.ele.appendChild( oOl );
 
        // 获取所有的ul>li
        this.oUlLis = oUl.querySelectorAll('li');
 
        // 获取所有的ol>li
        this.oOlLis = oOl.querySelectorAll('li');
    }
 
    // 函数2 添加事件
    // 设定参数 存储事件类型 可以是 click 可以是 mouseover 默认值是 mouseover
    setEvent( event = 'mouseover' ){
        // class 构造函数中 this指向 默认是 对象 
        console.log( this);
 
        // 给 父级标签 添加 事件 通过事件委托完成效果
 
        // 提前定义一个变量 存储 原始this指向
        const _this = this ;
 
        // 事件绑定 中 this指向改变 
 
        this.ele.addEventListener( event , function(e){
            // 事件绑定中 this指向 默认是 事件源 
            // 不再是 对象 
            // 也就是在 事件绑定中 this.属性 不能 正确调用对象中的数据 
 
            if( e.target.getAttribute('name') === 'ulLi' ){
 
                // 清除所有 ul>li 的 class,active
 
                
                _this.oUlLis.forEach( function(item , key) {
 
                    // 给 ul>li 清除 class,active
                    item.classList.remove('active');
                    // 给 索引下标相同的 ol>li 清除 class,active
                    _this.oOlLis[key].classList.remove('active');
                })
 
                // 给 点击的 ul>li 添加 class,active
                e.target.classList.add('active');
 
                // 给 点击的 ul>li 索引下标 相同的 ol>li 添加 class,active
                _this.oOlLis[ Number( e.target.getAttribute('index') ) ].classList.add('active');
 
            }
        })
    }
}
