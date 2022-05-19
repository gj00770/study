const MyReact = (function () {
    let _states = []; //배열로 찾음
    let idx = 0;

    function useState(initialValue) {
        const state = _states[idx] || initialValue;
        const currIdx = idx;  // capture current hook's index

        function setState(value) {
            _states[currIdx] = value;
        }

        idx += 1;  // set next hook's index
        return [state, setState];
    }

    function render(Component) {
        idx = 0;  // reset hook's index
        return Component();
    }

    return { useState, render };
})();

function Counter() {
    const [count, setCount] = MyReact.useState(1);

    return (
        <div>
            <h1>Simple Counter : {count}</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
}
function Counter() {
    const [getCount, setCount] = MyReact.useState(1);

    const count = getCount();
    console.log(count);

    return (
        <div>
            <h1>Simple Counter : {count}</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
}

/* First render */
MyReact.render(Counter);  // 1

/* Assume the user clicks the [+1] button here. */

/* Second render (Assume this re-rendering was caused by clicking the button.) */
MyReact.render(Counter);  // 1 (Why?)


// 결국, React에서 함수형 컴포넌트가 Hook에 의해 지역 상태를 가질 수 있는 원리는 다음과 같이 요약된다. 
// React 모듈의 변수(= 즉시 실행 함수의 지역 변수)로 존재하는 인덱스 값은 함수형 컴포넌트를 하나 렌더링 할 때마다 
// 0으로 초기화된다. 그리고 해당 함수형 컴포넌트에서 Hook을 하나 호출할 때마다 해당 인덱스 값을 참조 및 갱신(+1)한다.
//  이러한 원리로 각 함수형 컴포넌트의 렌더링마다 인덱스가 0부터 시작하는 여러 개의 지역 상태를 가질 수 있는 것이다.
//   useEffect() Hook도 결국은 의존성 배열이라는 지역 상태를 저장한다는 측면에서 마찬가지 원리로 구현된다.
