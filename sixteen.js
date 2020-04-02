//clouser => restrict the scope 

var a = 10

function add(){
    let b = 20;
    console.log("b inside>>>>", b)
    return a+b
}

add();

console.log("a>>>>",a)
if(a){
    let c= "hii"
    console.log("b inside>>>>", a)
    console.log("ccc inside>>>",c)
}
//console.log("b>>>>", b)
console.log("ccc outside>>>",c)

function mul(a,b,c){
    return a*b*c
}
mul(5,5,5)




function mul(a){
    return function(b){
        return function(c){
            return a*b*c
        }
    }
}

mul(5)(5)(5)