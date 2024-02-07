

// querySelector

const idField = document.querySelector('#idField');
const submit = document.querySelector('.btn');



// eventListener, classList

// 해당 문자가 기대하는 문자와 일치하는지 여부를 확인
function handleCheckId() {
  // .value를 이용하면 해당 값을 가져올 수 있음
  if (this.value === 'hello') {
    console.log('success');
    // 해당 클래스 제거
    idField.classList.remove('is-active');
  } else {
    console.log('error');
    // 원하는 클래스 추가
    idField.classList.add('is-active')
  }
}

// preventDefault button submit의 기본 동작 차단

function handleSubmit(e) {
  
  e.preventDefault();

  console.log('제출');
  console.log(e);

}


// input에 값(타이핑)이 입력될 때마다 함수를 실행
idField.addEventListener('input', handleCheckId);

submit.addEventListener('click', handleSubmit);





