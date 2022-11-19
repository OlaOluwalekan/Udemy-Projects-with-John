window.onload = () => {
  CreateReviews();
};

const CreateReviews = () => {
  persons.forEach((person) => {
    // console.log(person);
    CreatePersonCard(
      person.name,
      person.position,
      person.description,
      person.image
    );
  });
};

let pos = 0;

nextBtn.onclick = () => {
  if (pos < 75) {
    pos += 25;
  } else {
    pos = 0;
  }
  reviews.style.transform = `translateX(-${pos}%)`;
  console.log(pos);
};

backBtn.onclick = () => {
  if (pos > 0) {
    pos -= 25;
  } else {
    pos = 75;
  }
  reviews.style.transform = `translateX(-${pos}%)`;
  console.log(pos);
};
