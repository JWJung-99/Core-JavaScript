/* ---------------- */
/* For In Loop      */
/* ---------------- */



const js = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
  hasOwnProperty() {

  }
};


// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?



// 조상인 Object의 key까지 반영
// console.log(key in js);

// 자바스크립트는 내장 객체인 hasOwnProperty를 보호하지 않습니다.

const key = 'creator';
// console.log(js.hasOwnProperty(key));
console.log(Object.prototype.hasOwnProperty.call(js,key));

// console.log(js.__proto__.hasOwnProperty(key));

// 생성된 객체의 method는 불안함 => 진짜 객체의 능력을 빌려씀(call).
// console.log(Object.prototype.hasOwnProperty.call(js, key));
// console.log(({}).hasOwnProperty.call(js, key));


// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?


// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?


// 반복문


// for (let key in js) {

//   if (Object.prototype.hasOwnProperty.call(js, key)) {
//     console.log(key);
//   }

// }


// 배열도 for ... in 을 쓸 수 있을까

// const tens = [10, 100, 1000, 10000];

// for (let key in tens) {
//   console.log(key);
// }