// Call by Value, Call by Reference란 변수, 함수등에 인자가 대입될 때,
//  이 인자를 어떠한 방식으로 넘겨줄지 결정하는 것을 의미합니다.


//callByValue란 값이 그대로 복사되는것을 의미합니다.
// JS에서는 원시데이터(숫자, 문자 등등)의 경우 값의 복사 Call by value가 일어납니다.

//ex

let a = 50;
let b = a; // a의 값을 복사해서 b에 대입
console.log(`a:${a}, b:${b}`); // 50, 50
b = 100;
console.log(`a:${a}, b:${b}`); // 50, 100



function swap(val1,val2) {
    let temp = val1
    val1 = val2;
    val2 = temp;
}

let a = 1, b = 2;
swap(a,b);
console.log(`a:${a}, b:${b}`); // 1, 2 variable does not change.

// 주소의 복사(Call by Reference)
// Call by reference는 데이터가 있는 공간(주소:메모리의 위치)이 참조 되는 것을 말합니다. JS에서 객체는 Call by reference가 일어납니다.

// 아래 코드에는 두 객체가 있고 userB에 userA객체를 대입해 주었습니다. 
// 이 때 userB에는 userA의 id, password 값이 복사되는것이 아닌 userA의 메모리 주소가 참조됩니다. 따라서 userA과 userB는 같은 메모리에 있는 데이터 즉 완전히 같은 값을 참조하는 변수입니다.

const userA = { id:"account", password:"1234" };
const userB = userA;
console.log(`${userA.id}, ${userB.id}`); // account, account
userB.id = "hello1234";
console.log(`${userA.id}, ${userB.id}`); // hello1234, hello1234

