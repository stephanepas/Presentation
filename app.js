const navbar = document.querySelector('.navbar');
const ham = document.querySelector('.ham');
const curseur = document.querySelector('.curseur');
const menuLinks = document.querySelectorAll('.menuLink')

// Animation curseur
document.addEventListener('mousemove', e => {
    curseur.style.top = e.pageY -20 + 'px';
    curseur.style.left = e.pageX -20 + 'px';
})
document.addEventListener('click', ()=>{
    curseur.classList.add('expand');
    setTimeout(() => {
        curseur.classList.remove('expand');
    }, 500);
})

// bascule le menu hamburger in and out quand on click dessus
function toggleHamburger(){
  navbar.classList.toggle("showNav")
  ham.classList.toggle("showClose")
}

ham.addEventListener("click", toggleHamburger)

// bascule quand on click sur les liens
menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleHamburger, ()=>{
      menuLinks.classList.toggle('active');
  })
  }
)
