const products = [
  { name: "samsung s3 phone", price: 12000 },
  { name: "asus laptop d34", price: 32000 },
  { name: "apple smart watch", price: 18000 },
  { name: "bosundhara binding paper", price: 80 },
  { name: "lg smart phone", price: 10000 },
  { name: "old granny land phone", price: 100 },
  { name: "samsung watch", price: 1000 },
  { name: "Dell laptop", price: 31000 },
  { name: "lenovo laptop", price: 41000 },
];

function searchProduct(product, searchText) {
  const result = [];
  for (product of products) {
    if (product.name.includes(searchText)) {
      result.push(product);
    }
  }
  return result;
}
console.log(searchProduct(products, "watch"));
