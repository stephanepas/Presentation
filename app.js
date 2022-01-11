const navbar = document.querySelector('.navbar');
const ham = document.querySelector('.ham');
const curseur = document.querySelector('.curseur');
const menuLinks = document.querySelectorAll('.menuLink');
const diapos = document.querySelectorAll('.diapo');

window.onload = () => {
    const transition_el = document.querySelector('.transition');
console.log(transition_el)

    setTimeout(() => {
      transition_el.classList.remove('is-active');
    }, 500);
  
    for (let j = 0; j < menuLinks.length; j++) {
  
      menuLinks[1].addEventListener('click', e => {
        e.preventDefault();
        let target = e.target.href;
  
        console.log(transition_el);
  
        transition_el.classList.add('is-active');
  
        console.log(transition_el);
  
        setInterval(() => {
          window.location.href = target;
        }, 500);
      })
    }
  }


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
    ham.classList.toggle("showClose");
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
// Ajout du titre de la page en version mobile
    const parentDivAjoute = document.querySelector('.container');
    const titrePage = document.title;
    const largeurFenetre = window.innerWidth;
    const divAjoute = document.createElement('div');
  
// window.onload = ajoutDivMobile;
// window.onresize = ajoutDivMobile;

function ajoutDivMobile () {
    if (largeurFenetre < 1100){
        divAjoute.className = 'divTitreMobile';
        divAjoute.innerHTML = titrePage;
        parentDivAjoute.parentNode.insertBefore(divAjoute, parentDivAjoute);       
    // } else { divAjoute.parentNode.removeChild(divAjoute); 
    }
}