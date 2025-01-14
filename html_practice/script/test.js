// console.log('hi');

// window.open();

// let fruits = ['사과','바나나','딸기'];

// console.log(fruits);
// console.log(fruits.length);

// fruits.reverse();
// console.log(fruits.includes('딸기'));

// person은 3개의 속성을 가진다.
// let person = {
//     name: '홍길동',
//     age: 30,
//     job: '개발자',
//   };
 
// let person.age = 40;

// console.log(person.age)


// let a = {
//     "name": "홍길동", // 문자열(String)
//     "age": 30, // 숫자(Number)
//     "isStudent": false, // 불리언(Boolean)
//     "courses": ["수학", "영어", "과학"], // 배열(Array)
//     "address": {
//         "city": "서울",
//         "zipcode": "10001"
//     }, // 객체(Object)
//     "graduationYear": null // null
// }

// console.log(a.address.city)


// a = 3;
// var b = 4;
// console.log(a);
// console.log(b);



// let a = [17, 43, 25]

// for (let i = 0; i < a.length; i++) {
//     console.log(`현재 숫자: ${i}`);
// }


let info = [
    {
        "name": "김철수",
        "age": 30,
        "city": "서울"
    },
    {
        "name": "박영희",
        "age": 25,
        "city": "부산"
    },
    {
        "name": "이민수",
        "age": 35,
        "city": "대구"
    },
    {
        "name": "최은영",
        "age": 28,
        "city": "인천"
    }
];

let names = [];

// for (let i of info) {
//     console.log(i);
// }

// for(let n of info) {
//     // console.log(info[n].name)
//     // names[n] = info[n].name;
//     names.push(n.name);
// }

// console.log(names);


//////////////////////
//    함수 표기법    //
//////////////////////

// // 방식 1
// function add(n1, n2) {
//     return n1 + n2;
// }

// // 방식 2
// let sub = function(n3, n4) {  // 쇼킹...
//     return n3 - n4;
// }
// console.log(sub(7, 5))

// // 방식 3 -> 요즘 많이 쓰는 방식
// let sub2 = (n5, n6) => n5 - n6;  // 무기명 함수를 특정 변수에 담겠다. + 다 축약해 버림
// console.log(sub2(5, 10));

// // 방식 3-2
// let sub3 = n5 => n5 + 1;  // 매개변수가 하나면... 괄호도 생략
// console.log(sub3(7));


// let cube = x => x ** 3;
// console.log(cube(2));



// // 메서드 1
// const person = {
//     name: '철수',
//     greet: function () {    // 함수를 특정 키 값의 밸류로 생성
//         console.log('안녕하세요. 반갑습니다.');
//     },
// };
// person.greet();


// // 메서드 2
// const person = {
//     name: "철수",
//     greet: () => console.log(`안녕하세요. 반갑습니다.`)
// };
// person.greet();


// // 메서드 3
// const person = {
//     name: "영희",
//     greet2() {
//         console.log("안녕하세요?")
//     }
// };
// person.greet2();



// // 구버전 코드 ㅎㅎ
// var books = ['python', 'javascript'];
// var games = ['maple', 'cart'];

// var myHobby = {
//     books: books,
//     games: games
// };
// console.log(myHobby);

// // 요즘 코드
// let books = ['python', 'javascript'];
// let games = ['maple', 'cart'];

// let myHobby = {
//     books,
//     games
// };
// console.log(myHobby);


