const buttons = document.querySelectorAll('button')
const display = document.querySelector('.display')

let calculate = []
let finalCalc


function calc(button){
  const value = button.innerText
  if(value === "clear") {
    calculate =[ ]
    display.innerText = ' '
  } else if (value === "=") {
    display.innerText = eval(finalCalc)
  } else {
    calculate.push(value)
    finalCalc = calculate.join('')
    display.innerText = finalCalc
  }

}

buttons.forEach(button => button.addEventListener('click', () => calc(button)))
