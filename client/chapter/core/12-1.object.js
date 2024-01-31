/* --------- */
/* Object    */
/* --------- */


/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */`
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let dialog = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  ["max-width"]: 800,
  height: '40vh',
  ["min-height"]: 280,
  transform: 'translate(-50%, -50%)',
};


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = {
  uuid: crypto.randomUUID(),
  name: 'Jinwook',
  email: '39busy@naver.com',
  isSignIn: false,
  permission: 'paid',
};


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// getter
console.log(authUser.uuid);
console.log(authUser.name);
console.log(authUser.email);
console.log(authUser.isSignIn);

// setter
console.log(authUser.permission = 'free');


// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

// getter
console.log(authUser['uuid']);
console.log(authUser['name']);
console.log(authUser['email']);
console.log(authUser['permission']);

// setter
console.log(authUser['isSignIn'] = true);


// 해당 객체에 키 값의 존재 여부를 확인하는 방법

Object.prototype.nickName = 'tiger';

for (let key in authUser) {

  if (Object.prototype.hasOwnProperty.call(authUser, key)) {
    console.log(key);
  }
  
}


// 객체의 key만을 모아놓은 배열
const keyList = Object.keys(authUser);

function keys(obj) {
  let result = [];

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result.push(key);
    }
  }

  return result;
}

console.log(keys(authUser));


// 객체의 value만을 모아놓은 배열
const valueList = Object.values(authUser);

function values(obj) {
  let result = [];

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result.push(obj[key]);
    }
  }

  return result;
}

console.log(values(authUser));

// 객체의 key와 value의 쌍을 배열로
const keyValue = Object.entries(authUser);

function entries(obj) {
  let result = [];

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result.push([key, obj[key]]);
    }
  }

  return result;
}

console.log(entries(authUser));




// 계산된 프로퍼티 (computed property)
let calculateProperty = 'tel'; // phone | tel

function createUser(name, age, phone) {
  return {
    name,
    age,
    [calculateProperty]: phone,
  }
}


// 프로퍼티 포함 여부 확인


// 프로퍼티 나열


// 프로퍼티 제거(remove 비워두기) or 삭제(delete 없애버리기)


function isObject(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'object';
}


// removeProperty(authUser, 'uuid');
let removeProperty = (obj, key) => {

  // if (typeof obj === 'object') {
  //   obj[key] = null;
  // }

  if (!isObject(obj)) return;

  obj[key] = null;

}

removeProperty(authUser, 'uuid');
console.log(authUser.uuid);



// deleteProperty(authUser, 'uuid');
let deleteProperty = (obj, key) => {

  if (!isObject(obj)) return false;
    
  delete obj[key];
  return true;
}

deleteProperty(authUser, 'uuid');
console.log(authUser);



// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {
  // name: name,
  name,
  // email: email,
  email,
  // authorization: authorization,
  authorization,
  // isLogin: isLogin,
  isLogin,
}


// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}




/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

// const [a, b, c, d] = [10, 100, 1000, 10000];
// const [a, ...rest] = [10, 100, 1000, 10000];
const [a, , ...rest] = [10, 100, 1000, 10000];







/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

                        // 객체를 받을 때 바로 구조 분해 할당
function createUserList({name:n, age, address, phone, nickName = 'tiger'}){
  // const {name:n,age,address,phone,nickName = 'tiger'} = options;
  
  const name = '선범'

  return {
    name:n,
    age,
    address,
    phone,
    nickName
  }
}

// createUserList('seonbeom',30,'서울시 중랑구','010-2222-222')


createUserList(
  {
    name:'tiger',
    age:35,
    address:'서울시 중랑구 면목동',
    phone:'010-2222-2222'
  }
)


