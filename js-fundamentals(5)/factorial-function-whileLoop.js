// function getFactorial (number){
//     let factorial = 1;
//     let i =1 ;
//     while(i <= number){
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }

// const myFactorial = getFactorial (9);
// console.log("Your Answer is =", myFactorial)




// Another Way  by Decreaming 


// function getFactorial (number){
//     let factorial = 1;
//     let i = number;
//     while (i >= 1){
//         factorial = factorial * i;
//         i--;
//     }
//     return factorial;
// }


// myFactorial = getFactorial (9);
// console.log("Your factorial is = ", myFactorial)

    
// For loop Reverse

function getFactorial(number){
    let factorial = 1;
    for (i = number; i>= 1; i--){
        factorial = factorial * i;
    }
    return factorial; 
}

myFactorial = getFactorial(9);
console.log("Your Desired Result is = ", myFactorial);