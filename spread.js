//배열이나 객체 변수에 씀!
//... (점3개);

//callback 함수로 인자 순서를 맞추어주기
function echo(str) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(str);
      //complete
      //모든 일이 끝났을 때 resolve라는 함수를 호출
      resolve();
    }, 1000 * Math.random());
  });
}

//callback으로 비동기 함수 만들기
// echo("라면구입", function () {
//   echo("냄비준비", function () {
//     echo("냄비에 물담기기", function () {
//       echo("끓이기기", function () {
//         echo("라면 스프 넣기기", function () {
//           echo("식사", function () {});
//         });
//       });
//     });
//   });
// });

//방법2

async function aa() {
  await echo("라면구입");
  await echo("냄비준비");
  await echo("냄비에 물담기");
  await echo("끓이기");
  await echo("라면 스프 넣기");
  await echo("식사");
}

aa();
