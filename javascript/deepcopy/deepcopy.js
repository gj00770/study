// 얕은 복사는 객체의 참조값(주소 값)을 복사하고, 깊은 복사는 객체의 실제 값을 복사한다.
// 자바스크립트에서 값은 원시값과 참조값 두 가지 데이터 타입의 값이 존재한다.
// 자바스크립트에서 원시 타입(primitive type)의 값은 새로운 메모리 공간에 독립적인 값을 저장하기 때문에 깊은 복사가 되고 참조 타입(reference type)값은 얕은 복사가 된다. 
// 원시 타입과 참조 타입의 가장 큰 차이점은 원본이 바뀌면 참조 타입은 복사본도 같이 변경되지만, 원시 타입은 변경되지 않는다는 점이 큰 차이점이다.


// 원시 타입의 깊은 복사
let a = '원본 데이터';
let b = a;

a = '수정 데이터';

console.log(a); // '수정 데이터'
console.log(b); // '원본 데이터'



//원시 타입은 복사 시 값 자체를 담은 독립적인 메모리를 생성하기 때문에 a가 재할당 되더라도 b에는 아무런 영향을 미치지 않는다.


// 참조 타입의 얕은 복사
let a = {name:'원본 데이터'};
let b = a;

a.name = '수정 데이터';

console.log(a); // '수정 데이터'
console.log(b); // '수정 데이터'




function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") {
      return obj;
    }
  
    let copyObj = {};
    for (let key in obj) {
        copyObj[key] = deepCopy(obj[key]);
    }
    return copyObj;
  }