// 반복 가능한(iterable, 이터러블) 객체는 배열을 일반화한 객체입니다.
//  이터러블 이라는 개념을 사용하면 어떤 객체에든 for..of 반복문을 적용할 수 있습니다.

// 배열은 대표적인 이터러블입니다. 
// 배열 외에도 다수의 내장 객체가 반복 가능합니다. 문자열 역시 이터러블의 예입니다.

// 배열이 아닌 객체가 있는데, 이 객체가 어떤 것들의 컬렉션(목록, 집합 등)을 나타내고 있는 경우, for..of 문법을 적용할 수만 있다면 컬렉션을 순회하는데 유용할 겁니다.

//객체를 iterable로 만들기!


let range = {
    from: 1,
    to: 5
  };


  range[Symbol.iterator] = function() {

    // Symbol.iterator는 이터레이터 객체를 반환합니다.
    // 2. 이후 for..of는 반환된 이터레이터 객체만을 대상으로 동작하는데, 이때 다음 값도 정해집니다.
    return {
      current: this.from,
      last: this.to,
  
      // 3. for..of 반복문에 의해 반복마다 next()가 호출됩니다.
      next() {
        // 4. next()는 값을 객체 {done:.., value :...}형태로 반환해야 합니다.
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  };
  
  // 이제 의도한 대로 동작합니다!
  for (let num of range) {
    alert(num); // 1, then 2, 3, 4, 5
  }