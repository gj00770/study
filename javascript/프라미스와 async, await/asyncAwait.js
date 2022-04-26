//async && await 

// clear style of using promise 

function fetchUser(){
    //do network request in 10 sec....
   return new Promise((resolve,reject)=>{
       resolve('ellie')
   })
   
}

const user = fetchUser();
user.then(console.log)
console.log(user);


async function fetchUser2(){
    //do network request in 10 sec....
       return 'ellie'
   
}

const user2 = fetchUser2();
user2.then(console.log)
console.log(user2);


function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}

async function getApple(){
    await delay(3000);
    return 'apple'
}
async function getBanana(){
    await delay(3000);
    return 'banana'
}
async function getBanana(){
    await delay(3000);
    return 'banana'
}

function pickFruit(){
    return getApple()
    .then(apple =>{
        return getBanana().then(banana =>`${apple} ${banana}` )
    })
}
pickFruit().then(console.log);

async function pickFruit2(){
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} ${banana}`
}
pickFruit2().then(console.log);


/// useful api 

function pickAllfruit(){
    return Promise.all([getApple(),getBanana()]).then(fruit=>{
        fruit.join(' + ')
    });
}

pickAllfruit().then(console.log);

function pickOnlyOne(){
    return Promise.race([getApple(),getBanana()])
}

pickOnlyOne().then(console.log)