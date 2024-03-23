// store input in variables
let firstNum = '';
let secondNum = '';
let operatorSelected = '';

// functions for numbers
const resultScreen = document.querySelector('.resultScreen');
const currentInput = document.querySelector('.currentInput')
const fullEquation = document.querySelector('.fullEquation')

function getFirstNum(btn) {
  currentInput.innerText += btn.innerText;
  resultScreen.append(currentInput);
  firstNum = parseFloat(currentInput.innerText);
  fullEquation.textContent = firstNum;
  resultScreen.prepend(fullEquation);
}

function getOperator(btn) {
  currentInput.innerText = '';
  currentInput.innerText += btn.innerText;
  resultScreen.append(currentInput);
  operatorSelected = btn.innerText;
  fullEquation.textContent = firstNum + ' ' + operatorSelected;
  resultScreen.prepend(fullEquation);
}

function getSecondNum(btn) {
  currentInput.innerText += btn.innerText;
  resultScreen.append(currentInput);
  secondNum = parseFloat(currentInput.innerText);
  fullEquation.textContent = firstNum + ' ' + operatorSelected + ' ' + secondNum;
  resultScreen.prepend(fullEquation);
}

// function for operators
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
  if (operatorSelected === '+') {
    return add(a, b)
  } else if (operatorSelected === '-'){
    return subtract(a, b)
  } else if (operatorSelected ==='X'){
    return multiply(a, b)
  } else if (operatorSelected === '÷'){
    return divide(a, b)
  }
}

// event listeners
const numbers = document.querySelectorAll('.numBtn');
const operators = document.querySelectorAll('.operatorBtn');

operators.forEach(operator => {
  operator.addEventListener('click', () => getOperator(operator));
});

numbers.forEach(number => {
  number.addEventListener('click', () => {
    if (operatorSelected === '') {
      getFirstNum(number);
    } else if (operatorSelected !== '' && secondNum === ''){
      currentInput.innerText = '';
      getSecondNum(number);
    } else {
      getSecondNum(number);
    }
  });
});

const equalBtn = document.querySelector('#equal');
const refreshBtn = document.querySelector('#refresh');

equalBtn.addEventListener('click', () => {
  let total = operate(firstNum, secondNum);
  fullEquation.textContent = '';
  currentInput.textContent = total;
  resultScreen.prepend(fullEquation);
  resultScreen.append(currentInput);
  firstNum = total;
});

refreshBtn.addEventListener('click', () => {
  total = '';
  firstNum = '';
  secondNum = '';
  operatorSelected = '';
  fullEquation.textContent = '';
  currentInput.textContent = '';
});

