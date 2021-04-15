// for nav
const nav = document.querySelector('.nav');
const burgerMenu = document.querySelector('.nav-burger');
const burger = document.querySelector('.nav-burger-line');
const navBtn = document.querySelector('.nav-btns');

let showMenu = false;

burgerMenu.addEventListener('click', navMenu);

function navMenu(){
    if(!showMenu){
        nav.classList.add('show');
        burger.classList.add('open');

        showMenu = true;
    }
    else{
        burger.classList.remove('open');
        nav.classList.remove('show');

        showMenu = false;
    }
}

// for button
const scrollBtn = document.querySelector('.scroll-btn');

let scroll = false;

scrollBtn.addEventListener('click', scrollFunction);

function scrollFunction(){
    var bio = document.getElementById("bio");
    var header = document.getElementById("header");
    if(!scroll){
        bio.scrollIntoView();
        scrollBtn.classList.add('circle');
        
        scroll = true;
    }else{
        header.scrollIntoView();
        scrollBtn.classList.remove('circle');

        scroll = false;
    }
}

function scrollNav(id){
    let element = document.getElementById(id);
    navMenu();
    element.scrollIntoView();
}