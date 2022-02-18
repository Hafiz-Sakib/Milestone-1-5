var computer = {
    price : 30000,
    color: 'silver',
    memory:'512GB',
    processor: 'intel i5'
}
// console.log(computer);


// console.log(computer.price);

// With Variable
// var price = computer.price;
// console.log(price); 


// Changing a Value of a Object Property

computer.price = 25000;
console.log(computer)


// different Way to change a value of a Object Property

computer['price'] = 20000;
console.log(computer);

// an Another Way
var priceProperty =['price'];
computer[priceProperty] = 15000;
console.log(computer);