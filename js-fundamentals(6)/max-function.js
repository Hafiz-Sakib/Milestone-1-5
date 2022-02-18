function findMaxvalue(first, second, third) {
  if (first > second && first > third) {
    return first;
  } else if (second > first && second > third) {
    return second;
  } else {
    return third;
  }
}

let output = findMaxvalue(100, 600, 900);
console.log("Max value is = ", output);

/* function findMaxvalue(myValue) {
  if (myValue[0] > myValue[1] && myValue[0] > myValue[2]) {
    return myValue[0];
  } else if (myValue[1] > myValue[0] && myValue[1] > myValue[2]) {
    return myValue[1];
  } else {
    return myValue[2];
  }
}

var yourValue = [100, 600, 900];
var output = findMaxvalue(yourValue);
console.log("Max value is = ", output);
 */
