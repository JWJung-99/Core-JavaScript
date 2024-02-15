import { getNode } from "../dom/getNode.js";



export const memo = (() => {

  const cache = {
    // key: value   
  }

  return (key, callback) => {
    if (!callback) return cache[key];

    if (cache[key]) {
      console.warn(`${key} 안에 이미 캐시된 값이 존재합니다.`);
      return cache[key];
    }

    cache[key] = callback();
  }
})();


// 저장
// memo('cube', () => getNode('#cube')); // setter

// 사용
// memo('cube'); // div#cube   getter