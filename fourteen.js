var a = 10
var b = 20
console.log(a+b)

//Function
//method
//arrow function
//anonyms function
//generator function

function add(a,b){
    return a+b
}

add(1,2)
3
add('1','1')
'11'

var isEven = function(userInput){
    var output;
    if(userInput%2==0){
        output="Number is even"
    }else{
        output="Number is odd"
    }
    return output
}
isEven(2)
"Number is even"

//EEs6

var isEven = (userInput) => {
    var output;
    if(userInput%2==0){
        output="Number is even"
    }else{
        output="Number is odd"
    }
    return output
}
isEven(2)
"Number is even"

