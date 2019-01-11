function Person1(name,age) {
    let person = Object.create(Person1.prototype)
    person.name = name
    person.age = age
    return person
}
var person = Person1("linus",18);
// console.log(person)

function Person(last_name,first_name,age) {
    this.friends = []
    this.last_name = last_name
    this.first_name = first_name
    this.age = age
}

Person.prototype.greet = function () {
        console.log(`Hi, my name is ${this.first_name} ${this.last_name}`)
}

Person.prototype.befriend = function (friend) {
    this.friends.push(friend)
};


var paul = new Person('rep','paul',19);
paul.befriend("jane");
console.log(paul);
paul.greet();

function Athlete(last_name,first_name,age,medals=[]) {
    Person.call(this,last_name,first_name,age); // super(last_name,first_name,age)
    this.medals = medals
}

// in order to inherit all methods defined on Person's prototype
Athlete.prototype = Object.create(Person.prototype);
// change prototype back to Athlete
Athlete.prototype.constructor = Athlete

var athlete = new Athlete('doe','john',20);
athlete.befriend('anne')
console.log(athlete)
athlete.greet();

