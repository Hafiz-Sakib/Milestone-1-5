function isLeapYear(year){
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
        return true;
    }
   else{
       return false;
   }
}

let year = 2022;
let leapYear = isLeapYear(year);
console.log("Is This is a Leap Year?", leapYear);