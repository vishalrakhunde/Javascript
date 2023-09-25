// Dates

let myDate =new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let myCreateDate = new Date (2023,0,23) // month start with 0 in js
// let myCreateDate = new Date(2023 ,0,23,5,3)
// let myCreateDate = new Date("2023-01-14")

let myCreateDate = new Date("01-14-2023")

console.log(myCreateDate.toLocaleString());


// Timestamp
let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // converting milli sec to sec


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1); // here month start from 0 so add 1 in it now it will start with 1
console.log(newDate.getDay());  // Day start with monday


newDate.toLocaleString('default',{
    weekday:"long"
})