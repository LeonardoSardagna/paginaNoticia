const botaoH = document.querySelector('.hamburguer');
const navList = document.querySelector('.nav_bar');

botaoH.addEventListener("click", ()=>{
    navList.classList.toggle("active");
})