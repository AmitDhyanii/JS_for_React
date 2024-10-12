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


// 4th promise
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error)
        {
            resolve({userName: "Amit", email: "dhyani66@gmail.com", password: "asdfghjkl"});
        }
        else
        {
            reject('Oops Something Went Wrong');
        }
    }, 1000);
});
promiseFour.then(function(user){
    return user.userName;
}).then(function(userName){
    console.log(userName);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("The Promise is either resolved or rejected");
});



// Above example using API with .then 
fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => response.json() )
.then( (data) => console.log(data))
.catch( (error) => console.log(error));

