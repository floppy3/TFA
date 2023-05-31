"use strict" ;

let menuBurger = document.querySelector('.menu__burger');
menuBurger.addEventListener('click',toggleNavigation);
let navLinks = document.querySelectorAll('.menu__el a');
navLinks.forEach(link => link.addEventListener('click', toggleNavigation));

function toggleNavigation(){
    if(document.body.hasAttribute("data-menu")){
        document.body.removeAttribute("data-menu");
        menuBurger.innerHTML = "Menu";
    }else{
        document.body.setAttribute("data-menu", true);
        menuBurger.innerHTML = "Close";
    }
}
