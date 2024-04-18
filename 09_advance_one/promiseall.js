const promise1= Promise.resolve(3);
const promise2= 43;
const promise3=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Foo')
        resolve() //Promise has no value, hence it will be executed with undefined as value 
    },4000)
});
Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
  });

  const promise4 = Promise.resolve(3);
const promise5 = 42;
const promise6 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise4, promise5, promise6]).then((values) => {
    console.log(values);
  });
//Expected output: Array [3, 42, "foo"]


const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});
Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); // [3, 1337, "foo"]
});

const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)]
const p = Promise.all(resolvedPromisesArray);
console.log(p);

setTimeout(()=>{
    console.log('The Queue is Empty now as this setTimeout fn has reached the call stack');
    console.log(p);
})

const mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
const test = Promise.all(mixedPromisesArray).catch((err)=>{
    console.log(err);
})
console.log(test);
setTimeout(() => {
  console.log("the queue is now empty");
  console.log(test);
});
