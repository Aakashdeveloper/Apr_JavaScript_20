var bob = new Object()
bob.age = 10;
bob.city = "NewYork";
bob.setAge= function(newAge){
    this.age = newAge
}

var tony = new Object()
tony.age = 10;
tony.city = "NewYork";
tony.setAge= function(newAge){
    this.age = newAge
}


let createAge = function(newAge){
    this.age = newAge
}

var bob = new Object()
bob.age = 10;
bob.city = "NewYork";
bob.setAge= createAge;

var tony = new Object()
tony.age = 10;
tony.city = "NewYork";
tony.setAge= createAge;


function database(){
    this.find = (table) => { return `Select * from ${table}`}
    this.mark= (table,student) => { return `Select * from ${table} where studentName=${student}`}
}

var employee = new database()
employee.find('Emp')