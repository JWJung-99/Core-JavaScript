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