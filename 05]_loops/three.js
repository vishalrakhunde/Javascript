// for of 

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}

const greeting = "hello world!"

for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
    
}

// Maps 

const map = new Map()
map.set('IN' , "India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN' , "India") // here this will not print 

console.log(map); // map doesn't allow repeated values to print

  
for (const [key, values] of map) {
    console.log(key, ':-',values);
    
}

