function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instructions");
  let apiKey = "4507d3fa7d70aoadbteec32b558d1f39";
  let prompt = `User instructions: Generate a short poem about ${instructionInput.value}, ensure to strictly follow the user instructions`;
  let context =
    "You are a creative poem writer, with a talent for short poems. Your task is to generate a 4 line poem using basic HTML, separating each line with <br />. The poem should be signed 'SheCodes AI' inside a <strong> element at the end, Strictly NO title at the beginning of the poem";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳Generating a poem about ${instructionInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("click", generatePoem);
