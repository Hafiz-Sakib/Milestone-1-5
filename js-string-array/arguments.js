function addNumbers(num1, num2) {
  let sum = 0;
  for (const num of arguments) {
    sum = sum + num;
  }
  //   const sum = num1 + num2;
  return sum;
}

const math = addNumbers(10, 10, 20, 20, 20, 30);
// console.log(math);

//With String
function getFullName(firstname, lastname) {
  let fullName = "";
  for (const name of arguments) {
    fullName = fullName + name + " ";
  }
  //   const fullName = firstname + " " + lastname;
  return fullName;
}
const name = getFullName("omuk", "songket", "bin", "hanif", "songket");
console.log(name);
