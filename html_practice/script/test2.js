// function completeTask() {
//     console.log('completeTask 함수 시작');
// }

// function startTask(callbackFunction) {
//     console.log('startTask 함수 시작');
//     callbackFunction();
//     console.log('startTask 함수 종료');
// }

// startTask(completeTask);



// const makeMultiplier = (n) => { // 동적 함수(효율이 좋다)
//     return (x) => x * n;
// }

// const doubleNumber = makeMultiplier(2);
// const tripleNumber = makeMultiplier(3);

// console.log(doubleNumber(5)); // 결과: 10
// console.log(tripleNumber(5)); // 결과: 15



// // forEach 순회하면서 개별 적용해라
// const numbers = [1, 2, 3, 4];

// numbers.forEach((num) => {
//     console.log(num + 1);
// });



const movies = [
    {title: "matrix", isAdult: false},
    {title: "kingsman", isAdult: true},
    {title: "zootopia", isAdult: false}
];

// let babyMovies = movies.filter(function (movie) {
//     return !movie.isAdult;
// });

// let baby = movies.filter(movie => movies.isAdult === false)
// console.log(baby);

// let baby = movies.filter(movie => movie.isAdult === false)
//                  .map(movie => movie.title);
// console.log(baby);

let baby = movies.reduce(function (acc, movie) {
    if(!movie.isAdult) { acc.push(movie.title) }
    return acc;
}, []);
console.log(baby);

