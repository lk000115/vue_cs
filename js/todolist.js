$(function(){
    // 绑定keydown事件,判断是否敲了回车键;
  $('#title').on('keydown',function(e){
       if(e.keyCode === 13){
         //   先把数据读取到本地;
         var local = getData();
        //  再把输入框的内容添加到本地
        local.push({title:$(this).val(),done:false});
        savaData(local);
        load();
        $(this).val("");
       }   
  }) 


// 读取本地存储的数据函数
  function getData(){
     var data = localStorage.getItem('todolist'); 
     if(data !== null){
        return JSON.parse(data) ;      
     } else{
        return [] ;
     } 
  }
// 把数据更新到本地存储
function savaData(data){
   localStorage.setItem('todolist',JSON.stringify(data));

}
// 渲染加载数据
function load() {
      // 读取本地存储的数据
      var data = getData();
      console.log(data);
      // 遍历之前先要清空ol里面的元素内容
      $("ol, ul").empty();
      var todoCount = 0; // 正在进行的个数
      var doneCount = 0; // 已经完成的个数
      // 遍历这个数据
      $.each(data, function(i, n) {
          // console.log(n);
          if (n.done) {
              $("ul").prepend("<li><input type='checkbox' checked='checked' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
              doneCount++;
          } else {
              $("ol").prepend("<li><input type='checkbox' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
              todoCount++;
          }

      });
      $("#todocount").text(todoCount);
      $("#donecount").text(doneCount);

  }


})