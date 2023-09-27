const userEmail = "user@ease.ai"

if (userEmail) {
    console.log("GOT user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, bigInt 0n, "", null, undefined, NaN

// this are falsy values beside this all are truthy values

// truthy values
// "0" , 'false', " "(string having space), [], {},funtion(){} 

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }


// detecting if object is empty or not 
const emptyObj ={}

if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
}


// NUllish Coalescing Operator (??):null undefined

// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let val1;
val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20  // 10 will print


console.log(val1);



// Ternary operators

// condition ? true :false

const iceTeaPrice =100
iceTeaPrice <=80 ? console.log("less than 80"):console.log("more than 80")
