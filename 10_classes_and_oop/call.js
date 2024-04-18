function SetUsername(username){
    //Complex DB calls, lets say
    this.username=username;
}

function createUser(username, email, password){
    SetUsername.call(this, username)
    //bind helps to hold the reference which is referred to an another function, which if gone from the call stack will then miss the 
    this.email=email
    this.password=password
}

const hey1= new createUser("Tushar", 'tushar@me.com', '123')
console.log(hey1);
//In JavaScript, call() and bind() are both methods used to manipulate the context (the value of this) within a function.


//----Story of call and bind-----
const car = {
    brand: 'Honda',
    model: 'City',
    displayInfo: function(){
        console.log(`This is a ${this.brand} ${this.model}`);
    }
}

const anotherCar = {
    brand: 'Audi',
    model: 'A6'
}
//we have another object representing a different car, and we want to use the displayInfo() function from the car object 
//but with the context of the new object.
car.displayInfo.call(anotherCar);
console.log(anotherCar);
//This is a Audi A6
// { brand: 'Audi', model: 'A6' }


const carTest = {
    brand: 'Toyota',
    model: 'Corolla',
    displayInfo: function() {
        console.log(`This is a ${this.brand} ${this.model}.`);
    }
};

const anotherCarTest = {
    brand: 'Honda',
    model: 'Civic'
};

//We'll create a new function that permanently binds the context of a specific object to the displayInfo() function.
const displayHondaInfo = carTest.displayInfo.bind(anotherCarTest)
displayHondaInfo() //Output: This is a Honda Civic.
