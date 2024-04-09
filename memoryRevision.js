//Primitive datatypes--> Stack
//Copy is made everytime, we refer the primitive data types
//Example
let myEmail= "tushar14@gmail.com"
let myEmail2=myEmail
myEmail= "sharma@gmail.com"
console.log(myEmail)
console.log(myEmail2)
//Copy is made everytime we define or initiate the variable


//Heap--> Non Primitive Data types
//Here reference is made to the same object/array/function in the memory
let userOne = {
    name: 'Tushar',
    email: 'hey@gmail.com'
}
let userOne2= userOne
userOne2.name= 'Tushar changed'
console.log(userOne)
console.log(userOne2)
//Here we are changing one, then both will be changed as both are referring to the same object in the heap
