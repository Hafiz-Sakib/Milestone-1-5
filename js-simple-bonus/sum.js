var total = 0;
for (var i = 1; i <= 5; i++) {
  /* total += i; */
  total = total + i;
}
// console.log(total);

// Decreament way

var sum = 0;
for (let i = 5; i >= 1; i--) {
  sum = sum + i;
}
// console.log(sum);

/* function way */
/* function addition(i) {
  var sum = 0;
  for (let i = 5; i >= 1; i--) {
    sum = sum + i;
  }
  return sum;
}
console.log(addition(5)); */

// decreament way function with recursive

function add(i) {
  console.log(i);
  if (i == 1) {
    return 1;
  }
  return i + add(--i);
}
console.log(add(5));
