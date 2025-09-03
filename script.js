// JavaScript Kalkylator Basics - Förenklad version
// Vi börjar bara med ADDITION och bara 2 siffror!

// STEG 1: En enkel addition-funktion
function addNumbers(a, b) {
    return a + b;
}

// STEG 2: Globala variabler (bara för addition nu)
let firstNumber = '';    
let operation = '';      
let secondNumber = '';   
let displayValue = '0';  

// STEG 3: Uppdatera displayen
function updateDisplay() {
    const displayElement = document.getElementById('display');
    displayElement.textContent = displayValue;
}

// STEG 4: Uppdatera debug-info
function updateDebug() {
    document.getElementById('first-number').textContent = firstNumber || '-';
    document.getElementById('operation').textContent = operation || '-';
    document.getElementById('second-number').textContent = secondNumber || '-';
}

// STEG 5: Hantera siffror (bara 1 och 2 fungerar nu)
function handleNumber(number) {
    if (operation === '') {
        firstNumber = firstNumber + number; // OBS: Vad händer här? Hint: string concatenation
        displayValue = firstNumber;
    } else {
        secondNumber = secondNumber + number; // OBS: Samma problem här
        displayValue = secondNumber;
    }
    
    updateDisplay();
    updateDebug();
}

// STEG 6: Hantera bara plus-operationen
function handleOperator(op) {
    if (firstNumber !== '' && operation === '') {
        operation = op;
        updateDebug();
    }
}

// STEG 7: Räkna ut (bara addition)
function calculate() {
    if (firstNumber !== '' && operation === '+' && secondNumber !== '') {
        // PROBLEM: firstNumber och secondNumber är strings! 
        // Vad händer när du adderar "1" + "2"?
        const result = addNumbers(firstNumber, secondNumber);
        
        displayValue = result;
        updateDisplay();
        
        // Återställ
        firstNumber = '';
        operation = '';
        secondNumber = '';
        updateDebug();
    }
}

// STEG 8: Event listeners (bara för knapparna vi har)
document.getElementById('btn-1').addEventListener('click', function() {
    handleNumber('1');
});

document.getElementById('btn-2').addEventListener('click', function() {
    handleNumber('2');
});

document.getElementById('btn-plus').addEventListener('click', function() {
    handleOperator('+');
});

document.getElementById('btn-equals').addEventListener('click', function() {
    calculate();
});

// TESTOMRÅDE
console.log('Kalkylator laddad!');
console.log('Testa: Tryck 1, sedan +, sedan 2, sedan =');
console.log('Vad händer? Får du 12 istället för 3?');
console.log('Hint: Strings vs Numbers!');
