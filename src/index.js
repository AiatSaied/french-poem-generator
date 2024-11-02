function displayPoem(response){
    console.log("poem generated");
    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

function generatePoem(event){
    event.preventDefault();

    let instructionsInput =  document.querySelector("#user-instructions");

    let apiKey = "2be1a4330t4eoe390bfd7847639b4add";
    let context = 
    "You are a romantic poem expert and love to write short poems. You mission is to generate a 4 line poem in basic HTML and separate each line  with a <br/>. Make sure to follow the user instructions. do not include a title to a poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem. do not include the word 'html' and this sign '```' in the first and end.";
    let prompt = `User Instructions: Generate a French Poem about ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating">⌛Generating a French Poem about ${instructionsInput.value}</div>`;

    console.log("Generating poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);

    axios.get(apiUrl).then(displayPoem);
}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem)