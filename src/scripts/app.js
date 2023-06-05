"use strict" ;
/* Burger menu */
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

/* Scrollspy menu section */ 
//Src : https://dev.to/nikhilroy2/how-to-create-javascript-scrollspy-vanilla-js-tutorial-35o9

let menuSection = document.querySelectorAll('.menu__el');

menuSection.forEach(v=> {
  v.onclick = (()=> {
   setTimeout(()=> {
      menuSection.forEach(j=> j.classList.remove('menu__el--active'))
    v.classList.add('menu__el--active')
  },300)
   })
})

window.onscroll = (()=> {
  let mainSection = document.querySelectorAll('.section');

  mainSection.forEach((v,i)=> {
    let rect = v.getBoundingClientRect().y
    if(rect < window.innerHeight-200){
      menuSection.forEach(v=> v.classList.remove('menu__el--active'))
      menuSection[i].classList.add('menu__el--active')
    }
  })
})

/* Draggrable silder */
//Src : https://codepen.io/kellyex/pen/KKwwdYg

let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector('.cards');

const end = () => {
	isDown = false;
  slider.classList.remove('dragging');
}

const start = (e) => {
  isDown = true;
  slider.classList.add('dragging');
  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;	
}

const move = (e) => {
	if(!isDown) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const dist = (x - startX);
  slider.scrollLeft = scrollLeft - dist;
}

(() => {
	slider.addEventListener('mousedown', start);
	slider.addEventListener('touchstart', start);

	slider.addEventListener('mousemove', move);
	slider.addEventListener('touchmove', move);

	slider.addEventListener('mouseleave', end);
	slider.addEventListener('mouseup', end);
	slider.addEventListener('touchend', end);
})();


