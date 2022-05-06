// 실무에선 사용자나 물건같이 동일한 종류의 객체를 여러 개 생성해야 하는 경우가 잦습니다.

// 이럴 때 new 연산자와 생성자 함수에서 배운 new function을 사용할 수 있습니다.

// 여기에 더하여 모던 자바스크립트에 도입된 클래스(class)라는 문법을 사용하면 객체 지향 프로그래밍에서 사용되는 
// 다양한 기능을 자바스크립트에서도 사용할 수 있습니다.


//기본 문법
//클래스는 다음과 같은 기본 문법을 사용해 만들 수 있습니다


class MyClass{
  constructor(){
//do something
  }
  method1() { 
 //   ... 
  }
  method2() { 
  //... 
  }
  method3() { 
    //...
   }
}

// 객체의 기본 상태를 설정해주는 생성자 메서드 constructor()는
//  new에 의해 자동으로 호출되므로,
//  특별한 절차 없이 객체를 초기화 할 수 있습니다.

class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }

}

// 사용법:
let user = new User("John");
user.sayHi(); //john


// new User("John")를 호출하면 다음과 같은 일이 일어납니다.

// 새로운 객체가 생성됩니다.
// 넘겨받은 인수와 함께 constructor가 자동으로 실행됩니다. 이때 인수 "John"이 this.name에 할당됩니다.
// 이런 과정을 거친 후에 user.sayHi() 같은 객체 메서드를 호출할 수 있습니다.



