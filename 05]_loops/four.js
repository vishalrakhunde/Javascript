// for in 

const myObject ={
    js:"Javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

// for in loop for object
for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming =["js","rb","py","java","cpp"]

for(const key in programming){
    console.log(programming[key]);
}