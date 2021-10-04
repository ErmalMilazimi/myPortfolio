// for nav
const nav = document.querySelector(".nav");
const burgerMenu = document.querySelector(".nav-burger");
const burger = document.querySelector(".nav-burger-line");
const navBtn = document.querySelector(".nav-btns");
let arrow1 = document.querySelector(".header-arrow1");
let arrow2 = document.querySelector(".header-arrow3");
const scrollBtn = document.querySelector(".scroll-btn");
const education = document.getElementById("education");
const header = document.getElementById("header");
const containerScroll = document.querySelector(".container-scroll");
const containerTitle = document.querySelector(".container-title");
const loader = document.querySelector(".loader");
let showMenu = false;

window.addEventListener("load", () => {
  loader.parentElement.removeChild(loader);
  moveArrows();
});

burgerMenu.addEventListener("click", navMenu);

function navMenu() {
  if (!showMenu) {
    nav.classList.add("show");
    burger.classList.add("open");

    showMenu = true;
  } else {
    burger.classList.remove("open");
    nav.classList.remove("show");

    showMenu = false;
  }
}

// for button
let scroll = false;

scrollBtn.addEventListener("click", scrollFunction);

function scrollFunction() {
  if (!scroll) {
    education.scrollIntoView();
    scrollBtn.classList.add("circle");

    scroll = true;
  } else {
    header.scrollIntoView();
    scrollBtn.classList.remove("circle");

    scroll = false;
  }
}
// scroll butons observer
const sectionOneOptions = {
  rootMargin: "-400px 0px 0px 0px",
};

const sectionOneObesrver = new IntersectionObserver(function (entries, sectionOneOptions) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      scrollBtn.classList.add("circle");
      // arrow2.classList.add('hideArrow');

      scroll = true;
    } else {
      scrollBtn.classList.remove("circle");
      // arrow2.classList.remove('hideArrow');

      scroll = false;
    }
  });
}, sectionOneOptions);

sectionOneObesrver.observe(header);

// nav Buttons
function scrollNav(id) {
  let element = document.getElementById(id);
  navMenu();
  element.scrollIntoView();
}

// arrows onload function
function moveArrows() {
  arrow1.classList.remove("left");
  arrow2.classList.remove("right");
}

const sectionMargin = {
  rootMargin: "-200px 0px 0px 0px",
};
const sectionTwo = new IntersectionObserver(function (entries, sectionMargin) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      arrow2.classList.add("hideArrow");
      containerScroll.classList.remove("hide");
      containerTitle.classList.remove("hideTitle");
    } else {
      arrow2.classList.remove("hideArrow");
      containerScroll.classList.add("hide");
      containerTitle.classList.add("hideTitle");
    }
  });
}, sectionMargin);

sectionTwo.observe(header);

// for modal
let modalTitle = document.querySelector("#modal-title");
let modalDesc = document.querySelector("#modal-desc");
let modalLink = document.querySelector("#modal-link");
let modalIframe = document.querySelector("#modal-iframe");
document.addEventListener("click", (e) => {
  if (e.target.closest("#projects .container-content-cards")) {
    document.querySelector(".container-modal").classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
    let targetClick = e.target.closest(".container-content .container-content-cards");

    modalTitle.innerText = targetClick.querySelector(".container-content-cards-title").innerText;
    modalDesc.innerText = targetClick.querySelector("#projects .container-content-cards-text").innerText.split("\n")[0];
    if (targetClick.querySelector(".container-content-cards-links p")) {
      modalLink.setAttribute("target", "_blank");

      modalLink.href = targetClick.querySelector(".container-content-cards-links p").innerText;
    } else {
      modalLink.setAttribute("target", "");
      modalLink.removeAttribute("href");
    }
    if (targetClick.querySelector(".container-content-cards-links p")) {
      modalLink.innerText = targetClick.querySelector(".container-content-cards-links p").innerText.split("https://")[1];
    } else {
      modalLink.innerText = "This page is not online!";
    }
    if (targetClick.querySelector(".container-content-cards-links p")) {
      modalIframe.src = targetClick.querySelector(".container-content-cards-links p").innerText;
      document.querySelector(".container-modal-down-bgIcon").style.visibility = "hidden";
    } else {
      document.querySelector(".container-modal-down-bgIcon").style.visibility = "visible";
      modalIframe.src = "";
    }
  }
});
document.addEventListener("click", (e) => {
  if (e.target.closest(".container-modal-close")) {
    document.querySelector(".container-modal").classList.remove("active");
    document.querySelector("body").style.overflow = "auto";
  }
});

let theme = document.getElementById("changeTheme");
let changeTheme = localStorage.getItem("changeTheme");
let iconsTheme = theme.querySelectorAll('i');

const setDarkMode = () =>{
  document.querySelector("body").classList.add('background');
  localStorage.setItem('changeTheme', "enable");
  iconsTheme[0].classList.remove("active");
  iconsTheme[1].classList.add("active");
}

const removeDarkMode = () =>{
  document.querySelector("body").classList.remove('background');
  localStorage.setItem('changeTheme', null);
  iconsTheme[1].classList.remove("active");
  iconsTheme[0].classList.add("active");
}
if(changeTheme == "enable"){
  setDarkMode();
}

theme.addEventListener('click', () => {
  changeTheme = localStorage.getItem("changeTheme")
  if(changeTheme != "enable"){
    setDarkMode();
  }else{
    removeDarkMode();
  }
})