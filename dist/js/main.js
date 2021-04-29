// for nav
const nav = document.querySelector('.nav');
const burgerMenu = document.querySelector('.nav-burger');
const burger = document.querySelector('.nav-burger-line');
const navBtn = document.querySelector('.nav-btns');
let arrow1 = document.querySelector('.header-arrow1');
let arrow2 = document.querySelector('.header-arrow3');
const scrollBtn = document.querySelector('.scroll-btn');
const education = document.getElementById("education");
const header = document.getElementById("header");
const containerScroll = document.querySelector('.container-scroll');
const containerTitle = document.querySelector('.container-title');
const loader = document.querySelector('.loader');
let showMenu = false;

window.addEventListener('load', ()=>{
    loader.parentElement.removeChild(loader);
    moveArrows();
});

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
let scroll = false;

scrollBtn.addEventListener('click', scrollFunction);

function scrollFunction(){
    if(!scroll){
        education.scrollIntoView();
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
        // arrow2.classList.add('hideArrow');

        scroll = true;
    }else{
        scrollBtn.classList.remove('circle');
        // arrow2.classList.remove('hideArrow');

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

// arrows onload function
function moveArrows(){
    arrow1.classList.remove('left');
    arrow2.classList.remove('right');
}

const sectionMargin = {
    rootMargin: "-200px 0px 0px 0px"
};
const sectionTwo = new IntersectionObserver(function(entries,sectionMargin){
    entries.forEach(entry => {
       if(!entry.isIntersecting){
            arrow2.classList.add('hideArrow');
            containerScroll.classList.remove('hide');
            containerTitle.classList.remove('hideTitle');
        }else{
            arrow2.classList.remove('hideArrow');
            containerScroll.classList.add('hide');
            containerTitle.classList.add('hideTitle');
        }
    });
}, sectionMargin);

sectionTwo.observe(header);