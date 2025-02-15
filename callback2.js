function greetToUser(greet) {
  const name = "John";
  greet(name);
}

function greetInKorean(name) {
  console.log(name + "님 안녕하세요");
}

function greetInEnglish(name) {
  console.log(name + "Hi");
}
greetToUser(greetInEnglish);
