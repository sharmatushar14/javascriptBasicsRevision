//Date is an object in JS
//Have to create instance of the object
// The Date object provides methods for working with dates and times, such as getting the current date and time, setting specific date and time values, and performing various calculations and manipulations on dates and times.

// While Date is not a class in the strict sense like in object-oriented languages such as Java or C++, it behaves similarly to a class in terms of creating instances (objects) and providing methods and properties for working with those instances.


const myDate= new Date()
console.log(myDate.toDateString());
console.log(myDate.getSeconds())
let mycreatedDate= new Date('10-14-2001')
console.log(Date.now()) //Gives output in milliseconds from the starting of Jan 1 1970
//Practice to calculate the difference between current Year and Asked Year, Finding DOB for fun
let compareYear= Math.floor((((((mycreatedDate.getTime())/1000)/60)/60)/24)/365.25);
//Taking 365.25 approx where accounting for leap years
let nowYear= Math.floor((((((Date.now())/1000)/60)/60)/24)/365.25);

console.log(nowYear-compareYear)
