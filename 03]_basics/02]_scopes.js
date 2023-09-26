      var string1 = "this is a string";
        var string1 = "this is a string2";  //var is globally scoped it can be re-declare and re-updatede  
        console.log(string1);
        let a = "u";
        {
            let a = "U6";
            console.log(a);  // here let is blocked scoped
        }
        console.log(a);

        const b = "This cannot be changed";
        // b = " I want to change this "  // in const we cant changed
        console.log(b);



function one() {
    const username = "vishal"

    function two (){
        const website ="youtube"
        console.log(username);  // This will print because it child of one funtion 
    }
    // console.log(website); // this will not print because this is out of scope 

    two()
    
}        

one()


if(true){
    const username ="vishal"
    if(username==="vishal"){
        const website = " youtube"
        console.log(username + website);

    }
    // console.log(website); // this will not print 
}

// console.log(username); // this will not print because iska scope yaha nahi hai

// ++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5)); // here we can print we can access it before declaration

function addone(num){
    return num + 1
}

// console.log(addtwo(5)); // here this will not print because we are holding it in variable  // we can't use it before declaration
const addtwo = function (num) {
    return num + 2
    
}

