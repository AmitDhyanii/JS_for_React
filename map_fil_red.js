// map function

const arr = [3,5,2,9,6];

function double(x){
    return x * 2;
}
console.log(arr.map(double));


const op = (x) => {
    return x * 3;
}
console.log(arr.map(op));



// filter function

function isGreaterThan5(x){
    return x>5;
}
console.log(arr.filter(isGreaterThan5));


function isEven(x){
    return x % 2 === 0;
}
console.log(arr.filter(isEven));

// finding odd using arrow function
const output = (x) => {
    return x % 2;
}
console.log(arr.filter(output));



// reduce function

// sum of elements in array without reduce
let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
}
console.log(sum);

// sum of elements in array with reduce
const otpt = arr.reduce(function(acc,curr){
    acc = acc + curr;
    return acc;
}, 0);
console.log(otpt);



// map function on array containing objects
const person = [
    {"firstName" : "Amit", "lastName" : "Dhyani", "Age" : 23},
    {"firstName" : "Eren", "lastName" : "Yeager", "Age" : 54},
    {"firstName" : "Sun", "lastName" : "Goku", "Age" : 54},
    {"firstName" : "Ken", "lastName" : "Kaneki", "Age" : 19},
];

function fullName(x){
    return x.firstName + " " + x.lastName;
}
console.log(person.map(fullName));

// map & filter function on array containing objects

const out = person.filter((x) => x.Age<30).map((x) => x.firstName);
console.log(out);

// reduce
const outp = person.reduce(function(acc, curr){
        if(acc[curr.Age]){
            acc[curr.Age] = ++acc[curr.Age];
        }
        else{
            acc[curr.Age] = 1;
        }
        return acc;
    }, {});
    console.log(outp);











