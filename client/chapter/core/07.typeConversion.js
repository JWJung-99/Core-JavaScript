/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number

const YEAR = 2024;
console.log(String(YEAR)); // 명시적 형 변환
console.log(YEAR + ''); // 암시적 형 변환

// undefined, null

let days = null;
let weekend;

console.log(days + '');
console.log(weekend + '');

// boolean

let isClicked = false;
console.log(isClicked + '');


/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined

let friend;
console.log(Number(friend));


// null

let money = null;
console.log(Number(money));

// boolean

let cutie = true;
console.log(Number(cutie));

// string

let num = '250';
console.log(Number(num)); // 명시적 형 변환
console.log(typeof (num * 1)); // 암시적 형 변환

// numeric string

const width = '105.3px';

console.log(Number(width));
console.log(parseInt(width));
console.log(parseFloat(width));


/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 

console.log(Boolean(friend));
console.log(Boolean(money));
console.log(Boolean(''));
console.log(Boolean(' '));





const value = prompt('값을 입력해주세요');
console.log(Number(value) + 50);
console.log((value * 1) + 50);