const cart = [
  {
    name: "laptop",
    price: 43000,
    quantity: 1,
  },
  {
    name: "shirt",
    price: 3000,
    quantity: 8,
  },
  {
    name: "watch",
    price: 430,
    quantity: 2,
  },
  {
    name: "Shoe",
    price: 2000,
    quantity: 3,
  },
  {
    name: "phone",
    price: 4300,
    quantity: 2,
  },
  {
    name: "Bagpack",
    price: 43,
    quantity: 8,
  },
];
let cartPrice = 0;
for (const product of cart) {
  const totalPrice = product.price * product.quantity;
  cartPrice = totalPrice + cartPrice;
}
console.log(cartPrice);
