function getFactorial (number) {
    let factorial = 1;
    for (i = 1; i <= number; i++){
        factorial = factorial * i;
    }
    return factorial;
}


var myFactorial = getFactorial (8);
console.log("Your Answer is = ",myFactorial)