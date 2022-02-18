function largestValue(numbers) {
  let largest = numbers[0];
  for (i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}

const ages = [12, 32, 56, 13, 14, 25, 21, 41];
let oldest = largestValue(ages);
console.log("Oldest is =", oldest);
