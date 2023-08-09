// 回调函数

// var m = function(x,y,f){
//     return f(x,y) ;      //返回值是一个函数,传入参数f是一个函数
// }
// var ad = function(x,y){
//    return  x+y ;
// }
// var wl = function(x,y){
//    return  x*y  ;
// }
// console.log(m(3,4,wl));    // 执行函数m时,根据传入的函数的wl的功能来执行相应的功能 



function fn (x,obj){
    let defn = {
       fn1: function(){
       }, 
      //  定义回调函数  
       fn2:function(){
       }
    }      
   let{fn1,fn2} = {...defn,...obj} ;
   x = x +2;  
   fn1(x);   //把参数(结果)处理完成再传给函数体
   
}

class OPP {
   constructor(){
      this.data = 0 ;
      this.init();      
   }
   init(){
      this.getdata();      
   }
   getdata(){
      fn(20,{
        // 函数中的参数值的处理逻辑, 其中x作为返回值即实参,传递给回调函数
      fn1:(res)=>{
         this.data = res;
         console.log(this.data);
;       }
     })

   }


}

let op = new OPP();


// fn1作为具体的回调函数体的处理逻辑,res作为形参,接受实参传参,  

