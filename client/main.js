
import { 
  getNode,
  setStorage,
  getStorage,
  deleteStorage,
  clearContents,
} from './lib/index.js';



// 1. textField의 값을 localStorage에 저장
// 2. 페이지 로딩 시 바로 실행되는 함수 만들기 (IIFE)
// 3. 스토리지 값을 가져와 textField에 렌더링하기



const textField = getNode('#textField');
const clear = getNode('[data-name="clear"]');


const handleTextField = (e) => {
  const value = e.currentTarget.value;
  setStorage('text', value);
}


const handleClear = () => deleteStorage('text').then(clearContents(textField));


textField.addEventListener('input', handleTextField);
clear.addEventListener('click', handleClear);


// 페이지 새로고침 할 때마다 실행
// function init() {
//   console.log('init');
// }
// window.addEventListener('DOMContentLoaded', init);

// IIFE, then
// (() => {
//   getStorage('text').then((res) => {
//     textField.value = res;
//   });
// })();

// IIAFE
(async() => {
  const data = await getStorage('text');

  textField.value = data;
})();