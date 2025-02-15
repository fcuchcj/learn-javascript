//callback함수를 쓰지 않고, promise로 구현!
const f1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("1번 주문 완료");
    }, 1000);
  });
  // setTimeout(function () {
  //   console.log("1번 주문 완료");
  //   callback();
  // }, 1000);
};

const f2 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("2번 주문 완료");
    }, 3000);
  });
};

const f3 = (message) => {
  console.log(message);
  return new Promise((res, ref) => {
    setTimeout(() => {
      res("3번 주문 완료");
    }, 2000);
  });
};

// console.log("시작");
//f1을 찍고 .then으로 2번 res로 넘겨줌!
// f1()
//   .then((res) => f2(res))
//   .then((res) => f3(res))
//   .then((res) => console.log(res))
//   //에러처리 하기
//   .catch(console.log)
//   .finally(() => {
//     console.log("끝");
//   });
// f1(function () {
//   f2(function () {
//     f3(function () {
//       console.log("끝");
//     });
//   });
// });
console.time("x");
Promise.all([f1(), f2(), f3()]).then((res) => {
  console.log(res);
  console.timeEnd("x");
});
