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