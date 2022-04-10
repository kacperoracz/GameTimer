// let mouseDown = 0;  
// window.onmousedown = () => {  
//   ++mouseDown;  
//   if (mouseDown) {  
//     console.log('mouse button down')  
//   }  
// }  
// window.onmouseup = () => {  
//   --mouseDown;  
//   if (mouseDown) {  
//     console.log('mouse button down')  
//   }  
// }

const menu = document.querySelector(".menu");
const menuHeader = document.querySelector(".menu h3");
const playersButton = document.querySelector(".playersButton");
const playersOptions = document.querySelector(".playersOptions");
const timeButton = document.querySelector(".timeButton");
const timeOptions = document.querySelector(".timeOptions");

menuHeader.addEventListener("click", e => {
    menu.classList.toggle("open");
});

playersButton.addEventListener("click", e => {
    playersOptions.classList.toggle("open");
});

timeButton.addEventListener("click", e => {
    timeOptions.classList.toggle("open");
});