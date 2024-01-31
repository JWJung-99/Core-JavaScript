/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.


// constructor method는 생성할 때 최초 1회만 실행된다.
class Animal {

  constructor (name) {
    this.name = name;
    this.stomach = [];
    this.legs = 4;
    this.tail = true;
  }

  get eat() {
    return this.stomach;
  }

  set eat(food) {
    this.prey = food;
    this.stomach.push(food);
  }

}

// const a = new Animal('호돌이');

class Tiger extends Animal {
  
  constructor (name) {
    super(name);
    this.pattern = '호랑이 무늬';
  }

  static bark() {
    return '어흥!';
  }

  hunt(target) {
    return `${target}에게 조용히 접근한다.`;
  }
}