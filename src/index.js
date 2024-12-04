function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "In the tapestry of life, they stand adorned",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("click", generatePoem);
