async function doTask1() {
  let task1Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 1 Completed");
    }, 1000);
  });
  let respone1 = await task1Promise;
  console.log(respone1);
}

async function doTask2() {
  let task2Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 2 Completed");
    }, 2000);
  });
  let respone2 = await task2Promise;
  console.log(respone2);
}

async function doTask3() {
  let task3Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 3 Completed");
    }, 3000);
  });
  let respone3 = await task3Promise;
  console.log(respone3);
}

async function* taskDoneGenerator() {
  console.log("Task 1 Started");
  yield await doTask1();
  console.log("Task 2 Started");
  yield await doTask2();
  console.log("Task 3 Started");
  yield await doTask3();
}

let performTask = taskDoneGenerator();
performTask.next();
performTask.next();
performTask.next();
