let menu = document.querySelector(".menu");
let close = document.querySelector(".closing");
let list = document.querySelector('ul');
let log = document.querySelector('.buttons');
let nav = document.querySelector('nav')

menu.addEventListener('click', ()=> {
    list.classList.add('open');
    close.classList.add('open');
    log.classList.add('open');
});
close.addEventListener('click', ()=> {
    list.classList.remove('open');
    close.classList.remove('open');
    log.classList.remove('open');
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 70) {
        nav.classList.add('down');
    } else {
        nav.classList.remove('down');
    }
});

gsap.from('.img-2',1.2 ,{opacity:0,y:200,delay:.1})
gsap.from('.img-3',1.2 ,{opacity:0,y:200,delay:.5})
gsap.from('.content',1.2 ,{opacity:0,y:-60,delay:1})
gsap.from('.fly-1',1.2 ,{opacity:0,x:80,delay:1.2})
gsap.from('.fly-2',1.2 ,{opacity:0,x:-80,delay:1.2})
gsap.from('.img-1',1.2 ,{opacity:0,x:200,delay:1.3})
gsap.from('.img-4',1.2 ,{opacity:0,x:200,delay:1.3})









