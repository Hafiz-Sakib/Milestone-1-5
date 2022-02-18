// let myArray = [1, 3, 4, 5, 6, 7, 8, 9, 10];

// for (array of myArray) {
//   console.log(array);
// }

// for (let i = myArray.length - 1; i >= 0; i--) {
//   console.log(myArray[i]);
// }

let names = ["Abul", "Babul", "Cabul", "Dabul"];

// show elements of the name array
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// function for change fourth index of the array
function changeFourthIndex(array) {
  array[3] = "Mokbul";
}
changeFourthIndex(names);
console.log(names);
