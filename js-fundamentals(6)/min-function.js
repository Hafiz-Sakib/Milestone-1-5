/* function findMinvalue(myValue) {
  if (myValue[0] < myValue[1] && myValue[0] < myValue[2]) {
    return myValue[0];
  } else if (myValue[1] < myValue[0] && myValue[1] < myValue[2]) {
    return myValue[1];
  } else {
    return myValue[2];
  }
}

var yourValue = [100, 600, 50];
var output = findMinvalue(yourValue);
console.log("Minimum value is = ", output); */

function findMinvalue(first, second, third) {
  if (first < second && first < third) {
    return first;
  } else if (second < first && second < third) {
    return second;
  } else {
    return third;
  }
}

var output = findMinvalue(100, 300, 400);
console.log("Minimum value is = ", output);
