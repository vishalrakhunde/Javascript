// let score ="33"
let score ="33abc"
console.log(typeof score);
console.log(typeof(score));

let valueNumber = Number(score); // This Number convert string into number
console.log(typeof(valueNumber));

// "33"=> 33
// "33abc" => NaN
// true => 1; false =>0

let isloggedIn =1
let booleanIsLoggedIn = Boolean(isloggedIn) // This boolean convert number into boolean
console.log(booleanIsLoggedIn);

// 1=> true ; 0=>false
// "" => false
// "hitesh" => true 


let someNumber = 33
let stringNUmber = String(someNumber); //This String convert number into string
console.log(stringNUmber);

//  ********** Operations ***********

let value =3
let negvalue = -value
console.log(negvalue);



console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);
console.log(2**2);


let str1 ="hello"
let str2 ="Vishal"
console.log(str1+" "+str2);

console.log("1"+2); // all convert into string
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");

console.log((3+4)*5%3);

// prefix => first Increment then print
console.log("prefix");
let gameCounter =100
++gameCounter;
console.log(gameCounter);


// postfix => first print then Increment
console.log("postfix");
let Counter =100
Counter++;
console.log(Counter);