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

menuHeader.addEventListener("click", e => {
    menu.classList.toggle("open");
});