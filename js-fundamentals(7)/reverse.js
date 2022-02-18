const greetings = "Hello, How Are You?";
function reverseText(text) {
  let reverse = "";
  for (const letter of greetings) {
    reverse = letter + reverse;
  }
  return reverse;
}

const reversed = reverseText(greetings);
console.log(reversed);
