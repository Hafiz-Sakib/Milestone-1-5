// var i= 0;
// while (i < 10) {
//     console.log(i);
//     if (i == 5) {
//          break;
//     }
//     i++;
// }


// var i = 0 ;
// while (i < 10) {   
//     i++;
//     if (i == 4) {
//          continue;
//     }    
//     console.log(i);    
// }

// 1 2 3 5 6 7 8 9


// for (i = 0; i <10; i++){
//     if (i == 4){
//         continue;
//     }
//     console.log(i);
// }



var numbers = [11, 22, 33, 44, 55, 156, 169, 187, 66, 77, 88, 98, 112, 198, 134];
// var i = 0;
// while (i < numbers.length) {
//     var number = numbers[i];
//     i++;
//     if (number > 100) {
//         continue;
//     }
//     console.log(number);
// }

// Using For Loop 

for (var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if (number > 100) {
        continue;
    }
    console.log(number);
}