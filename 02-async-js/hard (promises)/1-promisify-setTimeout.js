/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hi, The promise is resolved"), n * 1000);
  });
}

wait(5).then((res) => console.log(res));
