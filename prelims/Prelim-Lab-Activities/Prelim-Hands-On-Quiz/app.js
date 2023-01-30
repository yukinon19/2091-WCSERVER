//Task: Hands On Quiz 1
// Name: Jenna Ella P. Pangilinan
//Section: WD 201

var calc = require('./calculation.js');

var rateHR = 300;
var workHR = calc.multiply(6,4);

var gross = calc.multiply(workHR, rateHR);
var tax = calc.multiply(gross,0.1);
var sss = calc.divide(gross,6);
var pag_ibig = calc.divide(gross,workHR);
var philH = 400;
var deduct = calc.add(calc.add(tax,sss),calc.add(pag_ibig,philH));

console.log('The gross income is ' + gross);
console.log('Tax: ' + tax);
console.log('SSS: ' + sss);
console.log('Pag-Ibig fund: ' + pag_ibig);
console.log('PhilHealth: ' + philH);
console.log('Total deductions: ' + deduct);
console.log('The net salary is ' + calc.subtract(gross,deduct));