class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username,email, password){
        super(username)
        this.email=email;
        this.password=password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const test1 = new Teacher('tushar14', 'sharmatushar@gmail.com', '123')

console.log(test1);
//Teacher {
//     username: 'tushar14',
//     email: 'sharmatushar@gmail.com',
//     password: '123'
//   }
console.log(typeof test1); //An object will be created with the following values

test1.addCourse() //A new course was added by tushar14
test1.logMe() //Username is tushar14
console.log(test1 instanceof User); //True