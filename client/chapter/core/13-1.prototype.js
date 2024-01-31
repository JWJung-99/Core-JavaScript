/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우


const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  // getter
  get eat() {
    return this.stomach;
  },
  // setter
  set eat(food) {
    this.prey = food;
    this.stomach.push(food);
  }
}

const tiger = {
  pattern: '호랑이 무늬',
  hunt(target) {
    this.prey = target;

    return `${target}에게 조용히 접근합니다.`;
  },
  __proto__: animal,
}

// tiger.__proto__ = animal;


const bdsTiger = {
  color: 'white',
  name: '무궁',
  __proto__: tiger,
}

const sbrTiger = {
  color: 'orange',
  name: '선범',
  __proto__: tiger,
}




// 생성자 함수 

function Animal() {
  this.legs = 4;
  this.tail = true;
  this.stomach = [];

  this.getEat = function () {
    return this.stomach;
  };
  this.setEat = function (food) {
    this.prey = food;
    this.stomach.push(food);
  }
}

const a = new Animal();


function Tiger(name) {
  // Animal의 능력을 모두 전달
  Animal.call(this);
  this.name = name;
  this.pattern = '호랑이 무늬';
  this.hunt = function(target) {
    this.prey = target;
    return `%{target}에게 천천히 접근한다.`;
  }
}

// Tiger.prototype = a;

const 한라산호랑이 = new Tiger('한돌이');


