/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray 배열이 맞는지 확인하는 Array의 static method

const isArray = data => Array.isArray(data);


const people = [
  {
    id: 0,
    name: '가희',
    age: 25,
    job: '명탐정코난 범인',
    imageSrc: 'FAkq31',
  },
  {
    id: 1,
    name: '보미',
    age: 64,
    job: '짜요짜요 마케터',
    imageSrc: 'Gakz34',
  },
  {
    id: 2,
    name: '태희',
    age: 13,
    job: '삐돌이',
    imageSrc: 'Fkzoq81',
  },
  {
    id: 3,
    name: '원명',
    age: 81,
    job: '이도령',
    imageSrc: 'Tp9z11',
  }
]


/* 요소 순환 ---------------------------- */

// forEach

let nameArray = [];

people.forEach((item, index) => {
  nameArray.push(item.name);
});

// console.log(nameArray);


// 이벤트가 많을 때 이런 방식을 쓰면 안 된다.
// addEventListener는 부하가 크다. => 이벤트 위임 (event delegation)

const list = document.querySelectorAll('span');

list.forEach((item, index) => {
  item.addEventListener('click', function (){
    console.log(index);
  })
})


/* 원형 파괴 ----------------------------- */

const arr = [10, 100, 1000, 10000];

// push
// pop
// unshift
// shift
// reverse
const reverse = [...arr].reverse();


// splice
// const splice = arr.splice(1, 2, 'javascript', 'css');


// sort
arr.sort((a, b) => {
  return b - a;
})




/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map

const job = people.map((item) => {
  return item.job;
})

const card = people.map((item, index) => {
  
  return /* html */`
    <div class="userCard card-${index+1}">
      <div class="imageField">
        <img src="${item.imageSrc}.jpg" alt="{item.alt}" />
      </div>
      <span>이름 : ${item.name}</span>
      <span>나이 : ${item.age}</span>
      <span>직업 : ${item.job}</span>
    </div>
  `
})

// card.forEach((item) => document.body.insertAdjacentHTML('beforeend',item));


const a = people.filter(item => item.age < 30);

const find = people.find(item => item.job === '삐돌이');
const findIndex = people.findIndex(item => item.job === '삐돌이');


/* 요소 포함 여부 확인 ---------------------- */

// indexOf



// lastIndexOf



// includes




/* 요소 찾기 ------------------------------ */

// find

// findIndex

/* 요소 걸러내기 --------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce

const totalAge = people.reduce((acc, cur) => acc + cur.age, 0);

// reduceRight




/* string ←→ array 변환 ------------------ */

// split (문자를 배열로)

const str = '원명 가희 소정 설아 경민 진욱';
const stringToArray = str.split(' ');
console.log(stringToArray);


// join (배열을 문자로)

const arrayToString = stringToArray.join('/');
console.log(arrayToString);

