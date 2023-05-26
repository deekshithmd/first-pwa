const container = document.querySelector(".container");
const fruits = [
  { name: "apple", image: "images/apple.jpg" },
  { name: "pinapple", image: "images/pinapple.jpg" },
  { name: "kiwi", image: "images/kiwi.jpg" },
  { name: "mango", image: "images/mango.jpg" },
  { name: "strawberry", image: "images/strawberry.jpg" },
];

const showFruits = () => {
  let output = "";
  fruits.forEach(
    ({ name, image }) =>
      (output += `
    <div class="card">
      <img class="card--avatar" src=${image} />
      <h1 class="card--title">${name}</h1>
      <a class="card--link" href="#">Taste</a>
    </div>
    `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showFruits);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}
