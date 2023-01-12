console.log("Hello world!");

const header = document.getElementById("header");

setTimeout(() => {
  header.style.backgroundColor = "pink";
}, 2000);

const button = document.getElementById("button");

// Interactivity via event listeners
button.addEventListener("click", () => {
  header.style.backgroundColor = "blue";
});
