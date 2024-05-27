
const day = document.querySelector('.day');
const night = document.querySelector('.night');

let stars = document.querySelector('.stars');
let intro = document.querySelector('.intro');
let moon = document.querySelector('.moon');
let tea = document.querySelector('.tea');
let comet2 = document.querySelector('.comet-two');
let comet = document.querySelector('.comet');
let btn = document.querySelector('.btn');
let body = document.querySelector('.body');

const cloud1 = document.querySelector('.cloud-one');
const cloud2 = document.querySelector('.cloud-two');
const cloud3 = document.querySelector('.cloud-three');
const cloud4 = document.querySelector('.cloud-four');
const cloud5 = document.querySelector('.cloud-five');
const cloud6 = document.querySelector('.cloud-six');
const sun = document.querySelector('.sun');


const h3 =document.getElementsByTagName('h3');
const h4 =document.getElementsByTagName('h4');
const span =document.getElementsByTagName('span');
let intro2 = document.querySelector('.intro-two');
const intro_li= document.querySelector('.li');



window.addEventListener('scroll', () =>{
    let value =window.scrollY;

    stars.style.marginTop = value * .3 + 'px';
    intro.style.marginTop = value * 1.5 + 'px';
    intro.style.opacity = value * -.001 + 1;
    intro.style.scale =value * -.0005 + 1;
    moon.style.scale =value * .002 + 1 ;
    moon.style.marginTop = value * .6 + 'px';
    moon.style.rotate = value * .05 + 'deg';
    comet2.style.marginTop = value * 1.2 + 'px';
    comet2.style.marginRight = value * 3 + 'px';
    comet.style.marginTop = value * 1.2 + 'px';
    comet.style.marginRight = value * 3.5 + 'px';

    btn.style.marginTop = value * .6 + 'px';
    btn.style.marginRight=value * -2 + 'px';
    cloud1.style.marginRight = value * -10 + 'px';
    cloud2.style.marginLeft = value * -19 + 'px';
    cloud3.style.marginLeft = value * -7.5 + 'px';
    cloud4.style.marginRight = value * -15 + 'px';
    cloud5.style.marginLeft = value * -2 + 'px';
    cloud6.style.marginRight = value * -1.7 + 'px';
    sun.style.scale =value * -5 + 1 ;
    sun.style.marginLeft = value * 1.5 + 'px';
    sun.style.marginTop = value * .6 + 'px';


    intro2.style.marginTop = value * 1.5 + 'px';
    intro2.style.scale =value * -.0005 + 1;

})

btn.addEventListener('click', () => {
    if(btn.innerHTML== 'Day'){
        btn.innerHTML= 'Night';
        body.style.background= 'wheat';
        night.style.display = "none";
        night.style.zIndex = "-2";
        day.style.display = "flex";
        btn.style.background= '#2d2d2d';
        btn.style.color= 'goldenrod';
        body.style.color= '#2d2d2d';
        intro_li.style.background= '#fff';
        h4.style.color = 'brown';
        h3.style.color = 'brown';
        span.style.color = 'red';
        intro_li.style.background= '#fff';
    }
    else{

        btn.innerHTML= 'Day';
        body.style.background= '#005f71';
        day.style.display = "none";
        day.style.zIndex = "-2";
        night.style.display = "flex";
        btn.style.color= '#2d2d2d';
        btn.style.background= 'goldenrod';
        body.style.color= '#fff';
        intro_li.style.background= 'goldenrod';

    }
})
