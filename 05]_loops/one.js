// for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    if(element == 5) {
        // console.log("5 is best number");
    }

    // console.log(element);
    
}
  

for (let i = 0; i <=10; i++) {
// console.log(`outer loop value: ${i}`);
   for (let j = 0; j <=10; j++) {
// console.log(`Inner loop vlaue ${j} and inner loop ${i}`);

// console.log(i + '*' + j + ' = ' + i*j );    
   }

}

let myArray = ["flash","batman","superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    }



// Break and continue

for (let index = 0; index <=20; index++) {
    if (index ==5) {
        console.log(`Detected 5 `);
        break
        
    }
    console.log(`value of i is ${index}`);
    
}


for (let index = 0; index <=20; index++) {
    if (index ==5) {
        console.log(`Detected 5 `);
        continue
        
    }
    console.log(`value of i is ${index}`);
    
}


