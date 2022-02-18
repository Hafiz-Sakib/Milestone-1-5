function getFactorial(number){
    let factorial = 1;
    for (i = 1; i <= number; i++){
     factorial = factorial * i;    
    }
    return factorial;
}


var myFactorial = 12;
var result =getFactorial(myFactorial);
console.log("Your Answer is = ", result);