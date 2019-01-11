let [_username, _age] = ["paul",18];

// let {username,age} = {"username":"jane","age":18};
// console.log(username,age);
let {username: name, age: user_age} = {"username":"jane","age":18};

// console.log(name,user_age);


// spread

const addFour = (a,b,c,d)=> {
     console.log(a + b + c + d)
};
const ages = [18,18,19,20];

addFour(...ages); // instead of  //  addFour.apply(null,ages);

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4

// rest

function isFullAge(limit) {
    // console.log(limit)
    // console.log(args)
   var args = Array.prototype.slice.call(arguments,1);
    args.forEach(el => console.log(el >= limit))
}
// isFullAge(18,18,28);

function isFullAge6(limit,...years) {
    console.log(limit);
    console.log(years);
    // console.log(arguments)
    // years.forEach(el => console.log(el >= limit));
}
// isFullAge6(18,17,28)

const isFullAge7 = (limit,...years)=> {
    console.log(limit);
    console.log(years);
    years.forEach(el => console.log(el >= limit));
}
isFullAge7(18,17,28);


// default parameters

function smithPerson(fst_name,last_name,age="unknown") {
    this.fst_name = fst_name;
    this.last_name = last_name;
    this.age = age;
}

var john = new smithPerson("john","smith",age=18);
console.log(john);

