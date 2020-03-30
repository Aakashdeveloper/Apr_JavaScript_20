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