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