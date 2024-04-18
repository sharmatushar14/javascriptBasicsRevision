//getters and setters are used to provide controlled access to class member variables. They encapsulate the internal state of an object and provide a way to interact with that state.
class User {
    constructor(email, password){
        this.email=email;
        this.password=password;      
    }
    get email(){
        //get fn name should be same as the variables to set and get
        return this._email.toUpperCase();
        //return this.email.toUpperCase(), cause it will confuse the compiler and both variables with same name will initiate a race condition, stackoverflow will take place in short
        //Too many stack calls error will be there
    }
    set email(value){
        this._email=value;
    }
    get password(){
        return `${this._password}Tushar`
    }
    set password(value){
        this._password=value
    }
}

const user1 = new User('tushar@ai', 'abc')
console.log(user1.password);
console.log(user1.email);
//Output:
//abcTushar
//TUSHAR@AI