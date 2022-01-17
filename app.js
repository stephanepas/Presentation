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
  // Masque les diapos au dessus de la troisième
  if (i > 2) {
    diapos[i].style.display = "none";
  }
  // agrandissement et affichage suivant le nombre de diapos
  diapos[i].addEventListener('click', () => {
    removeActiveClasses();
    diapos[i].classList.add('isActive'); // ajoute la classe isActive sur la diapo cliquée
    if (diapos.length > 3) { // effectué uniquement si plus de 3 diapos
      if (i < 2) { // 3 premières diapos affichées
        for (let k = 0; k < diapos.length; k++) {
          if (k <= 2) {
            diapos[k].style.display = "block";
          } else {
            diapos[k].style.display = "none";
          }
        }
      } else if (i < diapos.length - 1) { // diapos intermédiaires = affichage 1 diapo avant et une diapo après
        for (let k = 0; k < diapos.length; k++) {
          if (k > i - 2 && k < i + 2) {
            diapos[k].style.display = "block";
          } else {
            diapos[k].style.display = "none";
          }
        }
      } else { // dernière diapo  = affichage des 3 dernières diapos
        for (let k = 0; k < diapos.length; k++) {
          if (k > diapos.length - 4) {
            diapos[k].style.display = "block";
          } else {
            diapos[k].style.display = "none";
          }
        }
      }
    }
  })
}
// supprime la classe isActive sur toutes les diapos
function removeActiveClasses() {
  diapos.forEach(diapo => {
    diapo.classList.remove('isActive')
  })
}
// affichage des Popup
const modal = document.querySelector('.myModal'); // récupére la fenêtre Popup
const btn = document.querySelectorAll('.myBtn'); // récupère tous les liens texte souligné type bouton (classe myBtn)
const span = document.querySelector('.close'); // récupère l'élément <span> qui ferme la Popup
const textModal = document.querySelector('.textModal'); // récupère l'élément text de la Popup
const titreModal = document.querySelector('.titreModal'); // récupère l'élément titre de la Popup
// quand click sur un des liens myBtn, ouvre la fenêtre
for (let b = 0; b < btn.length; b++) {
  btn[b].addEventListener('click', () => { // quand clique sur un lien
    titreModal.innerHTML = btn[b].textContent; // change le titre de la Popup
    btn[b].style.color = "var(--tertiaire)"; // change la couleur du lien
    if (b == 0) { // texte spécifique pour Solution
      textModal.innerHTML = "à la place de Produits<br><br>Employeurs: service d'abonnement et accès à la CVthèque<br><br>Candidats: gratuit et accès aux offres";
    } else if (b == 1) { // texte spécifique pour Accès
      textModal.innerHTML = "au lieu de Place (emplacement)<br><br>Le service doit être accessible<br><br>n’importe où ...<br>n’importe quand ...<br>et ... sur n’importe quel appareil<br><br> Il faut développer une présence intégrée cross-canal qui considère le cycle d’activité du client";
    } else if (b == 2) { // texte spécifique pour Valeur
      textModal.innerHTML = "à la place de Price<br><br>Perception, valorisation du service<br><br>Accroître l'image de marque, pour cela le service doit être de qualité";
    } else { // texte spécifique pour Education
      textModal.innerHTML = "c'était la Promotion (communication)<br><br>Eduquer autour du handicap<br><br>Développer le contenu informatif";
    }
    modal.style.display = "block"; // affiche la fenêtre
  })
}
// quand clique sur la croix <span> (x), ferme la fenêtre
span.addEventListener('click', () => {
  fermePopUp(); // appel fonction
})
// quand clique sur le reste de la page, ferme la fenêtre
document.addEventListener('click', (event) => {
  if (event.target == modal) { // Le cadre div.modal autour de la fenêtre est transparent mais fait 100% hauteur/largeur donc on ne peut que cliquer dessus sans le savoir !!
    fermePopUp(); // appel fonction
  }
})
function fermePopUp() { // fonction ferme la fenêtre
  modal.style.display = "none";
}
