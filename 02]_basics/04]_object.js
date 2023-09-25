// const tinderUser = new Object() 

const tinderUser ={}

tinderUser.id ="123abc"
tinderUser.name="vishal"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser ={
    email:"user@gmail.com",
    fullname:{
        userfullname:{
            firstname:"vishal",
            lastname:"rakhunde"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"a", 3:"b"}
const obj3 ={4:"a", 6:"b"}


// method one to assign object 
// const obj4 = Object.assign({},obj1,obj2,obj3) // here this first is empty object {} in which all the source obj will assign
// if we didn't give that all the object will assign in obj1 



// method two to assign objects using spread 
const obj4 ={...obj1,...obj2,...obj3}
console.log(obj4);

const users = [
    {
     id: 1,
     email: "u@gmail.com"
    },
    {
     id: 2,
     email: "v@gmail.com"
    },
    {
     id: 3,
     email: "w@gmail.com"
    }
 ];
 
users[1].email // because this is array so use .email

console.log(tinderUser);

console.log(Object.keys(tinderUser));  // keys in objects => return in arrays
console.log(Object.values(tinderUser));  // values in objects => return in arrays
console.log(Object.entries(tinderUser));

// checking if there is value present in object => return in boolean
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Object destructuring and JSON APi

const course ={
    coursename:"Js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
// course.courseInstructor

// const {courseInstructor} =course
// we can also change the name here 
const {courseInstructor:Instructor} = course

// console.log(courseInstructor);
console.log(Instructor);


// example in react 
// const navbar =({company})=>{

// }
// navbar(company="hitesh");

