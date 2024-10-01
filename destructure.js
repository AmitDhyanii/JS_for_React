// array destructuring 

// let arr = [1,2,3,4,5];
// let [a,b,c] = arr;
// console.log(a,b,c);

// let user = ["Amit", 23, "WebDev"];
// let [name, age, role] = user;
// console.log(name, age, role);



// object destructuring mostly used compared to array

let obj = {x:6, y:8};
let {x, y} = obj;
console.log(x, y);

const user ={
    name:"Amit",
    age: 23,
    role: "WebDev"
}
const {name, age, role} = user;
console.log(name, age, role);