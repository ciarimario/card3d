const card = document.getElementById("theCard");
const container = document.getElementById("theContainer");
const button = document.getElementById("button");
const img = document.querySelector(".card-body-img");
const text = document.querySelector(".card-body-text p");

// Animation 3d in
container.addEventListener("mousemove", (e) => {
  let Xaxis = (window.innerWidth / 2 - e.pageX) / 10;
  let Yaxis = (window.innerWidth / 2 - e.pageY) / 10;

  card.style.transform = `rotateX(${Yaxis}deg) rotateY(${Xaxis}deg)`;
  button.style.transform = "translateZ(40px)";
  button.style.boxShadow = "10px 10px 10px rgba(0,0,0,0.2)";
  text.style.transform = "translateZ(30px)";
  img.style.filter = "grayscale(40%)";
});

// animation 3D out
container.addEventListener("mouseleave", (e) => {
  card.style.transform = "rotateX(0deg)";
  button.style.transform = "translateZ(0px)";
  text.style.transform = "translateZ(0px)";
  button.style.boxShadow = "none";
  img.style.filter = "grayscale(0%)";
});
