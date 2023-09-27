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

let val1;
val1 = 5 ?? 10
