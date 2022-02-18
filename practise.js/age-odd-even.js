function myAgeOddOrEven (age){
    if(age % 2 == 0){
    return "your age is even number";
    }
    else{
        return "your age is odd number"; 
    }   
}
let myAge = myAgeOddOrEven(21);
console.log(myAge);