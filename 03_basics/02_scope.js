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

// Mini Hoisting Revision
addOne(2) //This will be able to give the output
function addOne(num){
    return num+1
}

//This will not give the output
addTwo(2) // Cannot access 'addTwo' before initialization as we assigned the function to the variable
const addTwo = function(num){
    return num+2
}
