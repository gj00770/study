

class UserStorage{
    loginUser(id, password){
      return new Promise((resolve,rejected)=>{
        setTimeout(()=>{
            if(
                id === 'rion' && password === '1234' ||
                id === 'coder' & password === '2222'       
            )
            {
                resolve(id);
            }else{
                rejected(new Error('not Found'))
            }
        },2000)
      })
        
       

    }
    getRoles(user){
        return new Promise((resolve,rejected)=>{
            setTimeout(()=>{
            
                if(user === 'rion'){
                    resolve({name:'gumin',role :'admin'})
                }
                else{
                    rejected(new Error('no access'))
                }
               
            },1000)
        })
        
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(id,password)
    .then(userStorage.getRoles)
    .then(user =>  alert(`hELLO ${user.name}, you have a ${user.role} `))
    // userStorage.loginUser(
    //     id,
    //     password,
    //     user=>{
    //         userStorage.getRoles(
    //             user,
    //             userWithRole=>{
    //                 alert(`hELLO ${userWithRole.name}, you have a ${userWithRole.role} `)
    //             },
    //             error => {
    //                 console.log(error)
    //             }
    //              )
    //     },
    //     error=>{
    //         console.log(error)
    //     }
    // )

