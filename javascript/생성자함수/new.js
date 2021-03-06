// 자바스크립트 함수는 재사용 가능한 코드를 묶음으로 사용하는 것 외에 객체를 생성 하기 위한 방법으로도 사용된다.

// 객체를 생성하기 위해서는 직접 객체를 반환해도 되지만, new 키워드를 사용하여 함수를 호출하게되면 return 문이 없어도 새로운 객체를 반환 시킨다.

// 그리고 함수 에서 this를 사용하여 반환되는 객체의 초기 상태와 행위를 정의할 수 있다.

// 이렇게 객체를 생성하는 역할을 하는 함수를 생성자 함수라고 한다.

// 생성자 함수 는 new 키워드를 사용하지 않으면 일반적인 함수와 동일하게 동작하여 새로운 객체를 반환하지 않는다.
// 그렇기 때문에 함수명을 대문자 로 시작한다.


function dog(color) {
    this.color = color
    this.eat = function (subject){
        console.log('먹기')
    }
    this.run = function (subject){
        console.log('뛰기')
    }
    this.getcolor = function (color) {
      console.log(`${color}`)
    }
  }

  const labrador = new dog('blue');
  console.log(labrador.color())
  console.log(labrador.eat())
  console.log(labrador.run())




  // 실무에선 사용자나 물건같이 동일한 종류의 객체를 여러 개 
//생성해야 하는 경우가 잦습니다.

// 이럴 때 new 연산자와 생성자 함수에서 배운 new function을 사용할 수 있습니다.

// 여기에 더하여 모던 자바스크립트에 도입된 클래스(class)라는
//  문법을 사용하면 객체 지향 프로그래밍에서 사용되는 
// 다양한 기능을 자바스크립트에서도 사용할 수 있습니다.



//생성자함수 


function User(name) {
  // this = {} (빈 객체가 암시적으로 만들어짐)
  this.name = name;
  this.isAdmin = false;
    // return this;  (this가 암시적으로 반환됨)
}

let user = new User("보라");

alert(user.name); // 보라
alert(user.isAdmin); // false



//빈객체를만들어 this에 할당하면 함수본문을실행에 this를 수정합니다
//그리고나서 this 를 반환합니

//   재사용할 필요가 없는 복잡한 객체를 만들어야 한다고 해봅시다. 많은 양의 코드가 필요할 겁니다. 이럴 땐 아래와 같이 코드를 익명 생성자 함수로 감싸주는 방식을 사용할 수 있습니다.

// let user = new function() {
//   this.name = "John";
//   this.isAdmin = false;

//   // 사용자 객체를 만들기 위한 여러 코드.
//   // 지역 변수, 복잡한 로직, 구문 등의
//   // 다양한 코드가 여기에 들어갑니다.
// };



//new.target과 생성자 함수


// new.target 프로퍼티를 사용하면 함수가 new와 함께 호출되었는지 아닌지를 알 수 있습니다.

// 일반적인 방법으로 함수를 호출했다면 new.target은 undefined를 반환합니다. 반면 new와 함께 호출한 경우엔
//  new.target은 함수 자체를 반환해줍니다.


function User() {
  alert(new.target);
}

// 'new' 없이 호출함
User(); // undefined

// 'new'를 붙여 호출함
new User(); // function User { ... }



function User(name) {
  if (!new.target) { // new 없이 호출해도
    return new User(name); // new를 붙여줍니다.
  }

  this.name = name;
}

let bora = User("보라"); // 'new User'를 쓴 것처럼 바꿔줍니다.
alert(bora.name); // 보라


//생성자와 return문


function BigUser() {

  this.name = "원숭이";

  return { name: "고릴라" };  // <-- this가 아닌 새로운 객체를 반환함
}

alert( new BigUser().name );  // 고릴라


function SmallUser() {

  this.name = "원숭이";

  return; // <-- this를 반환함
}

alert( new SmallUser().name );  // 원숭이