// let user = {
//   name: "John",
//   surname: "Smith",

//   getFullName() {
//     return `${this.name} ${this.surname}`;
//   },

//   setFullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   }
// };

// // 주어진 값을 사용해 set fullName이 실행됩니다.
// user.setFullName("Alice Cooper");

// alert(user.getFullName());

//객체안 프로퍼티는 객체 외부에서 수정하는것을 지양해야되기때문에
// 원하지않\는 사이드 이펙트가 발생할수있시때문에
//함수형 get,set은 비동기처리가 가능하지만 , get,set은 비동기처리가 불가능하다..
//setter 의 인자는 무조건 한개만 받을수있다.


let user = {
  name: "John",
  surname: "Smith",

  get FullName() {
    return `${this.name} ${this.surname}`;
  },

  set FullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};
