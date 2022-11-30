const openModalBtn = document.querySelector(".btn-container button");
const closeModalBtn = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

openModalBtn.onclick = () => {
  overlay.style.display = "flex";
  modal.style.display = "flex";
};

closeModalBtn.onclick = () => {
  overlay.style.display = "none";
  modal.style.display = "none";
};
