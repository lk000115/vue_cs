// 1 引入fs模块
const fs = require("fs");
// // 2 调用读取文件方法
// fs.readFile("./test.txt",(err,data)=>{
//    if(err) {throw  err} ;
//     console.log(data.toString());
// })

//  3 使用promise封装
//  const p = new Promise(function(resolve,reject){
//     fs.readFile("./test1.txt",(err,data)=>{
//        //r如果失败 
//        if(err) reject(err) ;
//       // 如果成功   
//         resolve(data);
//     })    
     

//  });

//  p.then(function(value){
//      console.log(value.toString());
//  },function(reason){
//      console.log('读取文件失败');
//  })

// 4 嵌套调用

// fs.readFile("./test.txt",(err,data1)=>{

//     fs.readFile("./test2.txt",(err,data2)=>{
//    用模板字符串拼接字符串 
//         let data = `
//          ${data1}  
//          ${data2} 
//         `;
//         console.log(data);
//     })

// })

// 5 用promise实现嵌套调用
 const  p = new Promise(function(resolve,reject){
     fs.readFile("./test.txt",(err,data)=>{
          if(err) throw err;
          resolve(data);
     })
    

 })
p.then(value=>{
    return new Promise((resolve)=>{
        fs.readFile("./test2.txt",(err,data)=>{
            resolve([value,data]);
       })               
    })
    // console.log(value.toString());

}).then(value=>{
   return new Promise(resolve=>{
    fs.readFile("./test.txt",(err,data)=>{
        value.push(data);
        resolve(value);
   })          
   }) 

}).then(value=>{

   console.log(value.join('\n'));    

});



