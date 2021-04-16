let bghead = document.getElementById("bghead");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let tomato = document.getElementsByClassName("btn-tomato");



bghead.addEventListener("click",function () {
    bghead.style.backgroundColor = "white";
})
btn1.addEventListener("click",function () {
    bghead.style.backgroundColor = "red";
})
btn2.addEventListener("click",function () {
    bghead.style.backgroundColor = "violet";
})
btn3.addEventListener("click",function () {
    bghead.style.backgroundColor = "wheat";
})
btn4.addEventListener("click",function () {
    bghead.style.backgroundColor = "yellow";
})
btn5.addEventListener("click",function () {
    bghead.style.backgroundColor = "yellowgreen";
})