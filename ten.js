var a = ['a','b','c','d'];
var b = [10,3,5,5,57,68,3];
var c = [ true,false,false,true,true]

var d = [1,2,4,"dv",3,"dvs",true,true,3,"jgj"]

var city = ["London","Delhi","Newyork","Amsterdam"]
var city = ["London","Delhi","Newyork","Amsterdam"]
undefined
city.length
4
city[0]
"London"
city[1]
"Delhi"
city[2]
"Newyork"
city[3]
"Amsterdam"
city[city.length-1]
"Amsterdam"

var city = ["London","Delhi","Newyork","Amsterdam"]
undefined
typeof(city)
"object"


Push => Push always add at the end of array
Pop => Always remove last value from array
shift  => Always remove value from beginning
unshift =>unshift Always add at the beginning of a array


var city = ["London","Delhi","Newyork","Amsterdam"]
undefined
city.push('Helsinki')
5
city
(5) ["London", "Delhi", "Newyork", "Amsterdam", "Helsinki"]
city.push('Mumbai')
6
city
(6) ["London", "Delhi", "Newyork", "Amsterdam", "Helsinki", "Mumbai"]
city.pop()
"Mumbai"
city.pop(1)

var city = ["London","Delhi","Newyork","Amsterdam"]
undefined
city.push('Helsinki')
5
city
(5) ["London", "Delhi", "Newyork", "Amsterdam", "Helsinki"]
city.push('Mumbai')
6
city
(6) ["London", "Delhi", "Newyork", "Amsterdam", "Helsinki", "Mumbai"]
city.pop()
"Mumbai"
city.pop(1)
"Helsinki"
var city = ["London", "Delhi", "Newyork", "Amsterdam", "Helsinki", "Mumbai"]
undefined
city.pop()
"Mumbai"
city
(5) ["London", "Delhi", "Newyork", "Amsterdam", "Helsinki"]
city.pop(1)
"Helsinki"
city
(4) ["London", "Delhi", "Newyork", "Amsterdam"]
city.pop(100)
"Amsterdam"


var city = ["London", "Delhi", "Newyork", "Amsterdam", "Helsinki", "Mumbai"]
undefined
city.shift()
"London"
city
(5) ["Delhi", "Newyork", "Amsterdam", "Helsinki", "Mumbai"]

city.unshift('Tapia')
6
city
(6) ["Tapia", "Delhi", "Newyork", "Amsterdam", "Helsinki", "Mumbai"]

/*
You need to provide 5 chance to the user 
and save every result
once 5 chance done now
evaluate if number of loose > win than you loose else you win 
*/

Slice 
Splice

var city= ["Tapia", "Delhi", "Newyork", "Amsterdam", "Helsinki", "Mumbai"]


var city= ["Tapia", "Delhi", "Newyork", "Amsterdam", "Helsinki", "Mumbai"]
undefined
city.slice(3,5)
(2) ["Amsterdam", "Helsinki"]
city
(6) ["Tapia", "Delhi", "Newyork", "Amsterdam", "Helsinki", "Mumbai"]
city.splice(2,0,'Paris','Nice')
[]
city
(8) ["Tapia", "Delhi", "Paris", "Nice", "Newyork", "Amsterdam", "Helsinki", "Mumbai"]
city.splice(3,1)
["Nice"]
city
(7) ["Tapia", "Delhi", "Paris", "Newyork", "Amsterdam", "Helsinki", "Mumbai"]
city.splice(3,1,'Hongkong','DanHuag')
["Newyork"]
city
(8) ["Tapia", "Delhi", "Paris", "Hongkong", "DanHuag", "Amsterdam", "Helsinki", "Mumbai"]
var city = ["Tapia", "Delhi", "Paris", "Hongkong", "DanHuag", "Amsterdam", "Helsinki", "Mumbai"]
undefined
city.indexOf('Pisa')
-1
city.indexOf('London')
-1
city.indexOf('Delhi')
1
city.indexOf('Helsinki')
6
var first = ['a','b','c']
undefined
var seecond =[1,2,3]
undefined
first+seecond
"a,b,c1,2,3"
first.concat(seecond)
(6) ["a", "b", "c", 1, 2, 3]
var third=['Red','Yellow','Green']
undefined
first.concat(seecond,third)
(9) ["a", "b", "c", 1, 2, 3, "Red", "Yellow", "Green"]

var test = [['a','b','c'], 1,2,3,['hi','hey',['test1','test2']],true,[1]]
test[4][2][0]

var city = ["Tapia", "Delhi", "Paris", "Hongkong", "DanHuag", "Amsterdam", "Helsinki", "Mumbai"]

undefined
city.sort()
(8) ["Amsterdam", "DanHuag", "Delhi", "Helsinki", "Hongkong", "Mumbai", "Paris", "Tapia"]
city.reverse()
(8) ["Tapia", "Paris", "Mumbai", "Hongkong", "Helsinki", "Delhi", "DanHuag", "Amsterdam"]


city.includes('Delhi')
true
city.includes('London')
false

//Check any value from array satisfy condition or not

function checkval(val,index,array){
    return val>2
}

console.log([2,5,6,7,9].some(checkval))
function checkval(val,index,array){
    return val>8
}

console.log([2,5,6,7,9].some(checkval))
VM1194:5 true
undefined
function checkval(val,index,array){
    return val>10
}

console.log([2,5,6,7,9].some(checkval))
VM1200:5 false