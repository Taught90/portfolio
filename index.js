let stars = document.querySelector('.stars');
let intro = document.querySelector('.intro');
let moon = document.querySelector('.moon');
let tea = document.querySelector('.tea');
let comet2 = document.querySelector('.comet-two');
let comet = document.querySelector('.comet');

let navs = document.querySelectorAll('.nav');
let csv = document.querySelectorAll('.csv');
let contact = document.querySelectorAll('.cintact-links');

window.addEventListener('scroll', () =>{
    let value =window.scrollY;

    stars.style.marginTop = value * .5 + 'px';
    intro.style.marginTop = value * 1.5 + 'px';
    intro.style.opacity = value * -.002 + 1;
    intro.style.scale =value * -.0005 + 1;
    moon.style.scale =value * .002 + 1 ;
    moon.style.marginTop = value * .6 + 'px';
    moon.style.rotate = value * .05 + 'deg';
    comet2.style.marginTop = value * 1.2 + 'px';
    comet2.style.marginRight = value * 3 + 'px';
    comet.style.marginTop = value * 1.2 + 'px';
    comet.style.marginRight = value * 3.5 + 'px';

})


