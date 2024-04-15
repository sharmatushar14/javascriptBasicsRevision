//For each loop
const coding= ['js', 'ruby', 'python', 'swift', 'cpp']

coding.forEach((val)=>{
    console.log(val)
})
coding.forEach(function (val){
    console.log(val)
})

function printMe(item){
    console.log(item);
}
coding.forEach(printMe) //Have to pass reference (printMe), we dont have to call the fn (printMe())

coding.forEach((item, index, array)=>{
console.log(item, index, array);
})

//For each is especially made for arrays, it cannot help to iterate over objects

const arr = [
    {
        name: "Tushar",
        id: 14
    },
    {
        name: "Bittu",
        id: 4
    },
    {
        name: "Ankit",
        id: 2
    },
    {
        name: "Elon Musk",
        id: 1
    }
]

arr.forEach((val)=>{
    console.log(val.name)
})

