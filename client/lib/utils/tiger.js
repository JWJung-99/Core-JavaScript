


const END_POINT = 'https://jsonplaceholder.typicode.com/users';


const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}


export const tiger = async (options) => {

  const {url, ...restOptions} = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers
    }};

  const response = await fetch(url, restOptions); // Promise<response> 객체

  // status 200 ~ 399
  if (response.ok) {
                            // 메서드가 parse를 해서 결과를 반환해 줌 (response 객체의 능력)
    // const data = await response.json();
    response.data = await response.json();

    return response;
  }

}

// async 함수는 무조건 Promise 객체를 반환하므로,,,
// const result = await tiger({
//   url: END_POINT
// });

// console.log(result.data);


tiger.get = (url, options) => {
  return tiger({
    url,
    ...options
  })
}

tiger.post = (url, body, options) => {
  return tiger({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options
  })
}

tiger.put = (url, body, options) => {
  return tiger({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options
  })
}

tiger.delete = (url, options) => {
  return tiger({
    method: 'DELETE',
    url,
    ...options
  })
}


// const data = await tiger.get(END_POINT);
// console.log(data);
// const data = await tiger.post(END_POINT, {name: 'tiger'});

