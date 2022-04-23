// Animal
//  - name (프로퍼티)
//  - age  (프로퍼티)
//  - run() (함수)
//  - sleep() (함수)

// Dog extends Animal
//  - color (프로퍼티)
//  - jump() (함수)

// Cat extends Animal
//  - color (프로퍼티)
//  - scratch() (함수)

// Husky extends Dog
//  - size (프로퍼티)
//  - pullSled() (함수)

let animal = {
    name: 'asdasd',
    age : 32,

    run(){
        console.log('running')
    },
    sleep(){
        console.log('snoring')
    }

}
 let dog ={
 
 color:'red',
 jump(){
 console.log('dunk')
 }
} 
dog.__proto__ = animal;

let cat = {
    color:'blue',
    scratch(){
        console.log('scratch')
    }    
}

cat.__proto__ = animal;


let husky = {
    size:'32',
    pullSled(){
        console.log('running')
    }    
}

husky.__proto__ = dog;



console.log(dog);
console.log(cat);
console.log(husky);