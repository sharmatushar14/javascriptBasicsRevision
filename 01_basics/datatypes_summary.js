//Javascript is dynamically typed language while TypeScript is statically typed language
//In dynamically typed languages all type checks are performed in runtime, only when the program is executing.
//So this means you can just assign anything you want to the variable and it will work.
//Example:
let a;
a=0;
console.log(a)
a = "Hello World"
console.log(a)
a = {
    key : "value"
}
console.log(a)
//Both statically and dynamically typed languages have their own advantages.

// JavaScript (dynamic typing):

// Faster prototyping, because you don't care about types.
// Easier learning curve, because you need to learn fewer things.
// TypeScript (static typing):

// Richer code completion, because you know all methods for all variables right away.
// Better maintainability, you only need a type definition to understand what something is doing, e.g. API response type definition, function params, and return type, ...
// Easier to catch simple errors like mistypes (users vs usrs).
//Return type of variables in JavaScript
// 1) Primitive Datatypes and their return (Call by value)
// Number => number
// String  => string
// Boolean  => boolean
// null  => object
// undefined  =>  undefined
// Symbol  =>  symbol, to find the uniqueness
// BigInt  =>  bigint

// 2) Non-primitive Datatypes (Call by reference)
// Arrays  =>  object
// Function  =>  function
// Object  =>  object
const userID= Symbol(123)
const userID2= Symbol(123)
console.log(userID===userID2) //False
const bigNumberCheck= 2123213123231231212321412414124124124n
console.log(typeof(bigNumberCheck))
