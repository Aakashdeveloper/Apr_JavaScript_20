class geo{
    constructor(lat,long){
        this.lat = lat;
        this.long = long
    }
}


class language extends geo{
    constructor(name,country,lat,long){
        super(lat,long)
        this.name = name;
        this.country=country;
    }
}

var English = new language1('English','UK',87.98,97.71)
//////////////
function human(name){
    this.name=name;
    this.city= "London"
}

function robot(name){
    this.name=name;
    this.legs = 2;
    this.color="White"
}


var pepper = new robot('pepper')

human.prototype = new robot()
var john = new human('john')john
human {name: "john", city: "London"}
john.legs
2
john.color
"White"