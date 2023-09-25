const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros =["superman","flash","batman"]

// marvel_heros.push(dc_heros) // here this push array in second array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // this concat merge array and return new array // In concat we can only add two array
// console.log(allHeros);

const all_new_heros =[...marvel_heros, ...dc_heros] // here we can add as many as array 
console.log(all_new_heros);


// In flat => returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("vishal"));
console.log(Array.from("vishal")); // from => convert vishal into array

console.log(Array.from({name:"vishal"})) // **

let score1 =100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // here of => also return a new array form a set of elements.

   