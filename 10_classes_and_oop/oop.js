const User = {
    username: 'Tushar Sharma',
    isLogggedIn: true,
    loginCount: 8,

    getUserDetails: function(){
        // console.log(username); //Error will come as node environment is unaware of the current execution context
        console.log(this.username);
    }
}
// console.log(User.username);
console.log(User.getUserDetails());

// const User = {
//     username: 'Tushar Sharma',
//     isLogggedIn: true,
//     loginCount: 8,

//     getUserDetails: () => {
//         console.log(this.username);
//     }
// };

//Ouput was undefined
//Reason: when getUserDetails is defined using an arrow function, it inherits the this value from its surrounding scope, which is likely the global scope or some other enclosing scope where this might not be referring to the User object.

// To fix this, you can either use a regular function declaration or use bind to explicitly set the this value:
//console.log(User.getUserDetails.bind(User)());


function UserTest(username, loginCount, isLogggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLogggedIn=isLogggedIn
    this.greetings =  function(){
        console.log(`Welcome ${this.username1}`);
    }
    return this; // return the current this context explicity, btw it will be impilicity returned by default only 
    //But we should be more verbos in our programming language
}

const user1= new UserTest('Tushar',12, true);
//Without using the new keyboard, the new instance(empty)-->{} will not be created for the current object
//and when we will do user = User(diff values), then the prev values will be overwritten
 const user2= new UserTest('Bittu', 14, false);
 console.log(user1);

//In JavaScript, function and object names can start with a lowercase letter. 
//JavaScript is case-sensitive, so you can name your functions and objects using any combination of uppercase and lowercase letters, digits, or underscores. 
//However, it's a convention in JavaScript to start constructor functions (functions that are intended to be used with the new keyword) with an uppercase letter, and regular functions and objects with a lowercase letter. 
//This convention helps distinguish between constructor functions and regular functions/objects at a glance.

console.log(user1.constructor);  //Output: [Function: UserTest]
