// // 1 引入fs模块
const fs = require("fs");
// // 2 调用读取文件方法
// fs.readFile("./test.txt",(err,data)=>{
//    if(err) {throw  err} ;
//     console.log(data.toString());
// })

//  3 使用promise封装
 const p = new Promise(function(resolve,reject){
    fs.readFile("./test1.txt",(err,data)=>{
       //r如果失败 
       if(err) reject(err) ;
      // 如果成功   
        resolve(data);
    })    
     

 });

 p.then(function(value){
     console.log(value.toString());
 },function(reason){
     console.log('读取文件失败');
 })