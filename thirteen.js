Map
filter 


var a = [2,4,6,8,10]
a.map((data) => { console.log(data*2)})
[4,8,12,16,20]

var a = [2,4,6,8,10]
a.map((data) => { return data> 5})
[false, false, true, true, true]

var a = [2,4,6,8,10]
a.filter((data) => { return data> 5})
[6,8,10]

var a = [0,1,2,3,4]
a.map((data) => { return data*2})
[0,2,4,6,8]
a.filter((data) => { return data*2})
[1,2,3,4]

var => We can declare and reassign;
let => we cannot redeclare but can reassign;
const => we cannot redeclare nor reassign

var a = 10
var a;
a = 10
var a = 11
undefined
a
11
a=12
12
a
12

let a = 10
let a = 20
a=20