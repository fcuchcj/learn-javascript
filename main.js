// let a = "South Korea";
// console.log(a);

// a = "North Korea";
// console.log(a);

// // const a = "South Korea";
// // console.log(a);

// // a = "North";
// // console.log(a);

//스코프
//global scope
//local scope - function,block scope

//전역 스코프프
var a = 10;

//블록 스코프
if (true) {
  let a = 20;
  console.log("2-", a);
}

console.log("3-", a);

//function scope
function test() {
  var b = 30;
  console.log("4-", a);
  console.log("5-", b);
}

//그런데 밖에서 b를 호출 할 수 없다!
console.log("5-", b);

test();
