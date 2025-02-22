const btn1 = document.getElementById("one");
const btn2 = document.getElementById("two");
const btn3 = document.getElementById("three");

//이것들은 버튼이니까 핸들러 함수를 만들어봄!
//이벤트 객체 만들어서 전달 시켜보기: (=event)
//이벤트 전달은 사용자 마음대로 가능!
const handleClick = function (event) {
  console.log(event.target);
};
//이 핸들러 함수를 버튼2에다가만 addListener로 등록!
btn1.addEventListener("click", handleClick);
btn2.addEventListener("click", handleClick);
btn3.addEventListener("click", handleClick);
//이 이벤트 핸들러를 이용하면 이벤트를 여러 개 등록 가능!
//이번에는 익명 함수를 바로 전달!
// btn2.addEventListener("click", function () {
//   console.log("또 다른 이벤트 핸들러가 추가 등록되었습니다.");
// });
// //하나의 버튼에 여러라지 이벤트를 add 해서 추가시킬 수 있음!

// btn2.removeEventListener("click", handleClick);
