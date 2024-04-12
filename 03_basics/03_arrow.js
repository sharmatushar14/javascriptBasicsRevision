const user= {
    username: 'Sharma',
    price: 999,

    welcomeMessage: function() {
        console.log(`Hellow!, ${this.username}`)
        console.log(this)
    }
}  

user.welcomeMessage()
user.username='Tushar'
user.welcomeMessage()
console.log(this) //Output: Empty Object
// When we will do output this in the brower console, then it will give provide Windows Object

function test(){
    let username= 'Tushar@'
    console.log(this.username) //Output: undefined, hence we cant user this with the function like this
}
test();

//Arrow function revision
const arrow1= ()=> {
    let test1= 'test'
    console.log(this.test1); //Output: undefined only, as this only provides the context of current object
}
arrow1()

//Explicit arrow function
const arrow3 = (num1, num2) => {
    return num1+num2
}

//Implicit arrow function
const arrow4 = (num1, num2) => (num1+num2) //No need to use return function here
const arrow5 = () => ({username: 'Tushar'}) 
//When returning object, we need to wrap around the (), not needed as such when returning the numbers
console.log(arrow5());


