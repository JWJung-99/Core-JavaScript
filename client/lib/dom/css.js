
// css

function getCss(node, cssProp) {
  if (typeof node === 'string') node = getNode(node);
  if (!(cssProp in document.body.style)) throw new SyntaxError('getCss 함수의 두 번째 인수가 유효한 css 속성이 아닙니다.');

  return getComputedStyle(node)[cssProp];
}

function setCss(node, cssProp, value) {
  if (typeof node === 'string') node = getNode(node);
  if (!(cssProp in document.body.style)) throw new SyntaxError('setCss 함수의 두 번째 인수가 유효한 css 속성이 아닙니다.');
  if (!value) throw new Error('setCss 함수의 세 번째 인수는 필수 입력값입니다.');

  node.style[cssProp] = value;
}

const css = (node, cssProp, value) => !value ? getCss(node, cssProp) : setCss(node, cssProp, value);




// class

function addClass(node, value) {
  if (typeof node === 'string') node = getNode(node);
  if (typeof value !== 'string') throw new Error('addClass 함수의 두 번째 인수는 문자형이어야 합니다.');

  for (let item of node.classList) {
    if (value === item) {
      throw new Error(`해당 노드에 이미 ${value} 클래스가 존재합니다!`);
    }
  }
    
  node.classList.add(value);
}

function removeClass(node, value) {
  if (typeof node === 'string') node = getNode(node);

  if (!value) {
    node.className = '';
    return;
  }

  if (typeof value !== 'string') throw new Error('removeClass 함수의 두 번째 인수는 문자형이어야 합니다.');

  let isInClass = false;
  for (let item of node.classList) {
    if (value === item) {
      isInClass = true;
    }
  }

  if (!isInClass) throw new Error(`해당 노드에 ${value} 클래스가 존재하지 않습니다!`);

  node.classList.remove(value);
}

function toggleClass(node,value){
  if(typeof node === 'string') node = getNode(node)
  if(typeof value !== 'string') throw new TypeError('toggleClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
  return node.classList.toggle(value)
}