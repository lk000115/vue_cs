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
        headers:{},
        success: function(){ },
        error: function(){}
    }
    let {url,method,async,data,headers,success,error} = {
        ...defaultoptions ,
        ...options
    }
    
    if(typeof data ==='object' && headers["content-type"]?.indexOf("JSON") > -1 ){
         data = JSON.queryStringify(data) 
    }else{
        data = queryStringify(data);
    }
  
    if(/^get$/i.test(method) && data) url += '?' +data

    //  
    const xhr = new XMLHttpRequest();
    xhr.open(method,url,async);
    xhr.onload = funtion(){
        if(!/^2\d{2}$/.test(xhr.status)){
           error(`错误状态码:${xhr.status}`)
           return
        } 
        try{
           let result = JSON.parse(xhr.responseText);
           success(result); 
        }catch(err){
           error('解析失败') 

        }      

    }
//  设置请求头内的信息
    for(let k in headers) xhr.setRequestHeader(K,headers[k])
     if(/^get$/i.test(method)){

        xhr.send();
     }else{

        xhr.send(data);
     }
    

}