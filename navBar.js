const botaoH = document.querySelector('.hamburguer');
const navList = document.querySelector('.nav_bar');
const modoDark = document.querySelector('.switch');
const temaEscuro = document.getElementById('darkModeToggle');
const li = document.querySelectorAll('.link_navegacao');
const fundoNoticia = document.querySelector('.container_noticias');
const logo = document.querySelector('.container_logo');
const tituloCard = document.querySelectorAll('.link_card');
const rodape = document.querySelector('.rodape');

botaoH.addEventListener("click", () => {
    navList.classList.toggle("active");
})

modoDark.addEventListener('change', () => {
    const isDarkMode = temaEscuro.checked;

    document.body.classList.toggle('darkModeToggle', isDarkMode);
    fundoNoticia.classList.toggle('active', isDarkMode);
    rodape.classList.toggle('active', isDarkMode);
    logo.setAttribute('src', isDarkMode ? '/imagens/logoClaro.svg' : '/imagens/logo.svg');

    li.forEach((liItem) => liItem.classList.toggle('active', isDarkMode));
    tituloCard.forEach((titulo) => titulo.classList.toggle('active', isDarkMode));
});
