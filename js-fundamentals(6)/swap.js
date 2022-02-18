var first = 5;
var second = 7;
console.log(first, second);

// First method to swap/exchgane variable positions

// var temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// Second Method(destructuring)

[first, second] = [second, first];
console.log(first, second);
