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


let Thous=document.getElementById("Thobtn");
let fivek=document.getElementById("fivebtn");
let tenk=document.getElementById("tenkbtn");

Thous.addEventListener("click",Thousfunction);

function Thousfunction() {
    number.textContent = Math.floor(Math.random()*1001);
}

fivek.addEventListener("click",fivefunction);

function fivefunction(){
    number.textContent = Math.floor(Math.random()*5001);
}

tenk.addEventListener("click",tenkfunction);

function tenkfunction(){
    number.textContent = Math.floor(Math.random()*10001);
}