const header = document.querySelector("header");
const menuBar = document.querySelector(".menu-bar");

menuBar.onclick = () => {
  header.classList.toggle("open-menu");
};

window.onresize = () => {
  if (window.innerWidth > 800) {
    header.classList.remove("open-menu");
  }
};
