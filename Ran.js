let Ten=document.getElementById("tenbtn");
let Twen=document.getElementById("Twenbtn");
let Hun=document.getElementById("hunbtn");
let Num=document.getElementById("number");

Ten.addEventListener("click",tenfunction);

function tenfunction() {
    number.textContent = Math.floor(Math.random()*11);
}

Twen.addEventListener("click",Twenfunction);

function Twenfunction() {
    number.textContent = Math.floor(Math.random()*21);
}

Hun.addEventListener("click",Hunfunction);

function Hunfunction() {
    number.textContent = Math.floor(Math.random()*101);
}
