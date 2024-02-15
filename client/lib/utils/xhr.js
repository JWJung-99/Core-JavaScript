const END_POINT = 'https://jsonplaceholder.typicode.com/users';

export function xhr({
  method = 'GET',
  url = '',
  onSuccess = null,
  onFail = null,
  body = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
}) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  // readystate가 변화할 때마다 호출되는 메서드
  xhr.addEventListener('readystatechange', () => {
    const { readyState, status, response } = xhr;

    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        console.log('통신 성공');
        onSuccess(JSON.parse(response));
      } else {
        console.log('통신 실패');
        onFail({ message: '에러가 발생했습니다!' });
      }
    }
  });

  xhr.send(JSON.stringify(body));

  // POST 요청 시 body를 문자화하여 보내기
  // xhr.send(JSON.stringify({"name": "tiger"}));
}

// xhr({
//   url: END_POINT,
//   onSuccess(data) {
//     console.log(data);
//   },
//   onFail() {},
// });




// JavaScript의 함수는 객체다.

xhr.get = (url, onSuccess, onFail) => {
  xhr({
    url,
    onSuccess,
    onFail,
  });
};

xhr.post = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'POST',
    url,
    onSuccess,
    onFail,
    body,
  });
};

xhr.put = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'PUT',
    url,
    onSuccess,
    onFail,
    body,
  });
};

xhr.delete = (url, onSuccess, onFail) => {
  xhr({
    method: 'DELETE',
    url,
    onSuccess,
    onFail,
  });
};




// xhr promise

function xhrPromise(method, url, body) {

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);



  xhr.send(JSON.stringify(body));


  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 400) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject({message: '알 수 없는 오류가 발생했습니다.'});
          // error
        }
      }
    })
  })
}


xhrPromise('GET', END_POINT)
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err.message);
})