

export function copy(text) {
  // Promise를 return
  return navigator.clipboard.writeText(text);
}