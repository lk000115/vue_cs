// 1 trim 移除字符串首尾空白
let str = "  abcdef  "
console.log(str.trim()) // "abcdef"

// 2 includes  startsWith 确定一个字符串是否包含在另一个字符串中
let str2 = 'Hello world!';
str.startsWith('Hello') // true
str.endsWith('!') // true
str.includes('o') // true

// 3  split()把一个字符串分割成字符串数组。
let str3 = "abcdef";
console.log(str3.split("c")); // ["ab", "def"]
console.log(str3.split(""));  // ["a", "b", "c", "d", "e", "f"]

//4 slice(start, end),,提取字符串的片断,
// 如果是负数，则该参数规定的是从字符串的尾部开始算起的位置。也就是说，-1 指字符串的最后一个字符，-2 指倒数第二个字符，以此类推
let str4 = "abcdefg";
console.log(str4.slice(1,6)); //"bcdef" [1,6)
console.log(str4.slice(1));   //"bcdefg" 
console.log(str4.slice());    //"abcdefg" 
console.log(str4.slice(-2));  //"fg"
console.log(str4.slice(6, 1));  //""


//5 substring() : 从起始索引号提取字符串中指定数目的字符
// 语法： stri.substr(start, length)
let str5 = "abcdef";
console.log(str5.substing(1,6));  //"bcdefg" 6代表切割的length
console.log(str5.substring(1));   //"bcdefg" [1,str.length-1]
console.log(str5.substring());  //"abcdefg" [0,str.length-1]
console.log(str5.substring(-1));  //"g"


//6 replace() ：在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串

let str6 = "abcdef";
console.log(str6.replace("c", "z")) // abzdef

//7 concat() 将指定的字符串参数连接到字符串上

let str7 = "abc";
console.log(str7.concat("efg")); //"abcefg"
console.log(str7.concat("efg","hijk")); //"abcefghijk"

//8 indexOf()：查找某个字符，有则返回第一次匹配到的位置，否则返回-1
let str8 = "abcdefg";
console.log(str8.indexOf("a"));  // 0
console.log(str8.indexOf("z"));  // -1

// 9 filter() 筛选,方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。

var arr = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const newArr = arr.filter(item =>item.length > 6);    //筛选出字符串长度大于6的字符串
console.log(newArr); //["exuberant", "destruction", "present"]

// 10 charCodeAt 将字符转ASCII值
console.log('AZ'.charCodeAt(0))  //66  将第一个字符转换为ASCII值

// 11 fromCharCode 要将ASCII值转换为其对应的字符
console.log(String.fromCharCode(65))// 'A'

// 12 includes() 方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false。
 [1, 2, 3].includes(2);     // true

 //13 map 迭代数组,把每一个数组元素和字符串连接,并生成连接后的新数组
var list = ["aaa","bbb","ccc"]
var newlist = list.map(item =>`<div>${item}</div>`)  // <div>aaa</div>  <div>bbb</div>  <div>ccc</div>  