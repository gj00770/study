

//그러면 새로고침할떄마다 그니까 control+s 를누를떄마다 intervalId가 메모리에 추가되는데 하나씩 이유?



// callAndSearch 함수는 모든 휴대폰의 call, search 를 호출하는 작업을 수행합니다.

// 새로운 종류의 휴대폰이 추가되더라도 callAndSearch 함수가 수정될 필요가 없도록 리펙토링 해보세요

// 힌트) 다형성, 추상화


interface Phone {
	call(): void,
	search(): void


}

class IPhone implements phone {

	call() {
		console.log('전화하기')
	}

	search() {
		console.log('검색')
	}

}

class Galaxy implements phone {

	call() {
		console.log('전화하기')
	}

	search() {
		console.log('검색')
	}


}
const iphone = new IPhone();
const galaxy = new Galaxy();
function callAndSearch(phone: phone) {
	phone.call();
	phone.search();
}

callAndSearch(iphone);















class Phone {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
	callWithGalaxy() {
		console.log('전화하기')
	}

	searchWithGalaxy() {
		console.log('검색')
	}
}

class Galaxy extends Phone {

	constructor(name) {
		super(name); // super class 생성자를 호출하여 name 매개변수 전달
	}

	searchWithGalaxy() {
		console.log('검색')
	}

}


//import React, { ReactNode, useEffect } from 'react';

import { render } from "react-dom";

import React, {
	ReactNode,
	useEffect,
	useState,
	useCallback,
	useMemo
} from "react";

function Container({ children }: { children: ReactNode }) {
	console.log(children);
	return <div>{children}</div>;
}

const ClearButton = React.memo(function (props) {
	//	const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
	//	{a:1 , b:2}
	//	{a:1 , b:2}
	console.log("hi");

	return (
		<button
			disabled={props.disabled}
			onClick={() => props.onClick(props.value)}>
			버튼버튼
		</button>
	);
});

function App() {
	const [value, setValue] = useState(0);
	const teest = useMemo(() => {
		return { a: 1, b: 1 }
	})
	const handleClick = useCallback((value: number) => {
		setValue(value);
	}, []);

	useEffect(() => {
		const intervalId = setInterval(() => setValue((prev) => prev + 1), 1000);
		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return (
		<div>
			<Container>
				<ClearButton
					value={0}
					disabled={value === 0}
					test={teest}
					onClick={handleClick}
				/>
				<ClearButton value={1} disabled={value === 1} onClick={handleClick} />
			</Co\ntainer>
		</div>
	);
}

render(<App />, document.getElementById("root"));