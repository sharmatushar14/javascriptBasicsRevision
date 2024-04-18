class User {
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
        //Not giving access to the outside any instance of this User object
    }
}

const tushar = new User('Tushar')
// console.log(tushar.createId()); //Error: Cant access, it says createId is not a function

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email=email

    }
}

const test3= new Teacher('tushar14', 'sharmatusharofficial14@g.com')
console.log(test3); 
test3.logMe(); //Username: tushar14
console.log(Teacher==User);//False