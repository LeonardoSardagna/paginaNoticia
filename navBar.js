const botaoH = document.querySelector('.hamburguer');
const navList = document.querySelector('.nav_bar');
const modoDark = document.querySelector('.switch');

botaoH.addEventListener("click", ()=>{
    navList.classList.toggle("active");
})

modoDark.addEventListener('click', ()=>{
    const temaEscuro = document.getElementById('darkModeToggle');
    const li = document.querySelectorAll('.link_navegacao');
    const fundoNoticia = document.querySelector('.container_noticias');
    const logo = document.querySelector('.container_logo')
    const tituloCard = document.querySelectorAll('.link_card')
    const rodape = document.querySelector('.rodape')

    temaEscuro.addEventListener('change', ()=>{
        if(temaEscuro.checked){
            document.body.classList.add('darkModeToggle');
            fundoNoticia.classList.add('active');
            rodape.classList.add('active');
            logo.setAttribute('src', '/imagens/logoClaro.svg')
            tituloCard.forEach((titulo)=>{
                titulo.classList.add('active')
            })
            li.forEach((li)=>{
                li.classList.add('active')
            })
        }else{
            document.body.classList.remove('darkModeToggle');
            fundoNoticia.classList.remove('active');
            rodape.classList.remove('active')
            logo.setAttribute('src', '/imagens/logo.svg')
            li.forEach((li)=>{
                li.classList.remove('active')
            })
            tituloCard.forEach((titulo)=>{
                titulo.classList.remove('active')
            })
            }
            
    })
})
