import {addEffectsOnCard,removEffectsOnCard} from './utilities.js'
import {CreateElementForm} from './CreateElementForm.js'


// const
const card = document.getElementById("theCard");
const container = document.getElementById("theContainer");
const button = document.getElementById("button");
const img = document.querySelector(".card-body-img");
const text = document.querySelector(".card-body-text p");
const formulaire = document.querySelector("#formulaire");
const title = document.querySelector(".card-body-text-title");

// Animation 3d move on card when mousemove hover container
container.addEventListener("mousemove", (e) => {
  let Xaxis = (window.innerWidth / 2 - e.pageX) / 10;
  let Yaxis = (window.innerWidth / 2 - e.pageY) / 10;
  addEffectsOnCard(card, button, text, img, title, Xaxis, Yaxis);
});

// animation 3D out 
container.addEventListener("mouseleave", (e) => {
  removEffectsOnCard(card, button, text, img, title);
});


let inputNom = new CreateElementForm();
formulaire.innerHTML = inputNom.createinput(
  "Nom : ",
  "text",
  "nom",
  "nom",
  "Veuillez renseigner votre nom"
);

let inputPrenom = new CreateElementForm();
formulaire.innerHTML += inputPrenom.createinput(
  "Prénom : ",
  "text",
  "prenom",
  "prenom",
  "Veuillez renseigner votre prénom"
);





