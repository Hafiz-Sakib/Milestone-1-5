function celciusToKelvin (celcius){
    var kelvin = celcius + 273;
    return kelvin;
}


var celcius = 40;
var todayTemperature =celciusToKelvin (celcius);
console.log("Todays Temperature is :", todayTemperature);




function celciusToFahrenheit (celcius){
    var fahrenheit = (9*celcius / 5) + 32;
    return fahrenheit;
}

var celcius = 150;
var fahrenheit = celciusToFahrenheit(celcius);
console.log("My Body Temperature is : ", fahrenheit);