function bringSingara(taka){
    console.log('Singara er jonne Disee ', taka);
    console.log("Mama Singara Den!!");
    singaraPrice = 10;
    singaraQuantity = taka / singaraPrice;
    return singaraQuantity; 
}
var Money = 250;

// ei line mane bujhano hoistese je singara er value hobe function ke call korar pore je output dibe sheitaaa.Orthat,bringSingara() Deya mane oi name er function ta ami call korlam .........

var singara = bringSingara(Money);

console.log('ai nen Singara', singara);
