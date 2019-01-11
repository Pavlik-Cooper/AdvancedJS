// implicit binding

var Person = function (name,age) {
    return {
        name: name,
        age: age,
        sayName: function () {
            console.log(this.name)
        },
        mother: {
            name: "Jane",
            sayName: function () {
                console.log(this.name)
            },
        }
    }
};

// var Person = function (name,age) {
//         this.name = name,
//         this.age = age,
//         this.sayName = function () {
//             console.log(this.name)
//         },
//         this.mother = {
//             name: "Jane",
//             sayName: function () {
//                 console.log(this.name)
//             },
//         }
// };
var paul = new Person("paul",18);

// paul.sayName();
// paul.mother.sayName();

// Explicit binding

var sayName = function (lan1,lang2) {
    console.log("My name is " + this.name + " and i learn "+ lan1 + " and " + lang2)
};

var me = {
    name: "Paul",
    age: 15
};

// sayName.apply(me,["JS","Python"])
// sayName.call(me,"JS","Python")

var newFn = sayName.bind(me,"JS","Python");

newFn();


var sayNameMixin = function (obj) {
    obj.sayName = function () {
        console.log(this.name)
    }
};

sayNameMixin(me);
me.sayName();