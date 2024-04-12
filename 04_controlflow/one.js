let score= 40;
if(score > 30){
    let passed='Cool'
    console.log(`Student is ${passed}`)
}
//Implicit Scope
if(score > 33) console.log(`Need to work hard`)

//Switch Case for Redux Management-->React JS
//Falsy Values-->Which are considered to be false
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy values
//"0", 'false', " ", [], function(){}
//If there is any string also with a space, its also referred to as truthy value


//Array empty Checking
const test1= []
if(test1.length===0){
    console.log('Array is empty');
}

//Empty Object Checking
const emptyObj= {}
if(Object.keys(emptyObj).length===0){
    console.log('Object is Empty');
}

//Just for fun
console.log(false==0); //True
console.log(false==""); //True  
console.log(0==""); //True
console.log(false==null) //False
console.log(false==undefined); //False
console.log(0==null);
console.log(0==undefined);

//Nullish Coalescing Operator (??): null undefined
//If we are getting null//undefined value from database/user respone, so that the safety is applied on the code
// null ?? function ---> funciton will be executed
// null ?? 0 ---> Output 0
let val1;
val1= 5 ?? 10
val1= null ?? 20
val1= null ?? 10 ?? 20
console.log(val1);
