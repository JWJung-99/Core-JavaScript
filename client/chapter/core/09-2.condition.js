/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log(AandB);

// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB);

// 부정 연산자
let reverseValue;


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsTruthy:true};


let userName = prompt("아이디를 입력해주세요");

// 상황
// 1. 사용자가 취소 버튼을 누른 경우 => null
// 2. 사용자가 ESC 버튼을 누른 경우 => null
// 3. 사용자가 아무것도 입력하지 않았을 경우 => ''
// 4. 사용자가 띄어쓰기(' ')만 입력한 경우 => ' '


if (userName?.toLowerCase() === "admin") {
  let password = prompt("비밀번호를 입력해주세요");

  if (password === "TheMaster") {
    console.log("환영합니다!");
  } else {
    console.log("인증에 실패했습니다.");
  }

} else if (userName === null || userName.replace(/\s*/g, '') === '') {
  console.log("취소되었습니다.");

} else {
  alert("올바른 사용자가 아닙니다.");
}