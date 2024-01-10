
const termometr = document.getElementById('term')

const decrementButton = document.querySelectorAll('#term button')[0]
const incrementButton = document.querySelectorAll('#term button')[1]
const value = document.querySelector('#term span')


function decrementFunction() {
  value.textContent = +value.textContent - 1
  setTemperature(value.textContent)
}
function incrementFunction() {
  value.textContent = +value.textContent + 1
  setTemperature(value.textContent)
}

decrementButton.onclick = decrementFunction
incrementButton.onclick = incrementFunction


function setTemperature(temp) {
  if (temp < -10) termometr.className = 't1'
  else if (temp < -5) termometr.className = 't2'
  else if (temp < 0) termometr.className = 't3'
  else if (temp < 5) termometr.className = 't4'
  else if (temp < 10) termometr.className = 't5'
  else if (temp < 15) termometr.className = 't6'
  else if (temp < 20) termometr.className = 't7'
  else if (temp < 25) termometr.className = 't8'
  else if (temp < 30) termometr.className = 't9'
  else termometr.className = 't10'
}
setTemperature(value.textContent)
