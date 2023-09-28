// for each loop 

const coding = ["js","ruby","java","python","cpp"]

coding.forEach( function (val) { // this is callback function // call back funtion doesn't hava name
    console.log(val);
    
} )


// coding.forEach( (item)=>{   // arrow callback function
//     console.log(item);
// } )


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach((item,index,arr)=>{
//     console.log(item ,index,arr);
// })


const mycoding =[
    {
        langName:"javascript",
        langFileName:"js"
    },
    {
        langName:"java",
        langFileName:"java"
    },
    {
        langName:"python",
        langFileName:"py"
    },
]

mycoding.forEach( (item)=>{
console.log(item.langName);
})