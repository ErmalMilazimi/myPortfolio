// for nav
const nav = document.querySelector('.nav');
const burgerMenu = document.querySelector('.nav-burger');
const burger = document.querySelector('.nav-burger-line');
const navBtn = document.querySelector('.nav-btns');
let arrow1 = document.querySelector('.header-arrow1');
let arrow2 = document.querySelector('.header-arrow3');

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
const education = document.getElementById("education");
const header = document.getElementById("header");

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

const containerExp = document.querySelector('.container-exp');
const containerContent = document.querySelector('.container-content');

const sectionMargin = {
    rootMargin: "-200px 0px 0px 0px"
};
const sectionTwo = new IntersectionObserver(function(entries,sectionMargin){
    entries.forEach(entry => {
       if(!entry.isIntersecting){
        arrow2.classList.add('hideArrow');
        containerExp.classList.remove('hide');
        containerContent.classList.remove('hide');
        }else{
            arrow2.classList.remove('hideArrow');
            containerExp.classList.add('hide');
            containerContent.classList.add('hide');
        }
    });
}, sectionMargin);

sectionTwo.observe(header);