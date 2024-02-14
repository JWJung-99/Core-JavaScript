
import { 
  getNode, 
  getRandom, 
  clearContents, 
  insertLast, 
  isNumericString, 
  showAlert, 
  shake, 
  copy } from './lib/index.js';
import jujeobData from './data/data.js';

// [phase - 1]
// 1. 주접 떨기 버튼을 클릭할 수 있는 핸들러 연결하기
// 2. input 값을 콘솔에 가져오기
// 3. jujeob 데이터를 가져오기
// 4. jujeobData 함수에 input.value 넣기
// 5. 랜덤한 주접 한 개를 pick
// 6. pick을 result에 뿌리기


// [phase - 2]
// 1. 아무 값도 입력 받지 못했을 때 예외처리 (alert)
// 2. 공백 문자를 받았을 때 예외처리 (alert)
// 3. 숫자형 문자를 받았을 때 예외처리 (alert)


const submit = getNode('#submit');
const nameField = getNode('#nameField');
const result = getNode('.result');

/* global gsap */

function handleJujeob(e) {
  e.preventDefault();
  
  const name = nameField.value;
  const list = jujeobData(name);
  const pick = list[getRandom(list.length)];

  if (!name || name.replace(/\s*/g, '') === '') {
    // alert-error에게 is-active 클래스 추가
    // 2초 뒤에 alert-error에게 is-active 클래스 제거
    showAlert('.alert-error', '이름을 입력해 주세요.');
    shake.restart();

    return;
  }

  if (!isNumericString(name)) {
    showAlert('.alert-error', '정확한 이름을 입력해 주세요.');
    shake.restart();

    return;
  }

  // result.textContent = '';
  clearContents('.result');

  // result.insertAdjacentHTML('beforeend', pick);
  insertLast('.result', pick);
}

function handleCopy() {
  const text = this.textContent;

  if (!nameField.value) return;

  copy(text).then(() => {
    showAlert('.alert-success', '클립보드 복사 완료!');
  })
}

submit.addEventListener('click', handleJujeob);
result.addEventListener('click', handleCopy);