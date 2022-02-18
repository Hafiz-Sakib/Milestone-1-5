const numbers = [9, 7, 8, 3, 1, 2, 6, 4, 5];
const sortedNumbers = numbers.sort();
console.log(sortedNumbers);

const friends = [
  "razzak",
  "shabana",
  "alomgir",
  "kabila",
  "anwara",
  "bapparaz",
  "omor sani",
  "purnima",
];

//sorting By Name
const sortedFriends = friends.sort();
// console.log(sortedFriends);

//reversed friends
// const reversedFriends = friends.reverse();
// console.log(reversedFriends);

//reversedSorted

const reversedSortedFriends = friends.sort().reverse();
// console.log(reversedSortedFriends);

//sorting Numbers Fun

const bigNumbers = [44, 55, 2, 3, 6, 98, 88, 76, 10, 78, 96];
const sortedBigNumbers = bigNumbers.sort(function (a, b) {
  return a - b; // Ascending
});
// bigNumbers.sort(function (a, b) {
//   return b - a; // Descending
// });
console.log(sortedBigNumbers);
