// script.js
let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let operand1 = '';
let operand2 = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(op) {
    if (currentInput === '') return;
    if (operator !== '') {
        calculate();
    }
    operand1 = currentInput;
    operator = op;
    currentInput = '';
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    operand1 = '';
    operand2 = '';
    display.value = '';
}

function calculate() {
    if (operator === '' || currentInput === '') return;
    operand2 = currentInput;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(operand1) + parseFloat(operand2);
            break;
        case '-':
            result = parseFloat(operand1) - parseFloat(operand2);
            break;
        case '*':
            result = parseFloat(operand1) * parseFloat(operand2);
            break;
        case '/':
            if (parseFloat(operand2) === 0) {
                alert("Cannot divide by zero");
                clearDisplay();
                return;
            }
            result = parseFloat(operand1) / parseFloat(operand2);
            break;
    }
    display.value = result;
    currentInput = result;
    operator = '';
    operand1 = '';
    operand2 = '';
}
