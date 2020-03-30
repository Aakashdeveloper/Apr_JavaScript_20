Date()
"Mon Mar 30 2020 17:35:11 GMT+0100 (British Summer Time)"
var myval = new Date()
undefined
var myval = new Date().getDate()
undefined
myval
30
var myval = new Date().getDay()
undefined
myval
1
var myval = new Date().getMinutes()
undefined
myval
37


switch(new Date().getDay()){
    case 1:
        console.log('Today is Monday')
        break;
    case 2:
        console.log('Today is Tuesday')
        break;
    default:
        console.log('Not valid Day')

}


var name = "aakash";
switch(name){
    case 'aakash':
        console.log('You are normal user')
        break;
    case 'John':
        console.log('You are admin');
        break;
    default:
        console.log('I Dont know you')
}