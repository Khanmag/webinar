const term = document.getElementById("term")

const coldButton = document.querySelectorAll("button")[0]
const warmButton = document.querySelectorAll("button")[1]
const temperature = document.querySelector("span")

coldButton.onclick =  () => {
  temperature.textContent = temperature.textContent - 1
  setColorByTemp(+temperature.textContent)
}
warmButton.onclick =  () => {
  temperature.textContent = +temperature.textContent + 1
  setColorByTemp(+temperature.textContent)
}

function setColorByTemp(temp) {
  if (temp < -10) term.className = "t1"
  else if (temp < -5) term.className = "t2"
  else if (temp < 0) term.className = "t3"
  else if (temp < 5) term.className = "t4"
  else if (temp < 10) term.className = "t5"
  else if (temp < 15) term.className = "t6"
  else if (temp < 20) term.className = "t7"
  else if (temp < 25) term.className = "t8"
  else if (temp < 30) term.className = "t9"
  else term.className = "t10"
}
setColorByTemp(+temperature.textContent)



