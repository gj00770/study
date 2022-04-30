'use strict'

//javaScript is synchronous
//hoistion: var, function declaration

console.log('1')
setTimeout(function() {
    console.log('2')
},1000)

console.log('3')
//동기 콜백
function printImmeddiately(print){
    print();
}
printImmeddiately(()=> console.log('hi'))

//비동기 콜백

function printWithDelay(print, timeout){
    setTimeout(print,timeout)
}
printWithDelay(()=>console.log('async callback'), 2000)




//  Callback Queue(Event Queue)
// Callback Queue란 Call Stack이 비면 해야할 작업들을 담고 있는 queue이다.

// Call Stack에 작업을 보내기 전에 대기하는 큐라고 볼 수 있다.

// 자바스크립트에서 비동기로 실행되는
//  함수들(예를들면 setTimeout)이 Call Stack에 들어갔다가 webAPIs에서 실행 후 Callback Queue에 들어오는 것이다.

// callStack
// 위에 간단한 설명으로는 Call Stack을 코드가 실행되면서 스택 프레임이 쌓이는 곳이라고 소개하였다.
// 자바스크립트는 하나의 호출 스택을 사용한다. 이는 하나의 함수가 실행되면 
 //그 함수가 끝날 때까지 다른 함수는 실행할 수 없음을 의미한다.
// 함수를 호출하면 순차적으로 함수를 Call Stack에 담아 처리한다.
// Call Stack에 함수가 들어오면(push) 실행하고 끝날 때 pop하여 Call Stack에서 나간다.
// 만약 a라는 함수가 b라는 함수를 호출한다면 a는 Call Stack에 들어가고 그 위에 b라는 함수가 쌓여 b를 실행한 뒤 종료되면
// b가 pop되고 a가 종료되면 pop되어 Call Stack이 비게 된다.



// 위에서 Callback Queue는 Call Stack이 비면 Call Stack으로 작업을 하나씩 보낸다고 나와있다.

// Call Stack이 비었는지 확인하고 Callback Queue에 먼저 들어온 작업을 하나씩 Call Stack으로 옮겨주는 일을 하는 것이 Event Loop이다.

setTimeout(function() {
   console.log("first");
}, 0);

// console.log("second");        //console -> second first
// 위의 코드를 실행하면 setTimeout을 0으로 설정했음에도 불구하고 second 먼저 실행되어 출력된다.

// 그 이유가 위에서 설명한 Javascript의 구조때문이다.

// setTimeout을 0으로 설정하고 실행하면 setTimeout은 Call Stack에 잠시 들어갔다가 setTimeout이라는 것을 알고 webAPIs에 들어간다. 그리고 곧바로 Event Queue에 들어가지만 이미 console.log("second")가 Call Stack에 있기 때문에 second가 출력된 후 Call Stack이 비었을 때 console.log("first")가 들어갈 수 있다.

// 이러한 javascript의 구조를 이해하고 setTimeout을 사용한다면 조금 더 원하는 방향으로 코드가 동작할 수 있을 것이다.


//callback hell example

class UserStorage{
    loginUser(id, password, onSucuccess, onError){
      
        
        setTimeout(()=>{
            if(
                id === 'rion' && password === '1234' ||
                id === 'coder' & password === '2222'       
            )
            {
                onSucuccess(id);
            }else{
                onError(new Error('not Found'))
            }
        },2000)

    }
    getRoles(user, onSucuccess, onError){
        setTimeout(()=>{
            if(user === 'rion'){
                onSucuccess({name:'gumin',role :'admin'})
            }
            else{
                onError(new Error('no access'))
            }
           
        },1000)
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user=>{
        userStorage.getRoles(
            user,
            userWithRole=>{
                alert(`hELLO ${userWithRole.name}, you have a ${userWithRole.role} `)
            },
            error => {
                console.log(error)
            }
             )
    },
    error=>{
        console.log(error)
    }
)
//catch after then


new Promise((resolve,reject)=>{
setTimrout(()=>{
reject(new Error('err'))

})
}).then(res =>{
 console.log('firstRes', res)
}).
catch(err => {
 console.log(err);
 return '123'
 
}).then(res =>{
console.log(res, '234')
})

