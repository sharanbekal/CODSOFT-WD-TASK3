let display = document.getElementById('calculator-display');
let currentInput = '';
let firstOperand = '';
let operator = '';

function handleButtonClick(event) {
    const buttonValue = event.target.innerText;

    if (buttonValue === 'C') {
        clearDisplay();
    } else if (buttonValue === '=') {
        calculateResult();
    } else if (isOperator(buttonValue)) {
        handleOperator(buttonValue);
    } else {
        updateDisplay(buttonValue);
    }
}

function isOperator(value) {
    return ['/', '*', '-', '+'].includes(value);
}

function handleOperator(value) {
    if (firstOperand === '') {
        firstOperand = currentInput;
        operator = value;
        clearDisplay();
    } else {
        calculateResult();
        operator = value;
    }
}

function updateDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculateResult() {
    try {
        const result = eval(`${firstOperand} ${operator} ${currentInput}`);
        display.value = result;
        currentInput = result.toString();
        firstOperand = '';
        operator = '';
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
        firstOperand = '';
        operator = '';
    }
}
