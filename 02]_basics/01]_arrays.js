// Arrays

// Arrays are zero based indexing

const myArr =[0,1,2,3,4,5]
const myHeroes = ["shaktiman","naagraj"]
const myArr2 = new Array(1,2,3,4)

console.log(myArr[0]);

// Array Methods

myArr.push(6)  // Add value at end of array
console.log(myArr);

myArr.pop() // Remove value from end of array 
console.log(myArr);


myArr.unshift(9)  // Add value from starting of array 
console.log(myArr); 

myArr.shift()     // Remove value from starting of array
console.log(myArr);


console.log(myArr.includes(9)); // See  9 is in Array or not // return in boolean

console.log(myArr.indexOf(3));  // gives index of Given value in Array



const newArr = myArr.join(); // this join the array and convert it into string

console.log(myArr);
console.log(newArr);
console.log(typeof(newArr));


// slice , splice
console.log("Slice and splice")

console.log("A ",myArr);

const myn1= myArr.slice(1,3)
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("C ",myArr);
console.log(myn2);

