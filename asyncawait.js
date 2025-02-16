// async function getName() {
//   //여기서 반환값이 promise이면
//   //return Promise.resolve("Tom");
//   throw new Error("err...");
// }

// console.log(getName());
// //primise를 반환하니까, 함수를 호출하고, .then을 반환하는
// //것이 가능
// //해서 함수를 호출하고, .then을 쓰는 것이 가능!
// getName().catch((err) => {
//   console.log(err);
// });

function getName(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name);
    }, 1000);
  });
}

async function showName() {
  const result = await getName("Mike");
  console.log(result);
  //이것은 함수를 정의한 것이지, 실행한 것이 아님!
}

console.log("시작");
showName();
//함수실행!
