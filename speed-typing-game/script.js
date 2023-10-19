const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random';
const displayQuoteElement = document.getElementById("quote-display");
const quoteInputElement = document.getElementById("quote-input");

const generateRandomQuote = () => {
  return fetch(RANDOM_QUOTE_API_URL)
    .then(res => res.json())
    .then(data => data.content)
}

quoteInputElement.addEventListener('input', () => {
  const arrayQuote = displayQuoteElement.querySelectorAll('span');
  const arrayValue = quoteInputElement.value.split('');

  let correct = true;
  arrayQuote.forEach((characterSpan, index) => {

    const inputCharacter = arrayValue[index];
    if (inputCharacter == null) {
      characterSpan.classList.remove('correct')
      characterSpan.classList.remove('incorrect')
      correct = false
    }
    else if (inputCharacter === characterSpan.innerText) {
      characterSpan.classList.add('correct')
      characterSpan.classList.remove('incorrect')
    }
    else {
      characterSpan.classList.add('incorrect')
      characterSpan.classList.remove('correct')
      correct = false
    }
  });

  if (correct) {
    getNextQuote()
    quoteInputElement.value = ''
  }
})

async function getNextQuote() {
  const quote = await generateRandomQuote()
  displayQuoteElement.innerHTML = '';
  quote.split('').forEach(character => {
    console.log("Character:", character)
    const characterSpan = document.createElement("span");
    characterSpan.classList.add('incorrect')
    characterSpan.innerText = character
    displayQuoteElement.appendChild(characterSpan)
  });

}



getNextQuote()
