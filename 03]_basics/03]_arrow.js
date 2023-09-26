const user ={
    username:"vishal",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this); 

    }
}

// user.welcomeMessage()
// user.username = "Ram"
// user.welcomeMessage()

// console.log(this);  // this is print empty object because we are in node enviroment


// function sample(){
//     let username = "vishal"
//     console.log(this.username); // In function we can't use this it print undefined
// }

// sample()


// Arrow function

const sample1 =() =>{
    let username =" vishal"
    console.log(this.username);
}
sample1()


// method one 
// const addtwo =(num1 ,num2) =>{
//     return num1 + num2
// }


// method two
// const addtwo =(num1 ,num2) => num1 + num2


// const addtwo = (num1, num2) =>(num1 + num2)


// const addtwo =(num1, num2)=>({username:"vishal"})

console.log(addtwo(3,4));
