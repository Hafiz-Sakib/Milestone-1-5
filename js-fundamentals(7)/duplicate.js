const names = [
  "Abul",
  "Babul",
  "Cabul",
  "Dabul",
  "Ebul",
  "Babul",
  "Cabul",
  "Fibul",
  "Gabul",
  "Ebul",
  "habul",
  "Fibul",
  "Gabul",
];
function removeDuplicate(names) {
  const unique = [];
  for (const element of names) {
    console.log(element);
    if (unique.indexOf(element) == -1) {
      unique.push(element);
    }
  }
  return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);
