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
const slider = document.querySelector('.wrapper');

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

// slider2 
let isDown2 = false;
let startX2;
let scrollLeft2;
const slider2 = document.querySelector('.wrapper-2');

const end2 = () => {
	isDown2 = false;
  slider2.classList.remove('dragging');
}

const start2 = (e) => {
  isDown2 = true;
  slider2.classList.add('dragging');
  startX2 = e.pageX || e.touches[0].pageX - slider2.offsetLeft;
  scrollLeft2 = slider2.scrollLeft;	
}

const move2 = (e) => {
	if(!isDown2) return;

  e.preventDefault();
  const x2 = e.pageX || e.touches[0].pageX - slider2.offsetLeft;
  const dist2 = (x2 - startX2);
  slider2.scrollLeft = scrollLeft2 - dist2;
}

(() => {
	slider2.addEventListener('mousedown', start2);
	slider2.addEventListener('touchstart', start2);

	slider2.addEventListener('mousemove', move2);
	slider2.addEventListener('touchmove', move2);

	slider2.addEventListener('mouseleave', end2);
	slider2.addEventListener('mouseup', end2);
	slider2.addEventListener('touchend', end2);
})();


