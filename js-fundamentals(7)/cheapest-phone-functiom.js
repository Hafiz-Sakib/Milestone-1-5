const phones = [
  {
    name: "iphone x",
    ram: "8GB",
    price: 1000,
    color: "black",
    Storage: "64GB",
  },
  {
    name: "Xiaomi Redmi Note 7 Pro",
    ram: "4GB",
    price: 150,
    color: "blue",
    Storage: "64GB",
  },
  {
    name: "Vivo V9",
    ram: "3GB",
    price: 102,
    color: "purple",
    Storage: "32GB",
  },
  {
    name: "oppo f11",
    ram: "4GB",
    price: 200,
    color: "black",
    Storage: "64GB",
  },
  {
    name: "Realme 5i",
    ram: "4GB",
    price: 20000,
    color: "green",
    Storage: "64GB",
  },
];

function findCheapestPhone() {
  let cheapest = phones[0];
  for (const phone of phones) {
    if (phone.price < cheapest.price) {
      cheapest = phone;
    }
  }
  return cheapest;
}

const cheapestPhone = findCheapestPhone();
console.log(cheapestPhone);
