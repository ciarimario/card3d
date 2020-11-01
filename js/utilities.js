/////////////////////////////// FUNCTIONS ///////////////////////////////////
// Add effects on elements
export function addEffectsOnCard(card, button, text, img, title, Xaxis, Yaxis) {
  card.style.transform = `rotateX(${Yaxis}deg) rotateY(${Xaxis}deg)`;
  button.style.transform = "translateZ(40px)";
  title.style.transform = "translateZ(40px)";
  button.style.boxShadow = "10px 10px 10px rgba(0,0,0,0.2)";
  text.style.transform = "translateZ(30px)";
  img.style.filter = "grayscale(40%)";
}
// remove effects from elements
export function removEffectsOnCard(card, button, text, img, title) {
  card.style.transform = "rotateX(0deg)";
  button.style.transform = "translateZ(0px)";
  text.style.transform = "translateZ(0px)";
  title.style.transform = "translateZ(0px)";
  button.style.boxShadow = "none";
  img.style.filter = "grayscale(0%)";
}
////////////////////////////////////////////////////////////////////////////
