//객체와 배열에 저장된 데이터 전체가 아닌 필요한부분을 사용할때 사용합니다.


//배열분배

let arr  = ["gumin", "jeong"];

let [firstName, lastName] = arr;


console.log(firstName) // gumin
console.log(lastName) // jeong


//string type for Destructing assignment

let [firstName, surname] = "gumin jeong".split(' ');
console.log(firstName) // gumin
console.log(lastName) // jeong

// '' 이용하여 필요하지않은 배열을 버릴수 있습니다.
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

            