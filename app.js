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
  // effet de transition de page
  transition_el.classList.remove('is-active');
  for (let j = 0; j < menuLinks.length; j++) {
    menuLinks[j].addEventListener('click', e => {
      if (largeurFenetre >= 1100) {
        e.preventDefault();
        let target = e.target.href;
        transition_el.classList.add('is-active');
        setInterval(() => {
          window.location.href = target;
        }, 1000);
      }
    })
  }
  // fonction pour ajouter le titre de la diapo en version mobile sauf sur la page d'accueil
  ajoutDivMobile()
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
// animation des diapos quelque soit le nombre de diapos
for (let i = 0; i < diapos.length; i++) {
  // affichage du numéro et ombre de diapos
  let diap = i + 1;
  const numDiapo = 'Diapo ' + diap + '/' + diapos.length;
  diapos[i].insertAdjacentHTML('afterbegin', numDiapo);
  // agrandissement et affichage suivant le nombre de diapos
  diapos[i].addEventListener('click', () => {
    removeActiveClasses();
    diapos[i].classList.add('isActive');
    // s'il y a plus de 3 diapos
    if (diapos.length > 3) {
      if (i < 2) {
        for (let k = 0; k < diapos.length; k++) {
          if (k <= 2) {
            diapos[k].style.display = "block";
          } else {
            diapos[k].style.display = "none";
          }
        }
      } else if (i < diapos.length - 1) {
        for (let k = 0; k < diapos.length; k++) {
          if (k > i - 2 && k < i + 2) {
            diapos[k].style.display = "block";
          } else {
            diapos[k].style.display = "none";
          }
        }
      } else {
        for (let k = 0; k < diapos.length; k++) {
          if (k > diapos.length - 3) {
            diapos[k].style.display = "block";
          } else {
            diapos[k].style.display = "none";
          }
        }
      }
    }
  })
  // Masque les diapos au dessus de la troisième
  if (i > 2) {
    diapos[i].style.display = "none";
  }
}

function removeActiveClasses() {
  diapos.forEach(diapo => {
    diapo.classList.remove('isActive')
  })
}
const titrePage = document.title;
if (titrePage == "Présentation de la stratégie de webmarketing") {
console.log(titrePage)
// Animation des popup
// Get the modal
const modal = document.querySelector('.myModal');

// Get the button that opens the modal
const btn = document.querySelector('.myBtn');

// Get the <span> element that closes the modal
const span = document.querySelector('.close');
// When the user clicks the button, open the modal
console.log(modal)
console.log(span)
console.log(btn)
btn.addEventListener('click', () => {
  modal.style.display = "block";
})

// When the user clicks on <span> (x), close the modal
span.addEventListener('click', () => {
  modal.style.display = "none";
})

// When the user clicks anywhere outside of the modal, close it
document.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
})
}