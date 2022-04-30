// 클로저는 반환된 내부 함수가 자신이 선언됐을 때의 환경(lexical environment)인 스코프를 기억하여 자신이 선언됐을 때의 환경(스코프) 밖에서 호출되어도 그 환경(스코프)에 접근할 수 있는 함수를 말합니다. 

// (간단히 말해서, 클로저는 자신이 생성될 때의 환경(lexical environment)을 기억하는 함수입니다.)

//() 크로저는 외부 변수를 기억하고 이 외부 변수에 접근할  있는 핮수를 의미합니다 .
 

// 자신을 포함하고있는 외부 함수보다 내부 함수가 더 오래 유지되는 경우, 외부 함수 밖에서 내부 함수가 호출되더라도 외부 함수의 지역 변수에 접근할 수 있는데 이러한 함수를 클로저라고 부른다.


//lexical 환경은
// 환경 레코드는 그 (해당)lexical enviro~~의 내부 지역변수를 담고있는 객체이다.. 
// 외부 렉시컬 환경을 가르키는 포인터
// 
function makeWorker() {
    let name = "Pete";
  
    return function() {
      alert(name);
    };
  }
  
  let name = "John";
  
  // create a function
  let work = makeWorker();
  
  // call it
  work(); // what will it show?
  //pete



  function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();
  
  alert( counter() ); // 0
  alert( counter() ); // 1
  
  alert( counter2() ); // 0
  alert( counter2() ); // 1


  function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
  
    this.down = function() {
      return --count;
    };
  }
  
  let counter = new Counter();
  
  alert( counter.up() ); // 1
  alert( counter.up() ); // 2
  alert( counter.down() ); // 1








let x = 1;

function func() {
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
  let x = 2;
}

func();
