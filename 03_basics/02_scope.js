//Revision of Scopes
//Avoid using var at any cost, because var once declared, can be reintialized anywhere with a new value and thus distrubing the scoping concept of programming
var test1= 14
const test2= 44
//All variables here defined in the global scope
let test3= 88

if(true){
    var test1=15
    const test2=47
    let test3=69
    console.log('Inner:',test2, test3)
    //Scopes of variables defined in the if loop should be kept till here only in the block scope 
}

console.log(test1)
console.log(test2)
console.log(test3)

