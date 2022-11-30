const openNavBtn = document.querySelector(".navbar");
const closeNavBtn = document.querySelector(".close-nav");
const sideBar = document.querySelector(".sidebar");

openNavBtn.onclick = () => {
  sideBar.classList.add("open-side-bar");
  openNavBtn.style.display = "none";
};

closeNavBtn.onclick = () => {
  sideBar.classList.remove("open-side-bar");
  openNavBtn.style.display = "block";
};
