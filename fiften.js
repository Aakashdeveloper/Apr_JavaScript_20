//anonyms funnction IIFE
(function(){
    console.log("Hi To All")
}())


/*function sayHi(){
    return "Hi To All"
}

console.log(sayHi)
*/

//Generator
function looping(userInput){
    for(i=0;i<userInput;i++){
        console.log(i)
    }
}


function* looping(userInput){
    var a = [];
    for(i=0;i<userInput;i++){
        yield i
    }
}
undefined
looping(5)
looping {<suspended>}
var data = looping(5)
undefined
data.next()
{value: 0, done: false}
data.next()
{value: 1, done: false}
data.next()
{value: 2, done: false}
data.next()
{value: 3, done: false}
data.next()
{value: 4, done: false}
data.next()
{value: undefined, done: true}