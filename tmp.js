
let list = [1,2,3,4,5,6]
//
// function _filter(arr,callback) {
//     var tmp = []
//     for (let n of arr) {
//         if (callback(n)) {
//             tmp.push(n)
//         }
//     }
//     return tmp
// }
//
// console.log(_filter(list,function (n) {
//     return n % 2 == 0;
// }));

function _map(arr,callback) {
   let tmp = [];
    for (let n of arr){
        tmp.push(callback(n))
    }
    return tmp
}

console.log(_map(list,function (n) {
    return n + 1
}));



let arr = Array.from("mozilla",l => l.toUpperCase())
console.log(arr)

for (let [key,val] of list.entries()){
    console.log(key,val)
}


function someFunc(...args) {
   var c,res = 0;
   while (c = args.shift()){
       res += c;
   }
    return res;
}

console.log(someFunc(1,1,1))