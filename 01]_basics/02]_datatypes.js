"use strict"; // treat all JS code as newer version

// Datatypes in javascript
/* There are two datatypes in javascript one is PRIMITIVE DATATYPE and second NON-PRIMITIVE DATATYPE(objects in javascript)
*/

let name = "vishal"  // string
let age =18  //number
let isloggedIn =false // boolean
let userEmail; // undefined

const id = Symbol('123')
const anotherId =Symbol('123')

console.log(id===anotherId);

const bigNumber = 4235555334545433n // this n represent bigInt 


console.log(typeof "vishal"); // typeof tell type of datatype
console.log(typeof null);


// number => 2 to power 53
// bigint
// string => ""
// boolean =>true/false
// null =>standalone value
// undefined 
// symbol 


// NON-PRIMITIVE DATATYPE (Reference)

// Array ,object,Functions 

// object

// Array 
const heros =["shaktiman","naagraj","doga"];

console.log(heros);

// Objects
let myObj ={
    name:"vishal",
    age:22,
}

console.log(myObj);
// functions

const myFunction = function (){
    console.log("Hi, vishal");
}

myFunction();

