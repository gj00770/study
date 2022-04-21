'use strict'


//Promise is a JavaScript objectr for asynchronous operation.
// state: pending => fulfilled state or rejected state
// producer vs consumer


//1. producer
// when new Promise is created, the executor runs automnatically.
const promise = new Promise((resolve,reject)=>{
    //doing some heavy work(netWork, data)
    setTimeout(()=>{
      //  resolve('ellie');
        reject(new Error('no network'))
    },2000);

    console.log('doning something....');

});

//2.consumer: then, catch, finally

promise.then((value)=>{
    console.log(value)
})
.catch(err =>{
    console.log(err)
})
.finally(()=>{ // cons-le when finish
    console.log('finally')  
})

//promise chaining

const fetchNumber = new Promise((resolve,reject)=>{
    setTimeout(()=> resolve(1),1000);
});

fetchNumber.then(num => num*2)
.then(num => num*2)
.then(num => num*3)
.then(num => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(num-1),1000);
    })
}).then(num=>console.log(num))
