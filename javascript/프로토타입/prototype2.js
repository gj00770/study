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



class Animal {

  constructor(name, age) {
    this.age = age;
    this.name = name;
  }


  sleep() {
    alert(`${this.name}가 zzzzz.`);
  }

}


class Dog extends Animal {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }
  jump() {
    alert(`${this.name}가 점프합니다.`);
  }
}



class Cat extends Animal {

  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }


  scratch() {
    alert(`${this.name}가 긁습니다!`);
  }


}

class Husky extends Dog {

  constructor(name, age, color, size) {
    super(name, age, color);
    this.size = size;
  }


  pullSled() {
    alert(`${this.name}가 달립니다.!`);
  }


}

///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

function Animal(name, age) {
  this.name = name;
  this.age = age;
  this.run = function () {
    console.log(`${this.name} run`);
  }

  this.sleep = function () {
    console.log(`${this.name} sleep`);
  }
}

function Dog(color) {
  this.color = color;
  this.jump = function () {
    alert(`${this.name}가 점프합니다.`);
  }

}
Dog.prototype = new Animal("bicky", 3);

const dog = new Dog('red');


function Cat(color) {
  this.color = color;
  this.scratch = function () {
    alert(`${this.name}가 긁습니다!`);
  }

}

Cat.prototype = new Animal("bicky", 3);


console.log(dog);

dog.sleep()
dog.run()