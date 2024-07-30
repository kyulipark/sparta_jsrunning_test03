//세 개의 비동기 작업이 있습니다. 각 작업은 랜덤한 시간 후에 완료됩니다.
// 이 중 가장 먼저 완료되는 작업의 결과를 반환하는 함수를 작성하세요.
// taskA, taskB, taskC라는 세 개의 비동기 함수를 작성하세요. 
// 각 함수는 랜덤한 시간 후에 "Task A Complete", "Task B Complete", "Task C Complete" 메시지를 반환합니다.
//가장 먼저 완료된 작업의 결과를 반환하는 findFirstCompletedTask라는 함수를 작성하세요.



function taskA() {
    return new Promise((resolve) => {
        const time = Math.floor(Math.random() * 5000);
        setTimeout(() => {
            resolve("Task A Complete");
        }, time);
    });
}

function taskB() {
    return new Promise((resolve) => {
        const time = Math.floor(Math.random() * 5000);
        setTimeout(() => {
            resolve("Task B Complete");
        }, time);
    });
}

function taskC() {
    return new Promise((resolve) => {
        const time = Math.floor(Math.random() * 5000);
        setTimeout(() => {
            resolve("Task C Complete");
        }, time);
    });
}



const promise1 = taskA();
promise1
.then(() => {
console.log("Task A Complete");
})
.catch(() =>{
    console.log("error")
});


const promise2 = taskB();
promise2
.then(() => {
console.log("Task B Complete");
})
.catch(() =>{
    console.log("error")
});


const promise3 = taskB();
promise3
.then(() => {
console.log("Task B Complete");
})
.catch(() =>{
    console.log("error")
});


// 가장 먼저 완료된 작업을 찾아서 반환되는 값을 출력하세요.
// promse.race 사용?

const results = await Promise.race([promise1,promise2,promise3]).then(result => {

    // results.forEach((result) => console.log(result));
    results.forEach((result)  => console.log(result));
});

