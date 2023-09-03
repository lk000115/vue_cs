import _ from 'lodash'

var arr = [
    {type:"a",list:[1,2,3]},
    {type:"b",list:[1,2,4]}, 
    {type:"c",list:[1,2,6]},   
]

var arr2 = arr.map(item=>item.type)

console.log(arr2);
