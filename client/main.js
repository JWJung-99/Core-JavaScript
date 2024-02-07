import {getNode, getNodes, insertLast, clearContents, refError} from "./lib/index.js";

function phase1() {
  /* global clearContents */

  const first = getNode('#firstNumber');
  const second = getNode('#secondNumber');
  const clearBtn = getNode('#clear');
  const result = getNode('.result');

  function handleInput() {

    const firstValue = Number(first.value);
    const secondValue = Number(second.value);
    const total = firstValue + secondValue;

    clearContents(result);

    insertLast(result, total);
  }

  function handleClear(e) {
    e.preventDefault();
    clearContents(first);
    clearContents(second);
    result.textContent = '-';
  }

  first.addEventListener('input', handleInput);
  second.addEventListener('input', handleInput);
  clearBtn.addEventListener('click', handleClear);
}

const calculator = getNode('.calculator');
const clear = getNode('#clear');
const result = getNode('.result');
const numberInputs = [...getNodes('input:not(#clear)')];

function handleInput(e) {
  const total = numberInputs.reduce((acc, cur) => acc + Number(cur.value), 0);

  clearContents(result);
  insertLast(result, total);
}

function handleClear(e) {
  e.preventDefault();

  // numberInputs.forEach(input => clearContents(input)); 
  numberInputs.forEach(clearContents); // 콜백 함수의 인수와 함수의 매개변수가 같다면 간단하게 표기할 수 있다.
  result.textContent = '-';
}


calculator.addEventListener('input', handleInput);
clear.addEventListener('click', handleClear);
