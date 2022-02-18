function leapYear(year){
    if ((year %4 ==0 && year %100 != 0) || year % 400 == 0 ) {
        return true;
    }
    return false;
}

let myYear = 2100;
let result = leapYear(myYear);
console.log("Is this leap year ?", result);