const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById('btn')
const colorCode = document.querySelector('.color-code');
console.log(colorCode)

button.addEventListener('click', function () {

  const randomNumber = getRandomHexColor()
  console.log("Random Number:", randomNumber)
  document.body.style.backgroundColor = randomNumber
  colorCode.textContent = randomNumber
})

function getRandomHexColor() {
  let hexCode = '#'
  for (let index = 0; index < 6; index++) {
    hexCode += hex[randomNum()]
  }
  return hexCode
}

function randomNum() {
  return Math.floor(Math.random() * hex.length)
}