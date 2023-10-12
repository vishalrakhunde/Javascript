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



//  when you use the + operator with one or both operands as strings, it performs string concatenation. This means that it converts the non-string operand(s) into a string and then concatenates them. This behavior is called type coercion, 
console.log("1"+2); // all convert into string
console.log(typeof(1+"2"));
console.log(typeof("1"+2+2));
console.log((1+2+"2"));

console.log((3+4)*5%3);

// prefix => first Increment then print
console.log("prefix");
let gameCounter =100
++gameCounter;
console.log(gameCounter);

// real world example of prefix
let odometerReading = 10000; // Initial odometer reading

// Prefix increment: First, increment the odometer reading and then display it
let newMileage = ++odometerReading;

console.log("New Odometer Reading (Prefix): " + newMileage); // New reading is immediately displayed



// postfix => first print then Increment
console.log("postfix");
let Counter =100
Counter++;
console.log(Counter);

// Real world example of postfix

let currentTicketNumber = 100; // Initial ticket number

// Postfix increment: First, display the current ticket number, then increment it for the next customer
let ticketForCustomer = currentTicketNumber++;

console.log("Ticket for Customer (Postfix): " + ticketForCustomer); // Display the current ticket number
console.log("Next Available Ticket: " + currentTicketNumber); // Show the incremented ticket number for the next customer
