//Arrays are created using shallow copy means they share the same reference of the source object from which the copy was made
//Deep copies are made when reference are different
const arr= [1, 2, 3, 4, 5]
// Other way of declaring the array
const newArr = new Array(3, 4, 5, 6, 7)

const testArr= newArr.slice(1,3)
const testArr2= newArr.splice(1,3)
//The splice() method modifies the original array and returns an array containing the deleted elements, including the 2nd index
console.log(testArr);
console.log(testArr2);
console.log(newArr);
const set1= ["Piano", "Guitar", "Bass"]
const set2= ["Guitar1", "Guitar2", "Guitar3"]

// hey1.push(hey2)
// console.log(hey1)
const returnConcat = set1.concat(set2)
console.log(returnConcat);

//Spread Operator
const fullBand= [...set1, ...set2]
console.log(fullBand)

const set3= [1, 2, 3, [4, 5, 6, [1,2,[112]]]] 
const set4= set3.flat(3) //Starting from 0 depth and one hack is pass infinity==> flat(infinity)
console.log(set4);

console.log(Array.isArray(1,2,3))
console.log(Array.of('Tushar'))
console.log(Array.from("Tushar"))
const array1= [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')]
const localString = array1.toLocaleString('en', {
    timeZone: 'UTC'
});
console.log(localString)

const a = ["Wind", "Water", "Fire"];
a.join(); // 'Wind,Water,Fire'
a.join(", "); // 'Wind, Water, Fire'
a.join(" + "); // 'Wind + Water + Fire'
a.join(""); // 'WindWaterFire'