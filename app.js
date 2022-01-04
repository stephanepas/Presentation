const navbar = document.querySelector('.navbar');
const ham = document.querySelector('.ham');
const curseur = document.querySelector('.curseur');
const menuLinks = document.querySelectorAll('.menuLink');
const diapos = document.querySelectorAll('.diapo');

// position curseur
document.addEventListener('mousemove', e => {
    curseur.style.top = e.pageY -20 + 'px';
    curseur.style.left = e.pageX -20 + 'px';
    curseur.classList.add('cursor');
})
// Animation curseur
document.addEventListener('click', ()=>{
    curseur.classList.add('expand');
    setTimeout(() => {
        curseur.classList.remove('expand');
    }, 500);
})

// bascule le menu hamburger in and out quand on click dessus
function toggleHamburger(){
  navbar.classList.toggle("showNav")
  setTimeout(() => {
    ham.classList.toggle("showClose");
}, 600);
}

ham.addEventListener("click", toggleHamburger)

// bascule quand on click sur les liens
menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleHamburger)
  }
)

diapos.forEach(diapo => {
    diapo.addEventListener('click', () => {
        removeActiveClasses()
        diapo.classList.add('isActive')
    })
})
function removeActiveClasses() {
    diapos.forEach(diapo => {
        diapo.classList.remove('isActive')
    })
}