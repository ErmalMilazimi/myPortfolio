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
const bio = document.getElementById("bio");
const header = document.getElementById("header");

let scroll = false;

scrollBtn.addEventListener('click', scrollFunction);

function scrollFunction(){
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
// scroll butons observer
const sectionOneOptions = {
    rootMargin: "-400px 0px 0px 0px"
};

const sectionOneObesrver = new IntersectionObserver(function(entries,sectionOneOptions){
    entries.forEach(entry => {
       if(!entry.isIntersecting){
        scrollBtn.classList.add('circle');
        
        scroll = true;
    }else{
        scrollBtn.classList.remove('circle');

        scroll = false;
    }
    });
}, sectionOneOptions);

sectionOneObesrver.observe(header);


// nav Buttons
function scrollNav(id){
    let element = document.getElementById(id);
    navMenu();
    element.scrollIntoView();
}