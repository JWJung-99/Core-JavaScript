/* ---------------- */
/* Switch           */
/* ---------------- */


const value = 420;

switch (value) {
  case 10:
    console.log('10입니다');
    break;

  case 20:
    console.log('20입니다');
    break;

  default:
    console.log('난수입니다');
}














const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN       = '새벽';

let thisTime = DINNER;


/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

switch (thisTime) {
  case MORNING: console.log('뉴스 기사 글을 읽는다.'); break;
  case LUNCH: console.log('자주 가는 식당에 가서 식사를 한다.'); break;
  case DINNER: console.log('동네 한바퀴를 조깅한다.'); break;
  case NIGHT: console.log('친구에게 전화를 걸어 수다를 떤다.'); break;
  case LATE_NIGHT:
  case DAWN:
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;
}


/* switch문 → if문 변환 --------------------------------------------------- */

if (thisTime == MORNING) {
  console.log('뉴스 기사 글을 읽는다.');
} else if (thisTime == LUNCH) {
  console.log('자주 가는 식당에 가서 식사를 한다.');
} else if (thisTime == DINNER) {
  console.log('동네 한바퀴를 조깅한다.');
} else if (thisTime == NIGHT) {
  console.log('친구에게 전화를 걸어 수다를 떤다.');
} else if (thisTime == LATE_NIGHT || thisTime == DAWN) {
  console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
}

/* switch vs. if -------------------------------------------------------- */




// prompt를 통해 숫자를 입력 받는다 (0 ~ 6까지)
// switch case 문을 사용해서 요일을 찍어줄 수 있도록 구현

// const num = +prompt("0에서 6 사이의 수를 입력해주세요");

// 관심사의 분리 separation of concerns
// 함수는 하나의 기능만을 수행하게 하는 것

function getRandom(n) {
  return Math.floor(Math.random() * n);
}

function getDay(num) {
  switch (num) {
    case 0: return '일';
    case 1: return '월';
    case 2: return '화';
    case 3: return '수';
    case 4: return '목';
    case 5: return '금';
    case 6: return '토';
  }
}

// getDay(getRandom(7));


// 요일을 뽑아내는 함수 => 월~금 : 평일, 토,일 : 주말

function checkWeekend() {
  const today = getDay(getRandom(7));
  return (today.includes('토') || today.includes('일')) ? `오늘은 ${today}요일이며, 주말입니다.` : `오늘은 ${today}요일이며, 평일입니다.`;
  // if (today.includes('토') || today.includes('일')) {
  //   return `오늘은 ${today}요일이며, 주말입니다.`;
  // } else {
  //   return `오늘은 ${today}요일이며, 평일입니다.`;
  // }
}

console.log(checkWeekend());

