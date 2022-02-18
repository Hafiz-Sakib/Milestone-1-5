function getFactorial(number) {
  let factorial = 1;
  let i = number;
  while (i >= 1) {
    factorial = factorial * i;
    i--;
  }
  return factorial;
}

var myFactorial = 10;
var output = getFactorial(myFactorial);
console.log("Your factorial is = ", output);
