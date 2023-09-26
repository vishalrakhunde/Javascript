// JavaScript strings are for storing and manipulating text.

const name = "vishal"
const Age = 20

// console.log(name+ Age+ "value");

console.log(`Hello my name is ${name} and my Age is ${Age}`);

const gameName =new String('hiteshhc')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString =gameName.substring(0,4); // substring does't take negative value
console.log(newString);

const anotherString =gameName.slice(-7,4);
console.log(anotherString);


const newStringOne = "  vishal  "
console.log(newStringOne);
console.log(newStringOne.trim()); //remove starting and ending space from string


const url ="https://easestart.com/vishal%20rakhunde"

console.log( url.replace('%20','-')); // here this %20 is replaced my '-'

console.log(url.includes('sundar')); // checking is this value in the url // return false

console.log(url.includes('vishal')); // return true

// spliting 

const splitChar = "vishal-rakhunde-vishal-mangrul-jalna-pune"

console.log(splitChar.split('-'));


