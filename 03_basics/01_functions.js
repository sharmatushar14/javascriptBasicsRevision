function loginUserMessage(username){  //username='Default'-->Default value
    if(!username){  //Same as username===undefined, or username==undefined
        console.log('Please provide a value')
        return
    }
    return `${username} User entered successfully`
}

const test=loginUserMessage('Tushar Sharma');
console.log(test)
//When no value is passed in the parameter, then the value is undefined

//Practice
function addTypes(type1, type2){
    return type1+type2;
}
const display = addTypes();
console.log('Result', display);
//If nothing is passed as arguments/values and we have used + operator between the function parameters when defined, so it will give the output as NaN 



//Rest operator--> First arguments can take respective values, the remaining ones will be sent in the rest operator
function calculateCartPrice(num1){
    return num1
}

console.log(calculateCartPrice(10, 20, 30))

function calculateCartPrice2(test1, test2, ...num2){ //Rest operator makes the array as return type
    return {test1, test2, num2}
}
console.log(calculateCartPrice2(10, 20, 30, 40))

const obj1  = {
    username: 'tusharmusic14',
    followers: '1230'
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.followers}`)
}

console.log(handleObject(obj1)); 