var str = '10056元'  ;
var pat = /\d+(?=元)/g ;
//  console.log(str.match(pat));
//  console.log(pat.test(str));

var str1 = '138fgfgd';
var pat1 = /(?:138)\w+(gd)/ ;

// str1.match(pat1);

// console.log(RegExp.$1);   //打印分组数据

var str2 = 'ahhhbcdkkkbclll' ;
var pat2 = /bc/g ;

console.log(pat2.exec(str2));

// console.log(str.replace(pat,''));

// console.log('as'.includes('j'));   es6的新函数

var  zz = /^2\d{2}$/ ;     //匹配2开头,后跟两位数字结尾的数
console.log(zz.test(200));