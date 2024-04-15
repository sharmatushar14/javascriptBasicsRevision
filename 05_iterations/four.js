const myNumbers =  [1,2,3,4,5,6,7,8,9,10]

const newNums =  myNumbers.map((num)=>{
    return num>6;
})
//Output
//[
//     false, false, false,
//     false, false, false,
//     true,  true,  true,
//     true
//   ]

const newNumsTest =  myNumbers.filter((num)=>{
    return num>6;
})
//Output: [ 7, 8, 9, 10 ]
//Hence, filter is condition specfic and .map() is used to change the value of all the array values.
//Example of map
const newNums3 =  myNumbers.map((num)=>{
    return num*10;
})

console.log(newNums)
console.log(newNumsTest);



//Chaining--> We apply one operation and the output of that operation is carried forward for another operation
const newNums5= ((myNumbers.map((num)=>num*10)).map((num)=>num+1)).filter((num)=>num>=40)
const newNums6= myNumbers.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)
//Both the LOCs and syntaxes are correct to be produce intended outputs
console.log(newNums5);
console.log(newNums6);