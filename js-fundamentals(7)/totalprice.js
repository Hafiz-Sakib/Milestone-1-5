const products = [
  {
    name: "laptop",
    price: 43000,
  },
  {
    name: "shirt",
    price: 3000,
  },
  {
    name: "watch",
    price: 430,
  },
  {
    name: "Shoe",
    price: 2000,
  },
  {
    name: "phone",
    price: 4300,
  },
  {
    name: "Bagpack",
    price: 430,
  },
];
/* 
let totalPrice = 0;
for (product of products) {
  totalPrice = totalPrice + product.price;
}
console.log(totalPrice); */

/* TotalPrice Function */

function totalCost() {
  let totalPrice = 0;
  for (product of products) {
    totalPrice = totalPrice + product.price;
  }
  return totalPrice;
}

const total = totalCost();
console.log(total);
