/* --------------------- */
/* Event Handling        */
/* --------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

const first = getNode('.first');

// 1. HTML 속성 : onclick="handler()" (X)

// 2. DOM 프로퍼티 : element.onclick = handler

function handler() {
  console.log('click 이벤트 발생!');
}

// first.onclick = handler;
bindEvent('.first', 'click', handler);

const remove = bindEvent('.first', 'click', handler);
getNode('.deleteEvent').addEventListener('click', remove);


// 3. 메서드 : element.addEventListener(event, handler[, phase])





/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener


const ground = getNode('.ground');
const ball = getNode('#ball');


// function handleBall(e) {

//   const {offsetX: x, offsetY: y} = e;

//   console.log(x, y);
// }

function handleBall({offsetX: x, offsetY: y}) {

  console.log(ball.offsetWidth / 2, ball.offsetHeight / 2);

  ball.style.transform = `translate(${x - (ball.offsetWidth / 2)}px, ${y - (ball.offsetHeight / 2)}px)`
}


// ground.addEventListener('click', handleBall);



function debounce(callback, limit = 1000) {
  let timeout;

  return function (e) {
    // 여러 번 호출 시 1회만 실행
    clearTimeout(timeout);
    // timer number
    timeout = setTimeout(() => {
      // ground를 callback 함수의 this로 설정 -> ground에서 발생하는 이벤트를 받아 옴
      callback.call(this, e);
    }, limit);
  }
}


function handle(e) {
  console.log(this, e);
}
                                              // ground의 이벤트
// ground.addEventListener('mousemove', debounce(handle));



function throttle(callback, limit = 100) {
  let waiting = false;

  return function (...args) {
    if (!waiting) {
      callback.apply(this, args);
      waiting = true;
  
  
      setTimeout(() => {
        waiting = false;
      }, limit)
    }
  }
}

// ground.addEventListener('mousemove', throttle(handleEmotion, 1000));









function handleEmotion({offsetX: x, offsetY: y}) {
  console.log(x, y);

  // ball.style.transform = `translate(${x - (ball.offsetWidth / 2)}px, ${y - (ball.offsetHeight / 2)}px)`

  let template = `
  <div class="emotion" style="top: ${y}px; left: ${x}px">🤬</div>
  `

  insertLast(ground, template);
}



// ground.addEventListener('mousemove', handleEmotion);


// throttle, debounce

// 이벤트를 내가 원하는 시점에 1번만 실행 | 원하는 시간에 맞춰 실행