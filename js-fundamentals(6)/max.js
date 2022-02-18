const business = 450;
const minister = 350;
const army = 600;
// Duo

/* if (business > minister) {
  console.log("Business is bigger");
} else {
  console.log("Minister is bigger ");
} */

// trio

/* if (business > minister && business > army) {
  console.log("Business is Bigger");
} else if (minister > business && minister > army) {
  console.log("Minister is Bigger ");
} else {
  console.log("Army is Bigegr ");
} */

// Other Way
const largestValue = Math.max(business, minister, army);
console.log("Largest Value is = ", largestValue);
