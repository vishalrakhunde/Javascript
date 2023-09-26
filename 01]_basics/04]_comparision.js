// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

console.log("2">1);  // true
console.log("02">1);  // true
 
console.log(null >0);  // false
console.log(null==0);   // false
console.log(null>=0);    //true

console.log(undefined==0);  // false
console.log(undefined>0);    // false
console.log(undefined>=0);    //false

// === check equal type and equal value

console.log("2" ===2);  //false

console.log(2<12); // true
console.log(2<"12");     //true  // here Js convert string to number
console.log(2<"john");   //false  // john cannot be converted to number
console.log(2>"john");   //false  //
console.log(2=="john");  //false
console.log("2"<"12");   //false //JavaScript compares strings by comparing their characters one by one, starting from the beginning. In this case, the first character of "2" is less than the first character of "12", so the result is 
console.log("2">"12");   //true  // first char of "2" is less than first char of "12"
console.log("2"=="12");  //false

// When comparing two strings, "2" will be greater than "12", because (alphabetically) 1 is less than 2.

// In the case of the comparison "2">"12", the first character of "2" is less than the first character of "12". This is because the ASCII code for the character "2" is 50, and the ASCII code for the character "1" is 49.