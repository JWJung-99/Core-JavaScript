
/* global gsap */
import { 
  tiger,
  delayP,
  getNode as $,
  changeColor,
  renderSpinner,
  renderUserCard,
  renderEmptyCard,
  clearContents
} from './lib/index.js';


const END_POINT = 'http://localhost:3000/users';

const userCardInner = $('.user-card-inner');

// 1. user 데이터를 tiger 함수를 이용해 fetch
// 2. renderUserList 함수 안에 넣기
// 3. html, css 붙여넣기
// 4. 유저 데이터를 화면에 렌더링
// 5. 함수 분리

async function renderUserList() {

  renderSpinner(userCardInner);
  

  try {

    await delayP();

    // const spinner = $('.loadingSpinner');

    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        $('.loadingSpinner').remove();
      }
    })


    // spinner.remove();

    const response = await tiger.get(END_POINT);

    const userData = response.data;

    userData.forEach(user => renderUserCard(userCardInner, user));

    changeColor('.user-card');

    gsap.from('.user-card', {
      x: 100,
      opacity: 0,
      stagger: 0.1,
    })
  }

  catch (e) {
    console.log('error');
    renderEmptyCard(userCardInner);
  }

}

renderUserList();


// 1. delete 통신 이후
// 2. 기존 유저의 목록 제거
// 3. 유저 목록 fetch 이후 다시 렌더링
function handleDelete(e) {

  const button = e.target.closest('button');
  const article = e.target.closest('article');

  if (!button) return;

  const id = article.dataset.index.slice(5);

  tiger.delete(`${END_POINT}/${id}`)
  .then(() => {
    clearContents(userCardInner);
    renderUserList();
  });

}


userCardInner.addEventListener('click', handleDelete);



const createButton = $('.create');
const cancelButton = $('.cancel');
const doneButton = $('.done');


const handleCreate = () => {
  gsap.to('.pop', {autoAlpha: 1});
}

const handleCancel = (e) => {
  // create까지 찍고 올라오게 되어서 취소 버튼이 작동하지 않는 것처럼 보임 => 이벤트 버블링 방지
  e.stopPropagation();
  gsap.to('.pop', {autoAlpha: 0});
}



// 1. name 값 가져오기
// 2. email 값 가져오기
// 3. website 값 가져오기
// 4. post 통신
//    - name, email, website를 담고 있는 새로운 객체를 생성
//    - post 통신의 body에 객체 전달
//    - 유저 목록 지우기
//    - 유저 목록 렌더링하기
//    - 팝업창 닫기

const handleDone = (e) => {
  e.preventDefault();
  e.stopPropagation();

  const name = $('#nameField').value;
  const email = $('#emailField').value;
  const website = $('#siteField').value;

  const obj = { name, email, website };

  tiger.post(END_POINT, obj)
  .then(() => {
    clearContents('#nameField');
    clearContents('#emailField');
    clearContents('#siteField');
    
    clearContents(userCardInner);
    renderUserList();
    gsap.to('.pop', {autoAlpha: 0});
  });

  
}



createButton.addEventListener('click', handleCreate);
cancelButton.addEventListener('click', handleCancel);
doneButton.addEventListener('click', handleDone);