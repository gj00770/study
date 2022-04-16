

// 가비지 컬렉터는 더이상 사용되지 않는 변수는 메모리에서 제거합니다.

// 아래 코드에서 valueA를 메모리에서 제거해보세요.


let valueA = { test: 1 };
let valueB = { b: 2, a: valueA };
//우선 valueA를 를제거하기위해 valueA를 먼저 제거해주고 
// valueB또한 vlueA의 값을 바라보고 있기 떄문에 valueB. 의 valueA 또한 제거해줍니다.
valuseA = null;
console.log(valueA);
console.log(valueB);

