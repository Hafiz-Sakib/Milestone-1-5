const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const slicedNumbers = numbers.slice(3, 8);
// console.log(slicedNumbers);

//splice
// const splicedNumbers = numbers.splice(2, 5);
// console.log(splicedNumbers);
// console.log(numbers);

const splicedNumbers2 = numbers.splice(3, 3, 30, 31, 32, 33, 34, 35);
console.log(splicedNumbers2);
console.log(numbers);
