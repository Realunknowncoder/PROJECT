const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

let currentInput = '';
let previousInput = '';
let operator = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.innerText;
        const action = button.dataset.action;

        if (!action) { // Number button
            currentInput += buttonText;
            display.value = currentInput;
        } else if (action === 'clear') {
            currentInput = '';
            previousInput = '';
            operator = null;
            display.value = '';
        } else if (action === 'backspace') {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;
        } else if (action === 'decimal') {
            if (!currentInput.includes('.')) {
                currentInput += '.';
                display.value = currentInput;
            }
        } else if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
            if (currentInput === '') return;
            if (previousInput !== '') {
                calculate(); // Calculate if there's a pending operation
            }
            operator = action;
            previousInput = currentInput;
            currentInput = '';
        } else if (action === 'calculate') {
            if (currentInput === '' || previousInput === '' || operator === null) return;
            calculate();
            operator = null; // Reset operator after calculation
        }
    });
});

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case 'add':
            result = prev + current;
            break;
        case 'subtract':
            result = prev - current;
            break;
        case 'multiply':
            result = prev * current;
            break;
        case 'divide':
            result = prev / current;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    display.value = currentInput;
    previousInput = '';
}