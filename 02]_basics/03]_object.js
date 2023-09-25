// singleton
// object.create

// object literals

const mySum = Symbol("key1")

const JsUser ={
    name:"vishal",  // name is KEY and "vishal" is VALUE
    "full name":"vishal rakhunde",
    [mySum]:"mykey1", //symbol syntax
    age:18,
    location: "Pune",
    email:"user@easestart.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","saturday"]

}


// method to access values in objects
console.log(JsUser.email); 
console.log(JsUser["email"]); 
console.log(JsUser["full name"]);
console.log(JsUser[mySum]);

// methods to change value in objects

JsUser.email = "vishal@easestart.com"

// freeze will block object from doing changes in object
// Object.freeze(JsUser)

JsUser.email = "vish@google.com" // now this will not print because we have freeze the object

console.log(JsUser);

// Adding function in object

JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greetingtwo = function(){
    console.log(`Hello Js user,${this.name}`);
}
console.log(JsUser.greetingtwo());