const promiseOne = new Promise((resolve, reject)=>{
    //Do an async task
    //DB Calls, Cryptography, Network
    setTimeout(()=>{
        console.log('Async task is completed')
        resolve() //Have to call this function to get the values
    }, 2000)
})

promiseOne.then(function(){
    console.log('Promised Consumed')
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async Task 2');
        resolve()
    }, 1000)
}).then(()=>{
    console.log('Async 2 resolved');
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve({username: "Tushar", role: 'SDE'})
    }, 1000)
})
promiseThree.then((user)=>{
    console.log(user);
})


const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error= true;
        if(!error){
            resolve({username: "Sharma", role: 'Project Manager'})
        }else {
            reject('Error: Something Went Wrong')
        }
    }, 1000)
})
promiseFour.then((user)=>{     //Cannot do like const username = promiseFour.then(()=>{})
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((err)=>{
    console.log(err);
}).finally(()=>
    console.log('The promised is either resolved or rejected')
) 
//Writing Practice--> If single line operation then we can do arrow function without {} 
//But make sure not to use ; in the end of that single line operation

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error= true;
        if(!error){
            resolve({username: "Elon Musk", role: 'CEO'})
        }else {
            reject('Error: JS Went Wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive //Cant do like PromiseFive() as it is a object
        console.log(response);  
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()



async function getAllUsers(){
    try{
        const response = await fetch('https://api.github.com/users/sharmatushar14')
        const data= await response.json() //Here also await is necessary as the data will be parsed from string to the JSON
        console.log(data);
    } catch {
        console.log('E:', error);
    }
}

getAllUsers();

fetch('https://api.github.com/users/sharmatushar14')
.then((response)=>{
    return response.json();
})
.then((data)=>
   console.log(data)
)
.catch((error)=>
    console.log(error)
)