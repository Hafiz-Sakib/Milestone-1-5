function mileTokilometer (mile){
    var kilometer = mile * 1.60934;
    return kilometer;
}

var distances = 52;
var km = mileTokilometer(distances);
console.log("distance is :" , km);


var marathon = mileTokilometer(100);
console.log("Marathon Race is : ", marathon);