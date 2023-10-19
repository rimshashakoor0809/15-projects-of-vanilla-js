const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random';
const displayQuoteElement = document.getElementById("quote-display");
const quoteInputElement = document.getElementById("quote-input");
const timerElement = document.getElementById('timer')


quoteInputElement.addEventListener('input', () => {
  const arrayQuote = displayQuoteElement.querySelectorAll('span');
  const arrayValue = quoteInputElement.value.split('');

  
  let correct = true;
  arrayQuote.forEach((characterSpan, index) => {

    const inputCharacter = arrayValue[index];
    console.log("Check Input character:", inputCharacter)
    if (inputCharacter == '') {
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

const generateRandomQuote = () => {
  return fetch(RANDOM_QUOTE_API_URL)
    .then(res => res.json())
    .then(data => data.content)
}


async function getNextQuote() {
  const quote = await generateRandomQuote()
  displayQuoteElement.innerHTML = '';
  quote.split('').forEach(character => {
    // console.log("Character:", character)
    const characterSpan = document.createElement("span");
    characterSpan.innerText = character
    displayQuoteElement.appendChild(characterSpan)
    startTimer()
  });

}
let startTime; 

function startTimer() {
  timerElement.innerText = 0;
  startTime = new Date();
  setInterval(() => {
    timerElement.innerText = getTimerTime()
  }, 1000);
}

function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000 )
}

getNextQuote()
