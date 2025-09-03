# STEG-FÖR-STEG INSTRUKTIONER
JavaScript Kalkylator Basics

## Innan du börjar
1. Öppna `index.html` i webbläsaren
2. Öppna Developer Tools (F12)
3. Gå till Console-fliken
4. Ha `script.js` öppen i din editor

---

## STEG 1: Förstå Functions och Return

**Mål:** Lära sig skriva enkla funktioner som returnerar värden

### 1.1 Skriv din första funktion
Ta bort kommentarerna (`//`) och skriv din första funktion:

```javascript
function addNumbers(a, b) {
    return a + b;
}
```

**Testa:**
```javascript
console.log('Test addition:', addNumbers(5, 3)); // Ska visa 8
```

### 1.2 Skriv fler matematiska funktioner
```javascript
function subtractNumbers(a, b) {
    return a - b;
}

function multiplyNumbers(a, b) {
    return a * b;
}

function divideNumbers(a, b) {
    if (b === 0) {
        return 'Fel: Division med noll!';
    }
    return a / b;
}
```

**Testa alla:**
```javascript
console.log('Test subtraction:', subtractNumbers(10, 3)); // Ska visa 7
console.log('Test multiplication:', multiplyNumbers(4, 5)); // Ska visa 20
console.log('Test division:', divideNumbers(15, 3)); // Ska visa 5
console.log('Test division by zero:', divideNumbers(10, 0)); // Ska visa fel
```

---

## STEG 2: Förstå DOM - Hitta HTML-element

**Mål:** Lära sig hitta och ändra HTML-element med JavaScript

### 2.1 Hitta element med getElementById
```javascript
function updateDisplay() {
    const displayElement = document.getElementById('display');
    displayElement.textContent = displayValue;
}
```

### 2.2 Uppdatera debug-informationen
```javascript
function updateDebug() {
    document.getElementById('first-number').textContent = firstNumber || '-';
    document.getElementById('operation').textContent = operation || '-';
    document.getElementById('second-number').textContent = secondNumber || '-';
}
```

**Testa:**
```javascript
// Ändra displayValue och kör funktionen
displayValue = '123';
updateDisplay(); // Ska ändra vad som visas på kalkylatorn
```

---

## STEG 3: Hantera Användarinput

**Mål:** Skriva funktioner som reagerar på knapptryck

### 3.1 Hantera siffror
```javascript
function handleNumber(number) {
    if (operation === '') {
        // Vi bygger det första talet
        firstNumber += number;
        displayValue = firstNumber;
    } else {
        // Vi bygger det andra talet
        secondNumber += number;
        displayValue = secondNumber;
    }
    
    updateDisplay();
    updateDebug();
}
```

### 3.2 Hantera operatorer
```javascript
function handleOperator(op) {
    if (firstNumber !== '' && operation === '') {
        operation = op;
        updateDebug();
    }
}
```

### 3.3 Räkna ut resultatet
```javascript
function calculate() {
    if (firstNumber !== '' && operation !== '' && secondNumber !== '') {
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);
        let result;
        
        if (operation === '+') {
            result = addNumbers(num1, num2);
        } else if (operation === '-') {
            result = subtractNumbers(num1, num2);
        } else if (operation === '×') {
            result = multiplyNumbers(num1, num2);
        } else if (operation === '÷') {
            result = divideNumbers(num1, num2);
        }
        
        displayValue = result.toString();
        updateDisplay();
        
        // Återställ för nästa beräkning
        firstNumber = result.toString();
        operation = '';
        secondNumber = '';
        updateDebug();
    }
}
```

### 3.4 Rensa allt
```javascript
function clearAll() {
    firstNumber = '';
    operation = '';
    secondNumber = '';
    displayValue = '0';
    
    updateDisplay();
    updateDebug();
}
```

---

## STEG 4: Koppla Funktioner till Knappar (Event Listeners)

**Mål:** Få knapparna att faktiskt göra något

### 4.1 Koppla sifferknappar (traditionell syntax)
```javascript
document.getElementById('btn-1').addEventListener('click', function() {
    handleNumber('1');
});

document.getElementById('btn-2').addEventListener('click', function() {
    handleNumber('2');
});

// Fortsätt för alla siffror (0-9)
```

### 4.2 Koppla operatorknappar (arrow syntax)
```javascript
document.getElementById('btn-plus').addEventListener('click', () => {
    handleOperator('+');
});

document.getElementById('btn-minus').addEventListener('click', () => {
    handleOperator('-');
});

document.getElementById('btn-multiply').addEventListener('click', () => {
    handleOperator('×');
});

document.getElementById('btn-divide').addEventListener('click', () => {
    handleOperator('÷');
});
```

### 4.3 Koppla specialknappar
```javascript
document.getElementById('btn-equals').addEventListener('click', () => {
    calculate();
});

document.getElementById('btn-clear').addEventListener('click', () => {
    clearAll();
});
```

---

## STEG 5: Testa Din Kalkylator

1. Ladda om sidan (F5)
2. Tryck på siffror - de ska visas på displayen
3. Tryck på en operator - debug-info ska uppdateras
4. Tryck på fler siffror
5. Tryck på = för att få resultat
6. Tryck på C för att rensa

---

## Vanliga Fel och Lösningar

### "Ingenting händer när jag trycker på knappar"
- Kontrollera att event listeners är rätt skrivna
- Kontrollera att alla functions är definierade
- Kolla Console för felmeddelanden

### "Fel i beräkningar"
- Kontrollera att `parseFloat()` används för att konvertera strings till tal
- Kontrollera att alla matematiska funktioner returnerar rätt värden

### "Display uppdateras inte"
- Kontrollera att `updateDisplay()` anropas
- Kontrollera att `displayValue` har rätt värde

---

## Bonus: Förbättringar

När grunderna fungerar, kan du prova:

1. **Decimaltal:** Lägg till en decimal-knapp
2. **Tangentbord:** Lyssna på tangentbordstryck
3. **Historik:** Visa tidigare beräkningar
4. **Styling:** Förbättra utseendet

Grattis! Du har byggt din första JavaScript-applikation! 🎉
