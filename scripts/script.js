$(document).ready(function () {
  const classFacts = [
    "My random fact is that I have two brothers",
    "My fav color is purple.",
    "I like to swim",
    "I broke my finger",
    "My name is Victor, and I'm ambidextrous.",
    "I can say my alphabet backwards",
    "I am not famous",
    "I was born in Louisiana",
    "I have never had a Peanut Butter and Jelly Sandwich!",
    "I am allergic to cats",
    "I like trains.",
    "I know the secret identity of beastcarp1",
    "I have a dog",
    "I hate UNA parking",
    "I have 3 dogs",
    "I'm adopted from China :D",
    "I used to have an orange Hummer H3",
    "I play on the rugby team",
    "UNA basketball sold the bag",
    "The Great Wall of China is 13,000 miles long",
    "I hate javascript.",
    "I love the Bible verse Romans 5:8!",
    "I love running.",
    "🦭🦭",
    "I have eaten 1 pound of ground beef every day for the last 6 months.",
    "Still very less parking space in UNA",
    "I enjoy kickboxing"
  ];
  console.log(classFacts);

  const cards = document.querySelectorAll(".flip-card-back");
  for (let i = 0; i < cards.length; i++) {
    cards[i].textContent = classFacts[i];
    cards[i].closest(".card").dataset.id = `card-${i}`; // Ensure unique ID
  }

  document
    .querySelectorAll(".card")
    .forEach((card) =>
      card.addEventListener("click", () =>
        card.children[0].classList.toggle("flipped")
      )
    );

  document
    .getElementById("flipAll")
    .addEventListener("click", () =>
      document
        .querySelectorAll(".flip-card-inner")
        .forEach((card) => card.classList.toggle("flipped"))
    );
});

function liked(button) {
  event.stopPropagation(); 

  const likedContainer = document.querySelector("#likedContainer");
  const card = button.closest(".card");
  const cardId = card.dataset.id;

  if (button.classList.contains("liked")) {
    const likedCard = likedContainer.querySelector(`[data-id="${cardId}"]`);
    if (likedCard) {
      likedContainer.removeChild(likedCard);
    }


    const originalCard = document.querySelector(`.card:not(#likedContainer .card)[data-id="${cardId}"]`);
    if (originalCard) {
      const originalButton = originalCard.querySelector(".heart");
      originalButton.innerHTML = "Like ";
      originalButton.classList.remove("liked");

      const newEmptyHeart = document.createElement("img");
      newEmptyHeart.src =
        "https://raw.githubusercontent.com/dgoodwin-maker/dev-easy-project/c9046dc813c20171041b92e0793c820b461c84c2/images/heart-empty.svg";
      newEmptyHeart.classList.add("heart-img", "emptyHeart");
      originalButton.appendChild(newEmptyHeart);

      originalButton.onclick = function (event) {
        event.stopPropagation();
        liked(this);
      };
    }
  } else {
    const cardCopy = card.cloneNode(true);
    cardCopy.dataset.id = cardId;

    const clonedButton = cardCopy.querySelector(".heart");
    clonedButton.innerHTML = "Liked ";
    clonedButton.classList.add("liked");

    const newFullHeart = document.createElement("img");
    newFullHeart.src =
      "https://raw.githubusercontent.com/dgoodwin-maker/dev-easy-project/c9046dc813c20171041b92e0793c820b461c84c2/images/heart-fill.svg";
    newFullHeart.classList.add("heart-img", "fullHeart");
    clonedButton.appendChild(newFullHeart);

    clonedButton.onclick = function (event) {
      event.stopPropagation();
      liked(this);
    };

    likedContainer.appendChild(cardCopy);

    button.innerHTML = "Liked ";
    button.classList.add("liked");

    const newFullHeartOriginal = document.createElement("img");
    newFullHeartOriginal.src =
      "https://raw.githubusercontent.com/dgoodwin-maker/dev-easy-project/c9046dc813c20171041b92e0793c820b461c84c2/images/heart-fill.svg";
    newFullHeartOriginal.classList.add("heart-img", "fullHeart");
    button.appendChild(newFullHeartOriginal);
  }
}

function search_fact() {
  let input = document.getElementById("searchbar").value.toLowerCase();
  let x = document.getElementsByClassName("card");

  for (let i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-item";
    }
  }
}
