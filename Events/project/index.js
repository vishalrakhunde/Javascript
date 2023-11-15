// generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let Color = '#';
    for(let i =0; i<6;i++){
    Color += hex[Math.floor(Math.random()*16)];
    }
    return Color;
};

let intervalId; // declare a variable to store the interval ID

const startChangingColor = function(){
if(!intervalId){
    intervalId = setInterval(changeBgColor,1000) // change color every 1000 millisec (1sec)
}

    function changeBgColor(){
        document.body.style.backgroundColor =randomColor();

    }
};

const stopChangingColor = function(){
    clearInterval(intervalId); // stop the interval
    intervalId = null;
};

document.querySelector('#Start').addEventListener('click',startChangingColor)

document.querySelector('#Stop').addEventListener('click',stopChangingColor)