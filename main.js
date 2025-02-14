// // let a = "South Korea";
// // console.log(a);

// // a = "North Korea";
// // console.log(a);

// // // const a = "South Korea";
// // // console.log(a);

// // // a = "North";
// // // console.log(a);

// //스코프
// //global scope
// //local scope - function,block scope

// //전역 스코프프
// var a = 10;

// //블록 스코프
// if (true) {
//   let a = 20;
//   console.log("2-", a);
// }

// console.log("3-", a);

// //function scope
// function test() {
//   var b = 30;
//   console.log("4-", a);
//   console.log("5-", b);
// }

// //그런데 밖에서 b를 호출 할 수 없다!
// console.log("5-", b);

// test();

//화살표 함수는 return과 {}(중괄호)를 삭제함으로써, 간단
//하게 만들 수 있다!
// const sum = (num1, num2) => num1 + num2;

// const result = sum(20, 20);
// console.log(result);

//매개변수가 1개일 때는 소괄호 생략 가능!
//  const sum = (num1) => num1 + num1;
//  const result = sum(30);
// console.log(result);

// const printPie = () => 3.14;
// const result = printPie();
// console.log(result);

// const getObject = () => ({
//   name: "철수",
//   age: 20,
// });

// const obj = getObject();
// console.log(obj.name);

// //내부함수 형태 화살표 형태로 간추리기
// //함수 안에 또 함수가 들어있음!
// const outer = (x) => () => x * x;
// const innerFuc = outer(10);
// const result1 = innerFuc();
// console.log(result1);

// //순수함수
// function add(a, b) {
//   return a + b;
// }
// console.log(add(10, 5));

//똑같은 인자를 넣어도 값이 달라지는 경우우
// var c = 10;
// function add2(d, e) {
//   return d + e + c;
// }

// console.log(add2(10, 5));
// console.log(add2(10, 6));
// console.log(add2(10, 7));

//부수효과가 있는 경우
var c = 20;
function add3(a, b) {
  c = b;
  //여기서 c값이 달라짐!
  return a + b;
}

console.log("c:", c);
console.log(add3(20, 30));
console.log("c:", c);

//넘어온 인자에 상태를 직접 변경
//순수함수(X)
var obj1 = { val: 10 };
function add4(obj, b) {
  obj.val += b;
}
console.log(obj1.val);
add4(obj1, 20);
console.log(obj1.val);

//다시 순수함수
var obj2 = { val: 30 };
function add5(obj, b) {
  return { val: obj.val + b };
}

console.log(obj1.val);
add5(obj1, 20);
console.log(obj1.val);
