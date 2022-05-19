function Counter() {
    const [count, setCount] = MyReact.useState(1);
    const [title, setTitle] = MyReact.useState('Simple Counter');

    useEffect(() => {
        console.log('Side effect');
    }, [count, title]);
    
    // ....
}
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

function useEffect(callback, depArray) {
    const oldDepArray = _states[idx];  // check old dependency array

    // check two array's diff
    let hasChanged = true;
    if (oldDepArray) {
        hasChanged = depArray.some((dep, i) => !Object.is(dep, oldDeps[i]));
    }

    if (hasChanged) callback();  // call callback if change occurs

    _states[idx] = depArray;  // save current dependency array for next comparison
    idx += 1;  // set next hook's index
}



