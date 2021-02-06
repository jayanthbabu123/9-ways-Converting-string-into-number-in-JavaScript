var number1 = parseInt("1000", 10);      // 1000 
var number2 = ~~"1000";                 // 1000
var number3 = "1000" - 0;                 // 1000
var number4 = Math.floor("1000.01")     // 1000
var number5 = "1000" * 1;                 // 1000
var number6 = Math.round("1000");        // 1000
var number7 = Number("1000");            // 1000
var number8 = +"1000";                   // 1000
var number9 = "1000" << 0;               // 1000

console.log(number1, number2, number3, number4, number5, number6, number7, number8, number9);
