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