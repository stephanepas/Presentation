const navbar = document.querySelector('.navbar');
const ham = document.querySelector('.ham');
const curseur = document.querySelector('.curseur');
const menuLinks = document.querySelectorAll('.menuLink');
const diapos = document.querySelectorAll('.diapo');

window.onload = () => {
  const transition_el = document.querySelector('.transition');
  // constante pour afficher titre de la page en version mobile
  const largeurFenetre = window.innerWidth;
  const titrePage = document.title;

  setTimeout(() => {
    transition_el.classList.remove('is-active');
  }, 300);

  for (let j = 0; j < menuLinks.length; j++) {
    menuLinks[j].addEventListener('click', e => {
      if (largeurFenetre >= 1100) {
        e.preventDefault();
        let target = e.target.href;
        transition_el.classList.add('is-active');
        setInterval(() => {
          window.location.href = target;
        }, 300);
      }
    })
  }

  ajoutDivMobile()
  // fonction pour ajouter le titre de la page
  function ajoutDivMobile() {
    if (largeurFenetre < 1100 && titrePage != "Présentation de mon projet") {
      const parentDivAjoute = document.querySelector('.container');
      const divAjoute = document.createElement('div');

      divAjoute.className = 'divTitreMobile';
      divAjoute.innerHTML = titrePage;
      parentDivAjoute.parentNode.insertBefore(divAjoute, parentDivAjoute);
    }
  }
}


// position curseur
document.addEventListener('mousemove', e => {
  curseur.style.top = e.pageY - 20 + 'px';
  curseur.style.left = e.pageX - 20 + 'px';
  curseur.classList.add('cursor');
})
// Animation curseur
document.addEventListener('click', () => {
  curseur.classList.add('expand');
  setTimeout(() => {
    curseur.classList.remove('expand');
  }, 500);
})

// bascule le menu hamburger in and out quand on click dessus
function toggleHamburger() {
  navbar.classList.toggle("showNav")
  ham.classList.toggle("showClose");
}

ham.addEventListener("click", toggleHamburger)

// bascule quand on click sur les liens
menuLinks.forEach(
  function (menuLink) {
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

// window.onload = ajoutDivMobile;
// window.onresize = ajoutDivMobile;