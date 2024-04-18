function multiplyBy5(num){
    return num*5
}

multiplyBy5.power=2;
//. notation can be used here also which is for object, as function is also a object

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score){
    this.username=username
    this.score=score
}

createUser.prototype.increment =  function(){
    this.score++
    //Jis score ki baat hori hai uska this hai yeh-->Layman Terms-->current context
}
//Adding a new function in the prev createUser function using prototype property
createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
}

const test1 = new createUser('Tushar', 25)
//This new keyword will create a new instance of the object createUser
//and will get to now that 2 new fns increment and printMe are also made after the declaration of that particular function

const test2 = new createUser('Tea', 250)
console.log(createUser);
console.log(test1);
console.log(test2);
test1.increment();
test1.printMe();
test2.increment();
test2.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/