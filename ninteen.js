//literal notation
var country = {
    name:'India',
    capital:'Delhi',
    population: 1.33000
}

undefined
country
{name: "India", capital: "Delhi", population: 1.33}
typeof(country)
"object"
country.capital
"Delhi"
country.population
1.33
country.name
"India"
country['name']
"India"
country.language="Hindi"
"Hindi"
country
{name: "India", capital: "Delhi", population: 1.33, language: "Hindi"}
country.capital="Mumbai"
"Mumbai"
country
{name: "India", capital: "Mumbai", population: 1.33, language: "Hindi"}
delete country.population
true
country
{name: "India", capital: "Mumbai", language: "Hindi"}


//Constructor

var car = new Object();
car.color="red";
car.brand="BMW"

var car = new Object();
car.color="red";
car.brand="BMW"
"BMW"
car
{color: "red", brand: "BMW"}


var sayHi = {
    firstname: 'John',
    lastName:'Sana',
    greet:function(){
        return "Say Hi To Object"
    }
}

sayHi.greet()
"Say Hi To Object"

var calc = {
    sum:(a,b) => { return a+b},
    sub:(a,b)=>{return a-b}
}

calc.sum

function calc(){
    this.sum=(a,b) => { return a+b}
    this.sub= (a,b) =>{return a-b}
}


var mymath = new calc();
mymath.sum(10,2)
mymath.sub(1,2)