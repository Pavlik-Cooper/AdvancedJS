const fetch = require('node-fetch');
const fs = require('fs');
// console.log(fs)
// function FakePromise(callback) {
//
//     callback((param)=>{
//         console.log("resolve " + param)
//         this._then()
//     },()=>{
//         console.log("Reject")
//     });
//
//     this._then = function (success) {
//         success()
//     }
//
//     this._catch = function (err) {
//
//     }
// }
//
// const fk_prom = new FakePromise((resolve,reject)=>{
//     // console.log(resolve,reject)
//     resolve([15,18,19])
//     reject()
// });


// const getIDS = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve([5415,48545,4848,4848])
//     },2000)
// });
//
// console.log(getIDS,"foo");
//
// getIDS.then(data => {
//    console.log(data)
// });

const GetPrices = (meal_names)=> {
    return new Promise((resolve, reject)=>{
        setTimeout((names)=>{
            let meal_with_price = [];
            for (let name of names){
                meal_with_price.push({name,price: Math.round(Math.random(15,150) * 100)})
            }
            resolve(meal_with_price)
        },1000,meal_names)

    })
};

const id = "1e1b1a70";
const app_key = "edfa29b52d9737bee3c9361c88e73b2b";
let q = "chicken";

fetch(`https://api.edamam.com/search?q=${q}&app_id=${id}&app_key=${app_key}`).
then(data => {
    // console.log(data.json()) //Promise
    return data.json()
}).then(data => {
        // console.log(data.hits)
    names = data.hits.map(meal => meal.recipe.label);
    return GetPrices(names)
}).then((meals)=>{
    fs.writeFileSync("meals.json",JSON.stringify(meals,null,2))
});