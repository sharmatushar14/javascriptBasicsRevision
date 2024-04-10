//Singleton is made into Object.create, its called as constructor method

const mySym = Symbol('key1')
//Object Literals
const JsUser= {
    name: 'Tushar',
    [mySym]: 'key1',                //Cannot write symbol here as mySym, it has to be [mySym] to be remained as Symbol only
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    email: 'sharmatusharofficial14@gmail.com',
    "Full name": "Tushar Sharma"
}

console.log(JsUser.email);
console.log(JsUser["email"]); //it has to be given in string, just because key value is considered as string in JS
console.log(JsUser['Full name'])
//We cant access Full name using dot notation at any cost
console.log(JsUser[mySym])
//Symbol has to be called in square notation
//It has to be of datatype Symbol only, when not written in square notation in Object declaration, then it will be of type string


JsUser.email= "bittu@gmail.com"
JsUser.greetings = function(){
    console.log("Hello User")
}

console.log(JsUser.greetings())
// console.log(JsUser.greetings) --> Output: [Function (anonymous)]--> Funciton is not executed, just reference aya hai
