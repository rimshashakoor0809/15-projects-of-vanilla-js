const colors = ['red', 'yellow', '#fba92c', 'rgb(20, 14, 15)'];

const button = document.getElementById('btn')
const colorCode = document.querySelector('.color-code');
console.log(colorCode)

button.addEventListener('click', function () {

  const randomNumber = getRandomNumber()
  console.log("Random Number:", randomNumber)
  document.body.style.backgroundColor = colors[randomNumber]
  colorCode.textContent = colors[randomNumber]
})

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}