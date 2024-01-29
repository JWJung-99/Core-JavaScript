/* ---------------- */
/* Condition        */
/* ---------------- */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

function watchingMovie() {
  // 영화 봤니?
  let didWatchMovie = confirm("영화 봤니?");
  console.log(didWatchMovie);

  // 영화 볼거니?

  if (!didWatchMovie) {
    
    let goingToWatchMovie = confirm('영화 볼거야?');

    if (goingToWatchMovie) {
      let withWhom = prompt('누구랑 볼거니?');

      if (withWhom === '너') {
        console.log('어머...!');
      } else {
        console.log('내가 아니네,,,,');
      }

    } else {
      console.log('꼭 봐 재밌어!');
    }

  } else {
    console.log('어 나 봤어,,,');
  }
}


// if 문(statement)

let didWatchMovie = 'no';
let goingToWatchMovie = 'no';

// 삼항식

let message = didWatchMovie.includes('yes') ? "오케이,,," : goingToWatchMovie.includes('yes') ? '너무 좋다' : '나도 별로야';
console.log(message);


// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식