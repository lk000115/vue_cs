// 导出为此模块函数add
// module.exports.add = function(a,b){
//     return a+b ;
// }

function add(x,y) {
    return x+y ;
}

function text(){
    console.log('aaa'); 
}
// es5的导出写法
// module.exports =  {
//      add ,
//      text
// }
// 导出的另外一种写法

// exports.text = text ;
// exports.add = add ;

// es6的导出
export {add,text};

