//split

const anthem = "amar sonar bangla ami tomay valobashi";
const words = anthem.split(" ");
// console.log(words);

const withoutA = anthem.split("a");
// console.log(withoutA);

//slice
const smallSlice = anthem.slice(5, 11);
// console.log(smallSlice);

//substr
const anotherPart = anthem.substr(10, 7);
// console.log(anotherPart);

//substring

// const anthem = "amar sonar bangla ami tomay valobashi";
const anAnotherPart = anthem.substring(11, 17);
console.log(anAnotherPart);

//Jora Lagano (Concat)
const first = "amader";
const second = "city";
const third = "chittagong";
const whitespace = "";

// const fullString = first + " " + second + " " + third;
const fullString = first.concat(second.concat(third));
console.log(fullString);
