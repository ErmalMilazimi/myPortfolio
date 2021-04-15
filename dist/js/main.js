const burgerMenu = document.querySelector('.nav-burger');
const burger = document.querySelector('.nav-burger-line');
const nav = document.querySelector('.nav');

let showMenu = false;

burgerMenu.addEventListener('click', navMenu);

function navMenu(){
    if(!showMenu){
        burger.classList.add('open');
        nav.classList.remove('hide');

        showMenu = true;
    }
    else{
        burger.classList.remove('open');
        nav.classList.add('hide');

        showMenu = false;
    }
}