//String Interpolation
//String interpolation is a computer programming technique that evaluates a string literal with placeholders, and then replaces the placeholders with their corresponding values
const stringTest= '     Tushar Sharma'
console.log(`Hey my name is ${stringTest}`) //-->Best Practice

//String Functions
//Can refer the string functions on MDN Documentation OR in Web Browser Developer's Console
console.log(stringTest.slice(-12, -4));
console.log(stringTest.substring(0,13));
console.log(stringTest.length); 
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(-4, -2));
//-4 means the 4th from last
//-2 means the 2nd from last or 2nd last
console.log(stringTest)
console.log(stringTest.trim());
console.log(stringTest.includes('bittu'))
console.log(stringTest.replace('Tushar', 'Bittu'));