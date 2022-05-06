// 클래스 상속을 사용하면 클래스를 다른 클래스로 확장할 수
// 있습니다.

// 기존에 존재하던 기능을 토대로 새로운 기능을
// 만들 수 있다.


// 먼저, 클래스 Animal을 만들어보겠습니다.
class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      alert(`${this.name} 은/는 속도 ${this.speed}로 달립니다.`);
    }
    stop() {
      this.speed = 0;
      alert(`${this.name} 이/가 멈췄습니다.`);
    }
  }
  
  let animal = new Animal("동물");

//   클래스 확장 문법 class Child extends Parent를 사용해 클래스를 확장해 봅시다.

//   Animal을 상속받는 class Rabbit를 만들어 보겠습니다.

  class Rabbit extends Animal {
    hide() {
      alert(`${this.name} 이/가 숨었습니다!`);
    }
  }
  
  let rabbit = new Rabbit("흰 토끼");
  
  rabbit.run(5); // 흰 토끼 은/는 속도 5로 달립니다.
  rabbit.hide(); // 흰 토끼 이/가 숨었습니다!


//   객체 rabbit에 run이 있나 확인합니다. run이 없네요.
//   rabbit의 프로토타입인 Rabbit.prototype에 메서드가 있나 확인합니다. hide는 있는데 run은 없습니다.
//   extends를 통해 관계가 만들어진 Rabbit.prototype의 프로토타입, Animal.prototype에 메서드가 있나 확인합니다.
//    드디어 메서드 run을 찾았습니다.


// extends 뒤에 표현식이 올 수도 있습니다.
// 클래스 문법은 extends 뒤에 표현식이 와도 처리해줍니다.

// 아래 예시처럼 extends 뒤에서 부모 클래스를 만들어주는 함수를 호출할 수 있습니다.


function f(phrase) {
    return class {
      sayHi() { alert(phrase) }
    }
  }
  
  class User extends f("Hello") {}
  
  new User().sayHi(); // Hello

//   여기서 class User는 f("Hello")의 반환 값을 상속받습니다.

//   이 방법은 조건에 따라 다른 클래스를 상속받고 싶을 때 유용합니다. 
//   조건에 따라 다른 클래스를 반환하는 함수를 만들고, 
//   함수 호출 결과를 상속받게 하면 됩니다.


// 개발을 하다 보면 부모 메서드 전체를 교체하지 않고, 부모 메서드를 토대로 일부 기능만 변경하고 싶을 때가 생깁니다. 부모 메서드의 기능을 확장하고 싶을 때도 있죠. 이럴 때 커스텀 메서드를 만들어 작업하게 되는데, 이미 커스텀 메서드를 만들었더라도 이 과정 전·후에 부모 메서드를 호출하고 싶을 때가 있습니다.

// 키워드 super는 이럴 때 사용합니다.

// super.method(...)는 부모 클래스에 정의된 메서드, method를 호출합니다.
// super(...)는 부모 생성자를 호출하는데, 자식 생성자 내부에서만 사용 할 수 있습니다.
// 이런 특징을 이용해 토끼가 멈추면 자동으로 숨도록 하는 코드를 만들어보겠습니다.


class Animal {

    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
  
    run(speed) {
      this.speed = speed;
      alert(`${this.name}가 속도 ${this.speed}로 달립니다.`);
    }
  
    stop() {
      this.speed = 0;
      alert(`${this.name}가 멈췄습니다.`);
    }
  
  }
  
  class Rabbit extends Animal {
    hide() {
      alert(`${this.name}가 숨었습니다!`);
    }
  
    stop() {
      super.stop(); // 부모 클래스의 stop을 호출해 멈추고,
      this.hide(); // 숨습니다.
    }
  }
  
  let rabbit = new Rabbit("흰 토끼");
  
  rabbit.run(5); // 흰 토끼가 속도 5로 달립니다.
  rabbit.stop(); // 흰 토끼가 멈췄습니다. 흰 토끼가 숨었습니다!



  //생성자 오버라이딩 

  class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    // ...
  }
  
  class Rabbit extends Animal {
  
    constructor(name, earLength) {
      this.speed = 0;
      this.name = name;
      this.earLength = earLength;
    }
  
    // ...
  }
  
  // 동작하지 않습니다!
  let rabbit = new Rabbit("흰 토끼", 10); // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor

  // 일반 클래스가 new와 함께 실행되면, 빈 객체가 만들어지고 this에 이 객체를 할당합니다.
// 반면, 상속 클래스의 생성자 함수가 실행되면, 일반 클래스에서 일어난 일이 일어나지 않습니다.
//  상속 클래스의 생성자 함수는 빈 객체를 만들고 this에 이 객체를 할당하는 일을 부모 클래스의 생성자가
//   처리해주길 기대합니다.
// 그래서 super를 사용하여 부모객체를 실행해줍니다.


class Animal {

  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  // ...
}

class Rabbit extends Animal {

  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }

  // ...
}

// 이제 에러 없이 동작합니다.
let rabbit = new Rabbit("흰 토끼", 10);
alert(rabbit.name); // 흰 토끼
alert(rabbit.earLength); // 10


