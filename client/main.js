

import {
  getNode, 
  getNodes, 
  endScroll, 
  insertLast, 
  clearContents,
  diceAnimation,
  memo,
} from './lib/index.js';

const [rollingButton, recordButton, resetButton] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper');

const handleRollingDice = (() => {

  let isClicked = false;
  let stopAnimation;

  return function (){
    if (!isClicked) {
      stopAnimation = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
      resetButton.disabled = true;
    } else {
      clearInterval(stopAnimation);
      recordButton.disabled = false;
      resetButton.disabled = false;
    }
  
    isClicked = !isClicked;
  }

})()



// 미니 과제 => 만들어주는 함수, 초기화 버튼 클릭시 모든 데이터 날리기

let count = 0;
let total = 0;

function createItem(value) {
  return `
    <tr>
      <td>${++count}</td>
      <td>${value}</td>
      <td>${total += value}</td>
    </tr>
  `
}



function renderRecordItem(){
  const diceValue = +memo('cube').dataset.dice;

  
  insertLast('.recordList tbody', createItem(diceValue));

  endScroll(recordListWrapper);
}

function handleRecord() {
  recordListWrapper.hidden = false;
  renderRecordItem();
}

function handleReset() {
  recordListWrapper.hidden = true;

  clearContents('.recordList tbody');

  count = 0;
  total = 0;

  recordButton.disabled = true;
  resetButton.disabled = true;
}

rollingButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);

