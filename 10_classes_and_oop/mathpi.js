const descripter = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(descripter);

console.log(Math.PI); //3.14.....
Math.PI= 5;
console.log(Math.Pi); //As writeable is false & hardcoded
//Cannot define properties of this Math object at any cost
console.log(typeof Math); //Object

const testUser = {
    name: 'Test',
    price: '299',
    isavailable: true,
    orderTestFunction: function(){
        console.log("Study Hard");
    }
}
//getOwnPropertyDescriptor:--> It takes (Object, Property)
console.log(Object.getOwnPropertyDescriptor(testUser, 'name'));
Object.defineProperty(testUser, 'name', {
    writable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(testUser, 'name'));

for(let [key, value] of Object.entries(testUser)){
    if(typeof value!=='function'){
        console.log(`${key}: ${value}`);
    }
}

for (let key in testUser) {
    if (testUser.hasOwnProperty(key) && typeof testUser[key] !== 'function') {
        console.log(`${key}: ${testUser[key]}`);
    }
}

//The for...in loop is meant to iterate over the keys of an object, but it does not return key-value pairs like Object.entries() does. 
//Therefore, when you try to destructure [key, value] in the loop declaration, it doesn't work as expected because the iterator returns only keys, not arrays of key-value pairs.
//To iterate over the key-value pairs of an object using a for...in loop, you can directly access the values using the keys