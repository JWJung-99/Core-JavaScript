/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';
console.log(message);


// length 프로퍼티
let stringTotalLength = message.length;


// 특정 인덱스의 글자 추출
let extractCharacter = message[3];


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;


// 부분 문자열 추출
// let slice = message.slice(1);
let slice = message.slice(4, -1);

// console.log(slice);

let subString = message.substring(2, 5);
// console.log(subString);

// let subStr = message.substr;


// 문자열 포함 여부 확인
let indexOf = message.indexOf('is'); // 없으면 -1, 있으면 index
console.log(indexOf);

function checkBrowser() {
  const agent = window.navigator.userAgent.toLowerCase();
  let browserName;

  switch(true) {
    case agent.indexOf('edge') > -1 : browserName = 'MS Edge'; break;
    case agent.indexOf('chrome') > -1 && !!window.chrome : browserName = 'Chrome'; break;
    case agent.indexOf('safari') > -1 : browserName = 'Apple Safari'; break;
    case agent.indexOf('firefox') > -1 : browserName = 'FireFox'; break;

  }

  return browserName;
}


let lastIndexOf; // 뒤에서부터 탐색


let includes = message.includes('Less');
// console.log(includes);


let startsWith = message.startsWith('Less');
// console.log(startsWith);

let endsWith = message.endsWith('more.');
// console.log(endsWith);


let str = '       a     b           c                   d           ';
// console.log(str);

// 공백 잘라내기
// let trimLeft = str.trimLeft();
// let trimRight = str.trimRight();

let trim = str.trim(); // 문자열의 왼쪽, 오른쪽 공백만 제거, 문자열 내부 공백은 제거하지 않음.
// console.log(trim);

function normalText(string) {
  return string.replace(/\s*/g, '');
}
// console.log(normalText(str));

let replaceAll = str.replaceAll(' ', '');
// console.log(replaceAll);


// 텍스트 반복
let repeat = message.repeat(3);
// console.log(repeat);


// 대소문자 변환
let toLowerCase = message.toLowerCase();
let toUpperCase = message.toUpperCase();


// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}