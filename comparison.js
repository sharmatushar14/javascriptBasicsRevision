console.log(null > 0) //False
console.log(null==0) //False
console.log(null <= 0) //True
//The reason is that an equality check == and comparisons >, <, >=, <= works differently
//Comparisons convert null to a number, treating it as 0
//Strict check ===
//It also checks the data type for the comparison, hence called strict check
console.log("2"===2)
console.log("2" >= 1)
//Comparison converted the string to a number and hence true result