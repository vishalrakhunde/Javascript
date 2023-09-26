// Functions in JS



// method 1
// function addtwoNumbers(number1, number2){ // this numbers1 and numbers2 are called parameters
//     console.log(number1+number2);
// }

// addtwoNumbers(3,4) // this 3 & 4 are called Arguments 



// method 2
function addtwoNumbers(number1,number2){
//    let result = number1+ number2   
//    return result

return number1 + number2
}

const result = addtwoNumbers(3,5)

console.log("Result: ", result);


// 

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in `
}

// console.log(loginUserMessage("vishal"))

// console.log(loginUserMessage());


function calculateCartPrice( val1,val2, ...num1){  // now this ...num1 can add multiple values
   return num1                 // now first two values of arguments will go in this val1 and val2 
}

// console.log(calculateCartPrice(200,400,500,2000));


const user ={
    username:"vishal",
    price:199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleobject(user)
// we also direct pass object init
handleobject({
    username:"ram",
    price:399

})


const myNewArray =[200,400,100,600]

function returnSecondValue(getArray) {
    return getArray[1]

}
console.log(returnSecondValue(myNewArray));
