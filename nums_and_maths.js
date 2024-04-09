const score= 400
console.log(score);

const balance= new Number(100)
console.log(balance);

console.log(balance.toFixed(2));
//Best practice to use 2 decimals for the e-commerce
const hey = balance.toString();
console.log(typeof(hey));
const heyNumber= 12354.72397
console.log(heyNumber.toPrecision(5))
//Use Precision carefully as it can give unintented result
//when numerical value digit count is greater than precision count
const hundreds= 10000000
console.log(hundreds.toLocaleString('en-IN'))

//----------------Maths---------------//
//Math library with many methods and properties
console.log(Math.random());
//gives value between 0 and 1
//Practice Question
//Make a random game from value from 10 to 20
const min= 10
const max= 20

console.log(Math.floor(Math.random()*(max-min+1))+min)


