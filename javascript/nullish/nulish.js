
// 널 병합 연산자 (??) 는 왼쪽 피연산자가 null 또는 undefined일 때 오른쪽 피연산자를 반환하고, 그렇지 않으면 왼쪽 피연산자를 반환하는 논리 연산자이다.

// 이는 왼쪽 피연산자가 null 또는 undefined 뿐만 아니라 falsy 값에 해당할 경우 오른쪽 피연산자를 반환하는 논리 연산자 OR (||)와는 대조된다. 
// 다시 말해 만약 어떤 변수 foo에게 falsy 값( '' 또는 0)을 포함한 값을 제공하기 위해 ||을 사용하는 것을 고려했다면 예기치 않는 동작이 발생할 수 있다. 



function sum(a, b ,c){
     const first = a ?? 0
     const second = b?? 0
     const third = c ?? 0
    //  console.log('first',first)
    //  console.log('second',second)
    //  console.log('third',third)
    //console.log('sum',first+second+third);
    
    return first+second+third 
}
