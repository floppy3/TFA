"use strict" ;
import gsap from "../../node_modules/gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

/* Burger menu */
let menuBurger = document.querySelector('.menu__burger');
menuBurger.addEventListener('click',toggleNavigation);
let menuSpan = document.querySelector('.menu__burger span');
let navLinks = document.querySelectorAll('.menu__el a');
navLinks.forEach(link => link.addEventListener('click', toggleNavigation));

function toggleNavigation(){
    if(document.body.hasAttribute("data-menu")){
        document.body.removeAttribute("data-menu");
        menuSpan.innerHTML = "Menu";
    }else{
        document.body.setAttribute("data-menu", true);
        menuSpan.innerHTML = "Close";
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


// scroll mobile problems count mobile
let isDown3 = false;
let startX3;
let scrollLeft3;
const slider3 = document.querySelector('.container-problems');

const end3 = () => {
	isDown3 = false;
  slider3.classList.remove('dragging');
}

const start3 = (e) => {
  isDown3 = true;
  slider3.classList.add('dragging');
  startX3 = e.pageX || e.touches[0].pageX - slider3.offsetLeft;
  scrollLeft3 = slider3.scrollLeft;	
}

const move3 = (e) => {
	if(!isDown3) return;

  e.preventDefault();
  const x3 = e.pageX || e.touches[0].pageX - slider3.offsetLeft;
  const dist3 = (x3 - startX3);
  slider3.scrollLeft = scrollLeft3 - dist3;
}

(() => {
	slider3.addEventListener('mousedown', start3);
	slider3.addEventListener('touchstart', start3);

	slider3.addEventListener('mousemove', move3);
	slider3.addEventListener('touchmove', move3);

	slider3.addEventListener('mouseleave', end3);
	slider3.addEventListener('mouseup', end3);
	slider3.addEventListener('touchend', end3);
})();

// problems links scroll mobile

let isDown4 = false;
let startX4;
let scrollLeft4;
const slider4 = document.querySelector('.problems-links');

const end4 = () => {
	isDown4 = false;
  slider4.classList.remove('dragging');
}

const start4 = (e) => {
  isDown4 = true;
  slider4.classList.add('dragging');
  startX4 = e.pageX || e.touches[0].pageX - slider4.offsetLeft;
  scrollLeft4 = slider4.scrollLeft;	
}

const move4 = (e) => {
	if(!isDown4) return;

  e.preventDefault();
  const x4 = e.pageX || e.touches[0].pageX - slider4.offsetLeft;
  const dist4 = (x4 - startX4);
  slider4.scrollLeft = scrollLeft4 - dist4;
}

(() => {
	slider4.addEventListener('mousedown', start4);
	slider4.addEventListener('touchstart', start4);

	slider4.addEventListener('mousemove', move4);
	slider4.addEventListener('touchmove', move4);

	slider4.addEventListener('mouseleave', end4);
	slider4.addEventListener('mouseup', end4);
	slider4.addEventListener('touchend', end4);
})();


// Anim gsap 
const graph = document.querySelector('.graph');
if (graph){
  graphAnim();
}

function graphAnim(){
  var anxietyAnim = gsap.timeline();
  anxietyAnim.to(".trait--2", {
    rotation: 72, 
    transformOrigin: '0% 100%',
    scrollTrigger: {
      trigger: ".graph",
      scrub: 0.4,
      start: "top 55%",
      end: "bottom 30%",
    },
  })
  .to(".anxiete1", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".graph",
      scrub: 0.4,
      start: "top 57%",
      end: "bottom 50%",
    },
  }, '<')
  .to(".anxiete2", {
    opacity: 1,
    scrollTrigger: {
      trigger: ".graph",
      scrub: 0.4,
      start: "bottom 61%",
      end: "bottom 30%",
    },
  },);

  var depressionAnim = gsap.timeline();
  depressionAnim.to(".trait--3", {
    rotation: 140.4, 
    transformOrigin: '0% 100%',
    scrollTrigger: {
      trigger: ".graph",
      scrub: 0.4,
      start: "top 56%",
      end: "bottom 31%",
    },
  })
  .to(".depression1", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".graph",
      scrub: 0.4,
      start: "top 57%",
      end: "bottom 65%",
    },
  },)
  .to(".depression2", {
    opacity: 1,
    scrollTrigger: {
      trigger: ".graph",
      scrub: 0.4,
      start: "bottom 68%",
      end: "bottom 32%",
    },
  },);

}



const phone = document.querySelector('.phone');
if (phone){
  phoneAnim();
}

function phoneAnim(){
  gsap.fromTo(".phone", {
    y: 50,
    rotation: -10,
    opacity: 0.5,
  },
  {
    y: 0,
    rotation: 4,
    opacity: 1,
    scrollTrigger: { 
      trigger: ".phone",
      scrub: 0.6,
      start: "top bottom",
      end: "bottom -=100",
    },
});
  
 
}