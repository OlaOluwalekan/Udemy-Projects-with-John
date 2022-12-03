const questions = document.querySelectorAll(".question");
const btns = document.querySelectorAll(".icon");
const iPlus = document.querySelectorAll(".plus-icon");
const iMinus = document.querySelectorAll(".minus-icon");

btns.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    questions.forEach((question, j) => {
      if (j == i) {
        question.classList.toggle("open-question");
        iPlus[j].classList.toggle("hide-icon");
        iMinus[j].classList.toggle("hide-icon");
      } else {
        question.classList.remove("open-question");
        iPlus[j].classList.remove("hide-icon");
        iMinus[j].classList.add("hide-icon");
      }
    });
  });
});
