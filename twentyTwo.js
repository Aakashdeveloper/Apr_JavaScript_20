var person = {
    fullname: function(city,country){
        return this.firstname+"_"+this.lastname+"_"+city+"_"+country
    }
}

var john = {
    firstname:'John',
    lastname:'eva'
}

person.fullname.call(john,['Delhi','India'])

person.fullname.apply(john,['Delhi','India'])
person.fullname.call(john,'Delhi','India')

"John_eva_Delhi_India"
person.fullname.apply(john,['Delhi','India'])
"John_eva_Delhi_India"
person.fullname.call(john,['Delhi','India'])
"John_eva_Delhi,India_undefined"