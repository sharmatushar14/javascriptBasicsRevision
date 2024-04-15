//Here unlike C++, if we are accessing something out of bound, then code will not break, we will get a output of undefined
let myArray= ['Tushar', 'Sharma', 'Revising']

for (let i = 0; i <= myArray.length; i++) {
    const element = myArray[i];
    console.log(element)  
}
//Output:
// Tushar
// Sharma   
// Revising 
// undefined


//For of loop
const arr= [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

const mp= new Map()
mp.set('In', 'India');
mp.set('US', 'United States')
mp.set('Fr', 'France')
console.log(mp);

for( const [key, value] of mp){
    console.log(`The city ${key} represents ${value}`)
}

//For of loop doesnt help to iterate us over objects as [key, value]

const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by Apple'
}

//For in loop extracts keys for us whether for object or array but not map as map are not iterable
for (const key in myObject){
    console.log(`${key} represents ${myObject[key]}`)
}
for (const key in mp){
    console.log(`${key} is there`) //No output as map are not iterable
}
