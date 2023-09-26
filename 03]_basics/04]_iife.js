// Immediately Invoked funtion Expressions (IIFE)

// The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

// () ()

// method one
(function chai(){  // this is Named iife because this function have name that is chai
    console.log(`DB CONNECTED`);
}) (); // here this ; is imp for ending this code


// method two
(()=>{   // UNnamed iife
    console.log(`DB CONNECTED TWO`);
})();


((name)=>{
   console.log(`Hi, welcome ${name}`);
}) (`vishal`);
