//const tinderUser = new Object() --> Singleton object
const tinderUser = {}
//Non Singleton Object
tinderUser.id= '123abc'
tinderUser.name= 'Sammy'
tinderUser.isLoggedIn=false

const regularUser = {
    email: 'sharmatusharofficial14@gmail.com',
    fullname: {
        userFullName: {
            firstName: 'Tushar',
            lastName: 'Sharma'
        }
    }
}

console.log(regularUser.fullname.userFullName.firstName)
//? if the value exists, then do this, used mainly for API integration

const obj1 = {1: 'a', 2: 'b'}
const obj2= {3: 'c', 4:'d'}
const obj3= {5: 'e', 6:'f'}

const obj4= Object.assign({}, obj1, obj2, obj3)
//Good practice to give {}, as it gets as the target, if in place of target {}, obj1 will be written,
//then all data will be edited to the obj1

//Common practice: spread operator
const obj5 = {...obj1, ...obj2}
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser)) //Makes the all properties into the all different arrays
console.log(tinderUser.hasOwnProperty('IsHappy'))

//Object Destructing
const course = {
    coursename: 'Js Revision',
    price: '999',
    courseInstructor: 'Tushar'
}

const {courseInstructor} = course
console.log(courseInstructor);
const {price: p, coursename: c}= course
console.log(p, c);
//Revision takes back to the object destructing used in ReactJs when used in place of passing props, we simply do
// ({courseInstructor})  ={} 

const courseTest = {
    coursename: 'Js Revision',
    price: '999',
    courseInstructor: 'Tushar',
    'isHappy': false
}
console.log(courseTest);