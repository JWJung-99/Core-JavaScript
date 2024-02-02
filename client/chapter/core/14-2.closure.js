


function earth() {

  let water = true;

  let apple = {
    founder:'Steve Jobs',
    ceo:'Tim Cook',
    product: ['iphone','macbook','macStudio','appleWatch']
  }


  return function (value) {
    water = value;
    return water;
  };

}




const UFO = earth();

UFO(0);




/* 어디에 쓰일까? */

const first = document.querySelector('.first');

// 전역이 오염됨
// let isClicked = false;

// function handleClick() {
//   console.log('clicked');

//   if (!isClicked) {
//     document.body.style.background = 'orange';
//   } else {
//     document.body.style.background = 'white';
//   }

//   isClicked = !isClicked;
// }


// 함수가 알아서 실행되도록 즉시 실행 함수를 이용한다.
const handleClick = (() => {
  let isClicked = false;

  return () => {
    if (!isClicked) {
      document.body.style.background = 'orange';
    } else {
      document.body.style.background = 'white';
    }
  
    isClicked = !isClicked;
  }
})()


// handleClick을 실행하면 함수 본문을 return 하고, 이를 click 시 실행하는 구조
// first.addEventListener('click', handleClick());

// 보통 addEventListener에서는 실행구문()을 넣지 않는 것이 일반적이다.
// 즉시 실행 함수 이용 시
first.addEventListener('click', handleClick);




function useState(initValue) {

  let value = initValue;

  function read() {
    return value;
  }

  function write(newValue) {
    value = newValue;
  }

  return [read, write];

}

const [state, setState] = useState(111);

