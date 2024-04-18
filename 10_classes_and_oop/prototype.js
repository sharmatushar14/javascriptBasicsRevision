let myOwnFunction = "TusharSharma   "

String.prototype.trueLength =  function(){
    //Injecting a new method in the String Prototype Set
    console.log(`${this}`) ///Jo current context hai yeh this uska hojayega
    console.log(`True Length is ${this.trim().length}`);
}

myOwnFunction.trueLength()
'Tushar   '.trueLength()

let myHeros = ['thor', 'spiderman']

let heroPower = {
    type: 'Hammer',
    spiderman: 'Sling',
    getSpiderPower: function(){
        console.log(`Spidy Power is ${this.spiderman}`);
    }
}

Object.prototype.tushar =  function(){
    console.log(`Now this tushar method is added in the prototype of object`);
    //This can be also accessed by functions, string & arrays because Object is their prototype head and Object's head is null//not discovered yet
}

Array.prototype.arrayTest = function(){
    console.log(`Added in array prototype`);
}

heroPower.tushar();
myHeros.tushar();
// heroPower.arrayTest(); //This is giving error
myHeros.arrayTest();

//Inheritance

const User = {
    name: 'Tushar',
    email: 'test@'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

console.log(TASupport.isAvailable); //O: False, hence we can access the props of the Teaching Support too 

Teacher.__proto__ = User
//Means Teacher as taken all properties of the User
console.log(Teacher.name); //Tushar

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

console.log(TeachingSupport.makeVideo); //true
