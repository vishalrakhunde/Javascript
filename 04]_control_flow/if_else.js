// if

const temperature = 41
if(temperature === 40){
console.log("less than 50");
}
else {
    console.log("temperature is greater than 50");
}

console.log("Execute");

const score =200
if(score>100){
    const power = "fly"
    console.log(`User power:${power}`);
}

const balance = 1000

if(balance <500){
    console.log("less than 500");
}
else if (balance <750){
    console.log("less than 700");
}
else if (balance <900){
    console.log("less than 900");
}
else {
    console.log("less than 1200");
}

// real life use of if else

const userloggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userloggedIn && debitcard){ // here both should be true for running the program
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){ // here any of one should be true 
    console.log("user logged in");
}

