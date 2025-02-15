function main(x) {
  //함수 뒤에다가 ()를 붙여서 콜백함수를
  //호출할 수 있다!
  x();
}

main(function sayHi() {
  console.log("안녕");
});
