// promise is an object
// 3 states = pending || fullfilled || rejected


// 1st promise
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, Cryptography, Networking
    setTimeout(function(){
        console.log('Async task 1 is completed');
        resolve();
    }, 1000);
});

promiseOne.then(function(){
    console.log('Promise 1 resolved');
});

// 2nd promise
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2 is completed');
        resolve();
    }, 1000);
}).then(function(){
    console.log('Promise 2 resolved');
});

// 3rd promise
new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName: "Amit", email: "dhyani66@gmail.com", password: "asdfghjkl"});
    }, 1000);
}).then(function(user){
    console.log(user);
});

