const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error)
        {
            resolve({userName: "Dabbi", email: "dabbi04@gmail.com", password: "12345678"});
        }
        else
        {
            reject('Oops something went wrong');
        }
    }, 1000);
});
async function consumePromiseFive() {
    try
    {
        const response = await promiseFive;
        console.log(response);
        console.log(`Age: ${response.age}`);
    }
    catch(error)
    {
        console.log(error);
    }
}
consumePromiseFive();


// another async await using API
// async function allUserInfo(){
//     try
//     {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error)
//     {
//         console.log('Error due to', error);
//     }
// };
// allUserInfo();