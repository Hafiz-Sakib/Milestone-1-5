function megaFriend(friends) {
  if (Array.isArray(friends) == false) {
    return "Please Provide an Array to see the output!";
  }
  let mega = friends[0];
  for (friend of friends) {
    if (friend.length > mega.length) {
      mega = friend;
    }
  }
  return mega;
}
const friends = ["adu", "kodu", "kuddus", "sabbir", "hablu", "saakib"];
// const bigBudddy = megaFriend(31564);
const bigBudddy = megaFriend(friends);
// console.log(bigBudddy);

//check a name in list

//with index Of

//  if (friends.indexOf("adu") > -1) {
//   console.log("exists");
// } else {
//   console.log("naiiii");
// }

//With Includes

const search = "kuddus";
if (friends.includes(search)) {
  console.log("kuddus is present Sir!");
} else {
  console.log("kuddus toh nai sir!");
}

//concat
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = first.concat(second);
console.log(combined);
