// const decreaseBtn = document.querySelector(".decrease-btn");
// const resetBtn = document.querySelector(".reset-btn");
// const increaseBtn = document.querySelector(".increase-btn");
const counterResult = document.querySelector(".counter-result");
const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.onclick = () => {
    if (btn.classList.contains("decrease-btn")) {
      Decrease();
    } else if (btn.classList.contains("increase-btn")) {
      Increase();
    } else {
      Reset();
    }
  };
});

// decreaseBtn.onclick = () => {
//   Decrease();
// };

// increaseBtn.onclick = () => {
//   Increase();
// };

// resetBtn.onclick = () => {
//   Reset();
// };

const Decrease = () => {
  let counter = counterResult.textContent;
  counter--;
  if (counter < 0) {
    counterResult.style.color = "red";
  } else if (counter == 0) {
    counterResult.style.color = "#131629";
  }
  counterResult.textContent = counter;
};

const Increase = () => {
  let counter = counterResult.textContent;
  counter++;
  if (counter > 0) {
    counterResult.style.color = "green";
  } else if (counter == 0) {
    counterResult.style.color = "#131629";
  }
  counterResult.textContent = counter;
};

const Reset = () => {
  counterResult.textContent = 0;
  counterResult.style.color = "#131629";
};
