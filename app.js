const containerE1 = document.querySelector('.container');

const careers = ['programmer', 'editor', 'web development', 'youtuber'];

let careerIndex = 0; // Index of the current career
let characterIndex = 0; // Index of the current character in the career

function updateText() {
   
    characterIndex++;
    
    
    containerE1.innerHTML = `
        <h1>I am a <span>${careers[careerIndex].slice(0, characterIndex)}</span></h1>
    `;

   
    if (characterIndex === careers[careerIndex].length) {
     
        careerIndex++;
        characterIndex = 0; // Reset character index for the new career
    }

    // If all careers are completed, loop back to the start
    if (careerIndex === careers.length) {
        careerIndex = 0; // Reset career index
    }

    
    setTimeout(updateText, 350);
}


updateText();



