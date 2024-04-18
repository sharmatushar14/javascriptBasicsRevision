//ES6
class User {
    constructor(username, email, password){
        this.username=username
        this.email= email
        this.password=password
    }
    encryptPassword(){
        return `x@tc${this.password}`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const test1= new User('Tushar', 'sharmatusar@gmail.com', '123')
console.log(test1);
console.log(test1.encryptPassword());
console.log(test1.changeUsername());

//Behind the Scene--> If we apt to do it with function prototype
function User2(username, email, password){
    this.username=username;
    this.email=email;
    this.password=password;
}

User2.prototype.encryptPassword= function(){
    return `${this.password}xyc`
}

User2.prototype.changeUsername= function(){
    return `${this.username.toUpperCase()}`
}

const practice= new User2('Tushar Sharma', 'hey@gmail.com', '124')
console.log(practice.changeUsername());
//KeyNote: Function can also act as an object and hence we can do operations like use prototype on the fnction
console.log(practice);