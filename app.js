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
let timer; // variable pour effacer le chrono setimeout)

document.addEventListener('mousemove', e => {
  curseur.style.top = e.pageY - 20 + 'px';
  curseur.style.left = e.pageX - 20 + 'px';
  curseur.classList.add('cursor');
  clearTimeout(timer);
  timer = setTimeout(() => {
    curseur.classList.remove('expand');
    curseur.classList.remove('cursor');
  }, 1000);
})
// Animation curseur
document.addEventListener('click', () => {
  if (curseur.classList.contains("cursor")) {
    curseur.classList.add('expand');
    setTimeout(() => {
      curseur.classList.remove('expand');
    }, 250);
  }
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
  // affichage du numéro et nombre total de diapos
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
if (span != null) {
  for (let b = 0; b < btn.length; b++) {
    btn[b].addEventListener('click', () => { // quand clique sur un lien
      titreModal.innerHTML = btn[b].textContent; // change le titre de la Popup
      btn[b].style.color = "var(--tertiaire)"; // change la couleur du lien
      if (btn[b].textContent == 'Produits') { // texte spécifique pour Produits
        textModal.innerHTML = "= Offre de service Handirecrute.com<br><br>Employeurs: service d'abonnement et accès à la CVthèque<br><br>Candidats: gratuit et accès aux offres<br><br>Conseils: volonté de conseiller autour du handicap";
      } else if (btn[b].textContent == 'Place') { // texte spécifique pour Place
        textModal.innerHTML = "<br><br>Le service doit être accessible<br><br>n’importe où ...<br>n’importe quand ...<br>et ... sur n’importe quel appareil<br><br>Présence cross-canal:<br>Site propre / Réseaux sociaux / Google ads / Site d'offres d'emploi<br>Pour ce dernier, il sera à développer.";
      } else if (btn[b].textContent == 'Prix') { // texte spécifique pour Prix
        textModal.innerHTML = "<br><br>Pour les employeurs: 300€/trimestre avec 6 offres d'emploi/mois<br>+ 50€/annonce supplémentaire<br><br>En moyenne, une prestation de recrutement est estimé à 3 000€<br><br>Pour le candidat: gratuit";
      } else if (btn[b].textContent == 'Promotion') { // texte spécifique pour Promotion
        textModal.innerHTML = "<br><br>Mise en avant des offres sur Google Ads<br><br>Participation à des manifestations<br><br>Référencement naturel<br><br>Contenu à développer par le côté formation autour du handicap.";
      } else if (btn[b].textContent == 'Candidat') {
        textModal.innerHTML = "<br>Femme (75%) avec handicap en recherche d'emploi<br><br>sûre d'elle, en recherche d'autonomie<br><br>A peur de ne pas correspondre au poste";
      } else if (btn[b].textContent == 'Employeur') {
        textModal.innerHTML = "<br>Décisionnaire entreprise >20pers.<br><br>Niveau technologique moyen<br><br>Ne s'arrête pas au prix mais à l'efficacité<br><br>A peur que le handicap pénalise le poste";
      } else {
        textModal.innerHTML = "<br>Gérant d'une agence<br><br>Imbus de sa personne<br><br>A l'aise sur les nouvelles technologies<br><br>A peur de manquer de candidats";
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
}