// assign input to variables
let firstNum = '';
let secondNum = '';
let operatorSelected = '';


// Display input on screen
const numbers = document.querySelectorAll('.numBtn');
const operators = document.querySelectorAll('.operatorBtn');

const resultScreen = document.querySelector('.resultScreen');
const currentInput = document.querySelector('.currentInput')
const fullEquation = document.querySelector('.fullEquation')

function firstNumInput(btn) {
  currentInput.innerText += btn.innerText;
  resultScreen.append(currentInput);
  firstNum = parseFloat(currentInput.innerText);
  fullEquation.textContent = firstNum;
  resultScreen.prepend(fullEquation);
}

function operatorInput(btn) {
  currentInput.innerText = '';
  currentInput.innerText += btn.innerText;
  resultScreen.append(currentInput);
  operatorSelected = btn.innerText;
  console.log(operatorSelected);
  fullEquation.textContent = firstNum + operatorSelected;
  resultScreen.prepend(fullEquation);
}

function secondNumInput(btn) {
  currentInput.innerText += btn.innerText;
  resultScreen.append(currentInput);
  secondNum = parseFloat(currentInput.innerText);
  fullEquation.textContent = firstNum + operatorSelected + secondNum;
  resultScreen.prepend(fullEquation);
}

operators.forEach(operator => {
  operator.addEventListener('click', () => operatorInput(operator));
});


numbers.forEach(number => {
  number.addEventListener('click', () => {
    if (operatorSelected === '') {
      firstNumInput(number);
    } else if (operatorSelected !== '' && secondNum === ''){
      currentInput.innerText = '';
      secondNumInput(number);
    } else {
      secondNumInput(number);
    }
  });
});

// function for operator
function add(a, b) {
  return a + b;
};
function subtract(a, b) {
  return a - b;
};
function multiply(a, b) {
  return a * b;
};
function divide(a, b) {
  return a / b;
};

function operate(a, b) {
  if (operator === '+') {
    return add(a, b)
  } else if (operator === '-'){
    return subtract(a, b)
  } else if (operator ==='X'){
    return multiply(a, b)
  } else if (operator === '+'){
    return divide(a, b)
  } else {
    return alert('invalid input')
  }
}