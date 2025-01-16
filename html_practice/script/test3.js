// call back...
// reduce는 인자가 두 개(callback함수, 초기값)
// 그런데 callback함수의 인자도 두 개(누적합계, 현재배열의값)

// let arr = [1, 2, 3, 4, 5];
// let s = arr.reduce(function (acc, num) {
//     return acc + num;
// }, 0);

// console.log(s);



let arr = [1, 2, 3];
let s = arr.reduce(function (acc, num) {
    acc.push(num*2);
    return acc;
}, []);  // 초기값을 비어있는 배열로 설정!

console.log(s);










