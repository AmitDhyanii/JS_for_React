// arrow function and this

// const func = () => {
//     console.log(`arrow function executed`)
// }
// func();

// const camera = {
//     price: 600,
//     weight: 2000,
//     myDes: function(){
//         return `Camera price is ${this.price}`; // this is used for current context
//     }
// }
// console.log(camera.myDes());
// camera.price = 1200;
// console.log(camera.myDes());

// For those who wondering why we can't use arrow function there is because arrow function bind 'this' lexically which means they inherit 'this' keyword from their outer scope. In that example  in the video arrow function inheriting 'this' from 'cameras' object which is  "global window" object so when we access "this. price" we are accessing " "window.price" so because there is no property called price in global scope (on window object) we are getting "undefined". I hope this will help)

const user = {
    username: "Amit Dhyani",
    age: 23,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
user.welcomeMessage();
user.username = "Dabbi";
user.welcomeMessage();
console.log(this);