const mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
const p = Promise.all(mixedPromisesArray);
console.log(p);
p.catch(()=>{
    //Wont do anything here, we are just catching the rejected error so that the code do go on
})
setTimeout(() => {
  console.log("the queue is now empty");
  console.log(p);
});

//Output
// Promise { <pending> }
// the queue is now empty
// Promise { <rejected> 44 }