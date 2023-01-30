//Task: Hands On Quiz 1
// Name: Jenna Ella P. Pangilinan
//Section: WD 201

const calc = require('./calculation.js');

const rateHR = 300;
const days = 6;
const hrs = 4;
const workHR = calc.multiply(days,hrs);

const gross = calc.multiply(workHR, rateHR);
const tax = calc.multiply(gross,0.1);
const sss = calc.divide(gross,6);
const pag_ibig = calc.divide(gross,workHR);
const philH = 400;
const deduct = calc.add(calc.add(tax,sss),calc.add(pag_ibig,philH));

console.log('The gross income is ' + gross);
console.log('Tax: ' + tax);
console.log('SSS: ' + sss);
console.log('Pag-Ibig fund: ' + pag_ibig);
console.log('PhilHealth: ' + philH);
console.log('Total deductions: ' + deduct);
console.log('The net salary is ' + calc.subtract(gross,deduct));