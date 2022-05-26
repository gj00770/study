//1.순수함수

//동일한 입력에는 항상 같은 값을 봔한해야 하는 함수
//함수의 실행이 프로그램의 실행에 영향을 미치지 않아야 하는 함사
//함수 내부에서 인자의 값을 변경하거나 프로그램 상태를 변경하는 Side Effect가없는것     

let num = 1;

function add(a) {
    return a + num;
}

//위와 같은 예제에서는 add라는 함수 안에서 전역으로 선언된 변수인 num을 참조하기 때문에 순수함수라고 볼 수 없다.


function add(a, b) {
    return a + b;
}

const result = add(2, 3);

//위와 같이 add의 함수가 프로그램 실행에 영향을 미치지 않고 입력 값에 대해서만 값의 변환이 있으므로 순수함수이다.


//2. 비상태, 불변성 (Stateless, Immutability)

// 함수형 프로그래밍에서의 데이터는 변하지 않는 불변성을 유지해야 한다.
// 데이터의 변경이 필요한 경우,
// 원본 데이터 구조를 변경하지 않고 그 데이터의 복사본을 만들어서 그 일부를 변경하고, 
// 변경한 복사본을 사용해 작업을 진행한다.

let person = { name: "jongmin", age: "26" };

function increaseAge(person) {
    person.age = person.age + 1;
    return person;
}

//위의 예제에서는 increaseAge 함수에서 전역으로 선언된 person의 age
// 속성을 변경하므로 불변성 유지를 만족하지 못한다.
//


const person = { name: "jongmin", age: "26" };

function increaseAge(person) {
    return { ...person, age: person.age + 1 };
}

//위처럼 객체의 값을 바꾸기 위해서는 데이터의 복사본을 만들어,
// 그 복사본을 사용해 작업을 진행하고 반환한다.


//3. 선언형 함수 

// /명령형 프로그래밍은 무엇을 어떻게 할 것인가에 주목하고, 
// 선언헌 프로그래밍은 무엇을 할 것인가에 주목한다.


let numbers = [1, 2, 3];

function multiply(numbers, multiplier) {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = numbes[i] * multiplier;
    }
}

// 선언형 프로그래밍
function multiply(number, multiplier) {
    return number.map((num) => num * multiplier);
}