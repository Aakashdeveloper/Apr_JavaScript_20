for   => Simple form  to iterate 
while => its first check condition and apply logic
do while => it must run once and than condition
for of => new type for loop
for in => use for object
Map
filter


for(i=0;i<10;i++){
    console.log(i)
}
0
1
2
3
4
5
6
7
8
9

var city = ["Tapia", "Paris", "Mumbai", "Hongkong", "Helsinki", "Delhi", "DanHuag", "Amsterdam"]

for(i=0;i<city.length;i++){
    console.log(city[i])
}

/*************While Loop*****/
var i =0;
while(i<10){
    console.log(i)
    i++
}

/*************Do While Loop*****/
var i = 0;
do{
    console.log(i)
    i++
}
while(i<10)

var city = ["Tapia", "Paris", "Mumbai", "Hongkong", "Helsinki", "Delhi", "DanHuag", "Amsterdam"]

var i =0;
while(i<city.length){
    console.log(city[i])
    i++
}

var city = ["Tapia", "Paris", "Mumbai", "Hongkong", "Helsinki", "Delhi", "DanHuag", "Amsterdam"]
var i = 0;
do{
    console.log(city[i])
    i++
}
while(i<city.length)

var city = ["Tapia", "Paris", "Mumbai", "Hongkong", "Helsinki", "Delhi", "DanHuag", "Amsterdam"]
for(cities of city){
    console.log(cities)
}