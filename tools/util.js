function queryStringify(obj){
    let str = '';
    for(let k in obj) str += `${k}=${obj[k]}&`
    return str.slice(0,-1)
}

// 封装ajax
function ajax(options){
    let defaultoptions = {
        url:"",
        method:"GET",
        async:true ,   
        data:{},
        headers:{"content-type":"application/json"},
        success: function(){ },
        error: function(){}
    }
    let {url,method,async,data,headers,success,error} = {
        ...defaultoptions ,
        ...options
    }
    
    if(typeof data =='object' && headers["content-type"]?.indexOf("json") > -1 ){
        //  console.log(data);
       let data_tmp =  queryStringify(data)
       if(/^get$/i.test(method) && data) {url += '?' + data_tmp}  ;
       data = JSON.stringify(data) 
    }else{
        data = queryStringify(data);
    }

  

    const xhr = new XMLHttpRequest();
    xhr.open(method,url) ;
    xhr.onload = function (){
        if(!/^2\d{2}$/.test(xhr.status)){
            error(` 错误状态码:${xhr.status} `)
            return 
         } 
         try{
            let result = JSON.parse(xhr.responseText);
            success(result); 
         }catch(err){
            error('解析失败') ;
         }   

    }

   

//  设置请求头内的信息
    for( var k in headers) xhr.setRequestHeader(k,headers[k])
     if(/^get$/i.test(method)){

        xhr.send();
     }else{
        xhr.send(data);
     }
    
}

// 用Promise封装ajax
function pajax(options){
       
    var p = new Promise((resolve,reject)=>{
       ajax({
          ...options,     //把传入的对象展开,下面定义的同名函数覆盖此对象的同名函数
          success:(res)=>{
            resolve(res);  
          },
          error:(err)=>{
            reject(err);
          }

       })            
    }) 
    return  p
}

//   获取cookie值函数

function getCookie(key){
   var str = document.cookie
   var arr = str.split("; ")
//    console.log(arr);
   var obj = {}
   for(var i=0; i<arr.length;i++){
       var subArr = arr[i].split("=")
       obj[subArr[0]] = subArr[1] 
   } 
     return  obj[key]

}


export{ajax,pajax} ;