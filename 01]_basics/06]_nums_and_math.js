const score = 400;
console.log(score);

const balance =new Number(100)
console.log(balance);

console.log(balance.toString()); // convert number into string

console.log(balance.toFixed(2));
console.log(balance.toFixed(1));

const otherNumber =123.8966
console.log(typeof(otherNumber.toPrecision(3))); // vlaue gives in string

console.log((otherNumber.toPrecision(3)));
console.log(typeof(otherNumber));

const hundreds = 1000000
console.log(hundreds.toLocaleString()); 
console.log(hundreds.toLocaleString('en-IN')); // give acc to indian 


// *************************** MATH *****************************
console.log("MATHs ______");
console.log(Math);
console.log(Math.abs(-4)); // abs only make negetive value to positive //The Math.abs() method returns the absolute value of a number.
console.log(Math.abs(4));
console.log(Math.round(4.5)); //The Math.round() method rounds a number to the nearest integer.
console.log(Math.ceil(4.2)); // The Math.ceil() method rounds a number rounded UP to the nearest integer.
console.log(Math.floor(4.9)); // The Math.floor() method rounds a number DOWN to the nearest integer.
console.log(Math.min(4,3,6,8)); // min value return
console.log(Math.max(4,5,6,8)); // max value return

console.log(Math.random()); // value betw 0 - 1 
console.log("random number");
console.log(Math.floor((Math.random()*10)) + 1); // here 1 is added because avoid 0 in the return value

const min =10
const max =20
console.log(Math.floor(Math.random() *(max - min + 1) +min)); // print random values bet 10 -20
// +min because number should start from 10 that is min value

