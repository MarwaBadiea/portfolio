
/**************************** navbar responsive starts ********************************/ 
let menu = document.querySelector('#menu');
let nav = document.querySelector('nav');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    nav.classList.remove('active');
};
/**************************** navbar responsive ends ********************************/ 


/**************************** profile photo starts ********************************/
VanillaTilt.init(document.querySelectorAll('.tilt'),{
    max : 25
});
/**************************** profile photo ends ********************************/ 
