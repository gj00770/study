// 아래와 같이 1초뒤에 onSuccess 또는 onError를 호출하는 execute 함수가 있습니다.

// execute를 3 번 호출하되 각 작업은 순차적으로 진행되어야 합니다. (success 혹인 error 가 1초 단위로 출력되어야 함)

// onError가 발생하더라도 남은 작업은 원활하게 진행되어야 합나다.
function onError() {

}
function onSuccess() {

}

function execute(onSuccess: () => void, onError: () => void) {
	console.log('execute');
	setTimeout(() => {
		// 랜덤 값이 짝수일 경우
		if (Math.floor(Math.random() * 100) % 2 === 0) {
			console.log('success');
			onSuccess();
		} else {
			console.log('error');
			onError();
		}
	}, 1000);
}

// 위 요구사항에 맞춰

// callback, promise, async-await 각각을 사용하여 구현해보세요

// 힌트) catch, try-catch


execute(() => {
	execute(() => {
		execute(() => {

		}, () => {

		})
	}, () => {

	})
}, () => {

});

new Promise<void>((resolve, rejected) => {
	execute(resolve, rejected)
}).then(() => {
	new Promise<void>((resolve, rejected) => {
		execute(resolve, rejected)
	}).then(() => {
		new Promise<void>((resolve, rejected) => {
			execute(resolve, rejected)
		})
	})
})

function executeToPromise() {
	return new Promise<void>(execute);

}
executeToPromise().then(() => {
	executeToPromise().then(() => {
		executeToPromise()
	})
})

executeToPromise().then(() => {
	return executeToPromise()
}).then(() => {
	return executeToPromise()
})


async function runExe() {
	await executeToPromise();
	await executeToPromise();
	await executeToPromise();

}