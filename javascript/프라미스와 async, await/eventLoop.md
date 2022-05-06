```jsx
async function request() {
	await new Promise(resolve => {
		setTimeout(() => {
			console.log('finish');
			resolve();	
		}, 1000)
	})
}

async main() {
	console.log('start');

	const interval =setInterval(() => {
		console.log('interval');
	}, 100)

	await request()
	await request()

	clearInterval(interval);

	console.log('end');
}

main();
```


# 아래 코드가 동작하는 과정을 Heap, Call Stack, Web Api, Callback Queue를 이용해 설명해보세요. 그림을 그려도 좋습니다.




