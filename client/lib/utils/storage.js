
import { isString } from "./typeOf.js";


// setStorage()

const {localStorage: storage} = window;

export function setStorage(key, value) {

  return new Promise((resolve, reject) => {

    if (isString(key)) {
      storage.setItem(key, JSON.stringify(value));
      resolve();
    } else {
      reject({message : 'key는 문자 타입이어야 합니다!'});
    }

    
  })
}

export function getStorage(key) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      resolve(JSON.parse(storage.getItem(key)));
    } else {
      reject({message : 'key는 문자 타입이어야 합니다!'});
    }
  })
}



export function deleteStorage(key) {
  return new Promise((resolve, reject) => {
    !key ? storage.clear() : storage.removeItem(key);
    resolve();
  })
}



// await setStorage('user', {name: 'tiger'});

// const data = await getStorage('user');
// console.log(data);

// deleteStorage('user');
// deleteStorage();











// localStorage.setItem('user', JSON.stringify({name: 'tiger', age: 15}));

// console.log(JSON.parse(storage.getItem('user')));

