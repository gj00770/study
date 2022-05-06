


// 아래 코드가 동작하는 과정을 Heap, Call Stack, Web Api, Callback Queue를 이용해 설명해보세요

// 그림을 그려도 좋습니다.


async function request() {
	await new Promise(resolve => {
		setTimeout(() => {
			console.log('finish');
			resolve();	
		}, 1000)
	})
}

async function main() {
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


// 1. main  함수가 실행됨

// 2. start가 콘솔에 찍힘 -> interval 함수와 request함수가 각각 webapi로 넘어감 

// 3. interval이 힙에저장되면서 webapi에 넘어가면서 callbackque를 순회하면서 console.log를 0.1초에 한번씩 찍음



// 4. 1초뒤 await request가 callbackqueue 에 나오면서 finish가 실행됨 

// 5. interval이 힙에저장되면서 webapi에 넘어가면서 callbackque를 순회하면서 console.log를 0.1초에 한번씩 찍음


// 6 . 1초뒤 await request가 callbackqueue 에 나오면서 finish가 실행됨 

// 7 . clearInterval로 interval 종류