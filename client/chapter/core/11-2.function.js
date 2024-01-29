/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function() {

  // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사 배열이라고 부른다.
  // arguments로 접근 시 함수 선언부에서 매개변수는 아예 없어도 상관 없다.
  console.log(arguments); // 순환 또는 반복시켜서 값을 다 더하기

  let total = 0;

  // for (let argument of arguments) {
  //   total += argument;
  // }

  // Array.prototype.forEach.call(arguments, function(item) {
  //   total += item;
  // })

  // arguments의 부모를 배열로 바꿔치기 한다면?
  // arguments.__proto__ = Array.prototype;

  // 함수의 인수로 함수의 본문을 전달 => 콜백!
  // arguments.forEach((item) => {
  //   total += item;
  // })

  // arguments 객체(유사배열) => 진짜 배열(Array)로!
  // const arr = Array.from(arguments);
  const arr = [...arguments]; // spread syntax

  // arr.forEach(item => total += item);

  total = arr.reduce((acc, cur) => acc + cur);

  return total;
};

const result = calculateTotal(10, 20, 30, 40, 50, 60, 70, 80);

console.log(result);

// const data = [
//   {
//     name:'tiger',
//     age:30,
//   },
//   {
//     name:'kindtiger',
//     age:20,
//   },
//   {
//     name:'seonbeom',
//     age:41,
//   }
// ]



// const tag = data.map((d)=>{
//   return `<li> 이름 : ${d.name}</li>`
// })


// tag.forEach((i)=>{
//   document.body.insertAdjacentHTML('beforeend',i)
// })


// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {

};


// 유명(이름을 가진) 함수 (표현)식, 하지만 실제 함수를 실행할 때는 namedFunctionExpression()을 이용해야 한다.
let namedFunctionExpression = function hello() {
  
};


// 콜백 함수 (표현)식
let cb = function (state, success, fail) {
  if (state) {
    return success();
  } else {
    return fail();
  }
};

const result2 = cb(
  false, 
  () => '성공', 
  () => '실패'
);

console.log(result2);

function movePage(url,success,fail){

  // if(url.includes('www')){
  //   success(url)
  // }else{
  //   fail()
  // }
  
  url.includes('www') ? success(url) : fail()
}


// movePage(
//   'https://www.naver.com',
//   url => console.log(`3초 뒤 해당 url인 ${url}로 넘어갑니다.`),
//   ()=> console.error('잘못된 url 정보를 입력하셨습니다.')
// )


movePage(
  'https://www.naver.com',
  function (url){
    console.log(`3초 뒤 해당 url인 ${url}로 넘어갑니다.`);
    
    setTimeout(() => {
      // window.location.href = url
    }, 3000);
  },
  function (){
    console.error('잘못된 url 정보를 입력하셨습니다.');
  }
);


// 함수 선언문 vs. 함수 (표현)식


// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression

// 캡슐화 (encapsulation)
// 함수가 선언됨과 동시에 실행되는 것을 말합니다.


// rename 가능 => closure
// import, export => module 프로그래밍

// let IIFE;

const MASTER = (function(){
  let uuid = 'adkjfklsajfk1jkjkjsd';

  return {
    getKey() {
      return uuid;
    },
    setKey(value) {
      uuid = value;
    }
  }

})();

console.log(MASTER.getKey());
console.log(MASTER.setKey('dkfjdkfjdk'));
console.log(MASTER.getKey());


// const css = (function(){
  
//   function getStyle(node,prop){

//     if(typeof node === 'string'){
//       node = document.querySelector(node)
//     }
//     if(typeof prop !== 'string'){
//       throw new Error('getStyle 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
//     }
//     return getComputedStyle(node)[prop]
//   }
 
//   function setStyle(node,prop,value){
  
//     if(typeof node === 'string') node = document.querySelector(node);
  
//     if(typeof prop !== 'string'){
//       throw new Error('setStyle 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
//     }
  
//     if(!value) throw new Error('setStyle 함수의 세 번째 인수는 필수 입력값 입니다.');
  
//     node.style[prop] = value
//   }
  
//   function css(node,prop,value){

//     return (!value) ? getStyle(node,prop) : setStyle(node,prop,value)
    
    
//   }
  

//   return css;

// })()