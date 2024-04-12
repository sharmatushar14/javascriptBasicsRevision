//Immediately Invoked Function Expresssions (IIFE)
//To eradicate the pollution that is caused by the variables and whatever declaration is there by the global scope
//In layman terms, to invoke the function immediately
//(declaration of iife)(parameter braces);---> ; is necessary to stop the context of the IIFE

(function iife1(){
    console.log(`Connected to Database`)
})(); //-->Named IIFE

(()=>{
    console.log('Connected to Database 2')
})(); //--> Arrow IIFE

((name)=>{
    console.log(`Connected to Database ${name}`)
})(3);  //--> Parameterised 


let MongoDb='MongoDb';
((name)=>{
    console.log(`Connected to Database ${name}`)
})(MongoDb);  //--> Parameterised 

//Thought for the day:
// In JavaScript, if you don't enclose something in quotes, it can be interpreted as a variable name or as a numeric value.


