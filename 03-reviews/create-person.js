const reviewsContainer = document.querySelector(".reviews");
const nextBtn = document.querySelector(".front");
const backBtn = document.querySelector(".back");
const reviews = document.querySelector(".reviews");
const surpriseBtn = document.querySelector(".surprise");

const CreatePersonCard = (name, pos, des, img) => {
  const reviewCard = document.createElement("div");
  reviewCard.classList.add("review-card");
  const imageContainer = document.createElement("article");
  imageContainer.classList.add("image-container");
  //   imageContainer.textContent = "green";
  const imageOffset = document.createElement("div");
  imageOffset.classList.add("image-offset");
  const quotationMark = document.createElement("article");
  const quotationIcon = document.createElement("i");
  quotationIcon.classList.add("fas", "fa-quote-right");
  quotationMark.classList.add("quotation-mark");
  const userImage = document.createElement("img");
  userImage.classList.add("image");
  userImage.src = img;

  quotationMark.appendChild(quotationIcon);
  imageContainer.appendChild(quotationMark);
  imageContainer.appendChild(imageOffset);
  imageContainer.appendChild(userImage);

  const texts = document.createElement("div");
  texts.classList.add("texts");
  const username = document.createElement("p");
  username.textContent = name;
  username.classList.add("username");
  const position = document.createElement("p");
  position.textContent = pos;
  position.classList.add("position");
  const description = document.createElement("p");
  description.textContent = des;
  description.classList.add("description");

  texts.appendChild(username);
  texts.appendChild(position);
  texts.appendChild(description);

  reviewCard.appendChild(imageContainer);
  reviewCard.appendChild(texts);

  reviewsContainer.appendChild(reviewCard);
};
