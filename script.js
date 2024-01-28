const question = document.querySelector("#title");
const gif = document.querySelector(".gif");
const yesbtn = document.querySelector(".yes-btn");
const nobtn = document.querySelector(".no-btn");

yesbtn.addEventListener("click", () => {
  question.innerHTML = "Aaaaa, we have the same feelings";
  gif.src = "kiss.gif";
});
nobtn.addEventListener("click", () => {
    question.innerHTML = "So sad";
    gif.src = "peach-and-goma-peach-goma (1).gif";
  });

