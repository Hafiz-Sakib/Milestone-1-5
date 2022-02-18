const numbers = [12, 23, 65, 52, 65, 78, 56];

// let sum = 0;
// for (i = 0; i < numbers.length; i++) {
//   const element = numbers[i];
//   sum = sum + element;
// }
// console.log("Your Total is", sum);

function arrayTotal(values) {
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
  }
  return sum;
}

let sum = arrayTotal(numbers);
console.log(sum);
