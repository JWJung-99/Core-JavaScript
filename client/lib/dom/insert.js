function insertBefore(node, elem) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  node.insertAdjacentHTML('beforebegin', elem);
}

function insertFirst(node, elem) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  node.insertAdjacentHTML('afterbegin', elem);
}

function insertLast(node, elem) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  node.insertAdjacentHTML('beforeend', elem);
}

function insertAfter(node, elem) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  node.insertAdjacentHTML('afterend', elem);
}