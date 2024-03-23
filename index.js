// store input in variables
let firstNum = '';
let secondNum = '';
let operatorSelected = '';
let total = '';

// functions for numbers
const resultScreen = document.querySelector('.resultScreen');
const currentInput = document.querySelector('.currentInput')
const fullEquation = document.querySelector('.fullEquation')

function getFirstNum(btn) {
  currentInput.textContent += btn;
  resultScreen.append(currentInput);
  firstNum = parseFloat(currentInput.textContent);
  fullEquation.textContent = firstNum;
  resultScreen.prepend(fullEquation);
};

function getOperator(btn) {
  if (operatorSelected === '') {
    currentInput.textContent = '';
    currentInput.textContent = btn;
    resultScreen.append(currentInput);
    operatorSelected = btn;
    fullEquation.textContent = firstNum + ' ' + operatorSelected;
    resultScreen.prepend(fullEquation);
  } else {
    let total = Math.round(operate(firstNum, secondNum) * 100)/100;
    firstNum = total;
    secondNum = '';
    currentInput.textContent = btn;
    fullEquation.textContent = firstNum + ' ' + btn;
    resultScreen.prepend(fullEquation);
    resultScreen.append(currentInput);
  };
};

function getSecondNum(btn) {
  currentInput.textContent += btn;
  resultScreen.append(currentInput);
  secondNum = parseFloat(currentInput.textContent);
  fullEquation.textContent = firstNum + ' ' + operatorSelected + ' ' + secondNum;
  resultScreen.prepend(fullEquation);
};

function getEqual(btn) {
  if (operatorSelected === '÷' && secondNum === 0) {
    currentInput.textContent = 'cannot divide by 0 buddy';
    resultScreen.append(currentInput);
    secondNum = ''
  } else if (firstNum !== '' && operatorSelected !== '' && secondNum !== '') {
  total = Math.round(operate(firstNum, secondNum) * 100)/100;
  currentInput.textContent = total;
  resultScreen.prepend(fullEquation);
  resultScreen.append(currentInput);
  firstNum = total;
  secondNum = '';
  operatorSelected = '';
  };
};

function getRefresh() {
  total = '';
  firstNum = '';
  secondNum = '';
  operatorSelected = '';
  fullEquation.textContent = '';
  currentInput.textContent = '';
  resultScreen.prepend(fullEquation);
  resultScreen.append(currentInput);
};

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
  } else if (operatorSelected ==='x'){
    return multiply(a, b)
  } else if (operatorSelected === '÷'){
    return divide(a, b)
  }
}

// event listeners
const numbers = document.querySelectorAll('.numBtn');

numbers.forEach(number => {
  number.addEventListener('click', () => {
    if (total !== '') {
      getRefresh();
      num = number.textContent;
      getFirstNum(num);
    } else if (currentInput.textContent.length < 10) {
        if (operatorSelected === '') {
        num = number.textContent;
        getFirstNum(num);
      } else if (operatorSelected !== '' && secondNum === ''){
        num = number.textContent;
        currentInput.textContent = '';
        getSecondNum(num);
      } else {
        num = number.textContent;
        getSecondNum(num);
      }
  }
});
});

const operators = document.querySelectorAll('.operatorBtn');

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    oper = operator.textContent;
    getOperator(oper);
    }
  )}
);

const back = document.querySelector('#back');

back.addEventListener('click', () => {
  if (secondNum === '') {
    currentInput.textContent = currentInput.textContent.slice(0, -1);
    firstNum = parseFloat(currentInput.textContent);
    fullEquation.textContent = firstNum;
  } else {
    currentInput.textContent = currentInput.textContent.slice(0, -1);
    secondNum = parseFloat(currentInput.textContent);
    fullEquation.textContent = firstNum + ' ' + operatorSelected + ' ' + secondNum;
  }
});

const decimal = document.querySelector('#decimal');

decimal.addEventListener('click', () => {
  if (currentInput.textContent.split('').includes('.') === false) {
    currentInput.textContent += '.';
    resultScreen.append(currentInput);
  }
});

const equalBtn = document.querySelector('#equal');

equalBtn.addEventListener('click', () => {
  getEqual();
});

const refreshBtn = document.querySelector('#refresh');

refreshBtn.addEventListener('click', () => {
  getRefresh();
});

// keyboard support
document.addEventListener('keydown', (e) => {
  if (!isNaN(parseInt(e.key))) {
    if (total !== '') {
      getRefresh();
      getFirstNum(e.key);
    } else if (currentInput.textContent.length < 10) {
        if (operatorSelected === '') {
        getFirstNum(e.key);
      } else if (operatorSelected !== '' && secondNum === ''){
        currentInput.textContent = '';
        getSecondNum(e.key);
      } else {
        getSecondNum(e.key);
      }
  }
}});

document.addEventListener('keydown', (e) => {
  if (e.key === '+' || e.key === '-' || e.key === 'x') {
    getOperator(e.key);
  } else if (e.key === '/') {
    e.divide = '÷';
    getOperator(e.divide);
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === '.') {
    if (currentInput.textContent.split('').includes('.') === false) {
      currentInput.textContent += '.';
      resultScreen.append(currentInput);
    }
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === '=' || e.key === 'Enter') {
    getEqual();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Backspace') {
    if (secondNum === '') {
      currentInput.textContent = currentInput.textContent.slice(0, -1);
      firstNum = parseFloat(currentInput.textContent);
      fullEquation.textContent = firstNum;
    } else {
      currentInput.textContent = currentInput.textContent.slice(0, -1);
      secondNum = parseFloat(currentInput.textContent);
      fullEquation.textContent = firstNum + ' ' + operatorSelected + ' ' + secondNum;
    }
  }
})

// In one big event listener for keyboard

// document.addEventListener('keydown', (e) => {
//   if (!isNaN(parseInt(e.key))) {
//     if (total !== '') {
//       getRefresh();
//       getFirstNum(e.key);
//     } else if (currentInput.textContent.length < 10) {
//         if (operatorSelected === '') {
//         getFirstNum(e.key);
//       } else if (operatorSelected !== '' && secondNum === ''){
//         currentInput.textContent = '';
//         getSecondNum(e.key);
//       } else {
//         getSecondNum(e.key);
//       }
//   }}
//   else if (e.key === '+' || e.key === '-' || e.key === 'x') {
//     getOperator(e.key);
//   } 
//   else if (e.key === '/') {
//     e.divide = '÷';
//     getOperator(e.divide);
//   } 
//   else if (e.key === '.' && currentInput.textContent.split('').includes('.') === false) {
//       currentInput.textContent += '.';
//       resultScreen.append(currentInput);
//   }
//   else if (e.key === '=' || e.key === 'Enter') {
//     getEqual();
//   } 
//   else if (e.key === 'Backspace') {
//     if (secondNum === '') {
//       currentInput.textContent = currentInput.textContent.slice(0, -1);
//       firstNum = parseFloat(currentInput.textContent);
//       fullEquation.textContent = firstNum;
//     } else {
//       currentInput.textContent = currentInput.textContent.slice(0, -1);
//       secondNum = parseFloat(currentInput.textContent);
//       fullEquation.textContent = firstNum + ' ' + operatorSelected + ' ' + secondNum;
//     }
//   }
// });
