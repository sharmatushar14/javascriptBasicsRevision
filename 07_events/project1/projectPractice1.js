//Generate a random color
const randomColor= function(){
    const hex = '0123456789ABCDEF' //16 digits
    let color= '#'
    for(let i=0; i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
};
let intervalId;
const startChangingColor= function(){
    if(!intervalId){
        //This prevents multiple intervals from being created 
        //if the function is called multiple times before stopping the previous interval.
        //Multiple times is called when we click on Start simultaneously
        intervalId = setInterval(changeBgColor, 1000);
    }
    function changeBgColor(){
        document.body.style.backgroundColor=randomColor();
    }
}
const stopChangingColor = ()=>{
    clearInterval(intervalId);
    intervalId=null; //Best practice to make it null after clearing
}

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);