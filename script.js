// document.addEventListener("DOMContentLoaded", function () {
//   var navbar = document.getElementById("navbar");
//   var homeLogo = document.getElementById("homelogo");
//   var scrolledLogo = document.getElementById("scrolledlogo");

//   window.addEventListener("scroll", function () {
//     if (window.scrollY > 0) {
//       navbar.classList.add("scrolled");
//       homeLogo.style.display = "none";
//       scrolledLogo.style.display = "inline-block";
//     } else {
//       navbar.classList.remove("scrolled");
//       homeLogo.style.display = "inline-block";
//       scrolledLogo.style.display = "none";
//     }
//   });
// });

const images = [
  "linear-gradient(360deg, rgba(0, 0, 0, 0.600), rgba(0, 0, 0, 0.600)),url(images/home-background-one.jpg)",
  "linear-gradient(360deg, rgba(0, 0, 0, 0.680), rgba(0, 0, 0, 0.680)),url(images/home-background-two.jpg)",
  "linear-gradient(360deg, rgba(0, 0, 0, 0.680), rgba(0, 0, 0, 0.680)),url(images/home-background-three.jpg)",
];

let currentIndex = 0;

function changeBackground() {
  const homeSection = document.getElementById("home");
  homeSection.style.backgroundImage = images[currentIndex];

  currentIndex = (currentIndex + 1) % images.length;
}
setInterval(changeBackground, 3000);

changeBackground();
