/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
                    // rest parameter     cf) spread syntax
// let calcAllMoney = (...args) => {

//   let total = 0;
  
//   // for
//   // for (let i = 0; i < args.length; i++) {
//   //   total += args[i];
//   // }

//   // for ... of
//   // for (let arg of args) {
//   //   total += arg;
//   // }

//   // forEach
//   // args.forEach(arg => total += arg);

//   // reduce : 값을 반환
//   total = args.reduce((acc, cur) => acc + cur, 0);

//   return total;
// };

let calcAllMoney = (...args) => args.reduce((acc, cur) => acc + cur, 0);

const result = calcAllMoney(10, 30, 40, 50);
console.log(result);

const createUser = (name, age) => ({ name: name, age: age });

createUser('정진욱', 25);


// 화살표 함수와 this

// 자바스크립트 함수는 양면의 얼굴 (일반함수 / 생성자 함수)

const user = {
  total: 0,
  name: '박가희',
  age: 9,
  address: '서울시 중랑구 면목동',
  grades: [80, 40, 15],
  // totalGrades: () => {
  //   console.log(this);
  // }
  totalGrades() {
    // 내 메서드가 내 값에 접근
    function sayHi() {
      console.log(this);
    }

    sayHi();
  }
}


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount) => {
  let result = 1;

  for (let i = 0; i < powerCount; i++) {
    result *= numeric;
  }

  return result;
};

const powResult = pow(2, 10);
console.log(powResult);



let powExpression = (numeric, powCount) => Array(powCount).fill(null).reduce(acc => acc * numeric, 1);

console.log(powExpression(2, 10));



// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) => {
  let result = '';
  for (let i = 0; i < repeatCount; i++) { 
    result += text;
  }

  return result;
};

console.log(repeat('hello', 3)); //'hellohellohello'


let repeatExpression = (text, repeatCount) => Array(repeatCount).fill(null).reduce(acc => acc += text, '');

console.log(repeatExpression('범쌤🐯', 5));