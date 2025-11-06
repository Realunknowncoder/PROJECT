const myButton=document.getElementById("myButton");
let myLabel= document.getElementById('myLabel');
let min = 1 ;
let max = 100;
let randomNum;


myButton .onclick= function() { 
    randomNum= Math.floor(Math.random() * max )+ min ;
    myLabel . textContent = randomNum;
};
    
console.log(randomNum);