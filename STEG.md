# STEG-FÖR-STEG INSTRUKTIONER
JavaScript Kalkylator Basics - Upptäck och Lös Problem!

## Innan du börjar
1. Öppna `index.html` i webbläsaren
2. Öppna Developer Tools (F12)
3. Gå till Console-fliken
4. Ha `style.css` och `script.js` öppen i din editor

**Observera:** Kalkylatorn ser inte bra ut och har bara 4 knappar. Det är meningen!

---

## PROBLEM 1: Knapparna ser konstiga ut! 🎨

**Vad du ser:** Knapparna har ful ram, liten text, och ingen bakgrundsfärg.

**Din uppgift:** Fixa CSS:en i `style.css`

### Steg 1.1: Fixa button-styling
```css
button {
    padding: 20px;        /* Istället för 5px */
    font-size: 18px;      /* Istället för 12px */
    border: none;         /* Istället för 2px solid black */
    border-radius: 5px;   /* Istället för 0px */
    cursor: pointer;
}
```

### Steg 1.2: Lägg till färger för nummer-knappar
Ta bort `/*` och `*/` och fyll i färgerna:
```css
.number {
    background-color: #e0e0e0;  /* Ljusgrå */
    color: #333;                /* Mörk text */
}
```

### Steg 1.3: Lägg till färger för operator-knappar
```css
.operator {
    background-color: #ff9500;  /* Orange */
    color: white;
}
```

### Steg 1.4: Lägg till färger för equals-knapp
```css
.equals {
    background-color: #ff9500;  /* Orange */
    color: white;
}
```

---

## PROBLEM 2: Konstigt resultat när du räknar! 🤔

**Testa:** Tryck 1, sedan +, sedan 2, sedan =
**Vad händer:** Du får 12 istället för 3!

**Varför:** JavaScript behandlar siffrorna som text (strings), inte tal (numbers)

### Steg 2.1: Förstå problemet
Kolla i Console:
```javascript
console.log("1" + "2");  // Ger "12" (string concatenation)
console.log(1 + 2);      // Ger 3 (addition)
```

### Steg 2.2: Fixa problemet i `calculate()`-funktionen
Ändra denna rad:
```javascript
const result = addNumbers(firstNumber, secondNumber);
```

Till:
```javascript
const result = addNumbers(Number(firstNumber), Number(secondNumber));
```

**Testa igen:** Nu ska 1 + 2 = 3!

---

## PROBLEM 3: Bara 4 knappar! 😱

**Din uppgift:** Lägg till fler knappar i `index.html`

### Steg 3.1: Lägg till siffra 3
```html
<button id="btn-3" class="number">3</button>
```

### Steg 3.2: Lägg till JavaScript för siffra 3
I `script.js`:
```javascript
document.getElementById('btn-3').addEventListener('click', function() {
    handleNumber('3');
});
```

### Steg 3.3: Lägg till minus-operation
HTML:
```html
<button id="btn-minus" class="operator">-</button>
```

JavaScript:
```javascript
document.getElementById('btn-minus').addEventListener('click', function() {
    handleOperator('-');
});
```

### Steg 3.4: Uppdatera calculate()-funktionen för minus
```javascript
function calculate() {
    if (firstNumber !== '' && secondNumber !== '') {
        const num1 = Number(firstNumber);
        const num2 = Number(secondNumber);
        let result;
        
        if (operation === '+') {
            result = addNumbers(num1, num2);
        } else if (operation === '-') {
            result = subtractNumbers(num1, num2);  // Du behöver skriva denna funktion!
        }
        
        displayValue = result;
        updateDisplay();
        
        // Återställ
        firstNumber = '';
        operation = '';
        secondNumber = '';
        updateDebug();
    }
}
```

### Steg 3.5: Skriv subtractNumbers-funktionen
```javascript
function subtractNumbers(a, b) {
    return a - b;
}
```

---

## UTMANING: Bygg ut kalkylatorn! 🚀

### Lägg till fler siffror (4-9, 0)
- Kopiera mönstret från siffra 1, 2, 3
- Glöm inte både HTML och JavaScript!

### Lägg till Clear-knapp
```html
<button id="btn-clear" class="clear">C</button>
```

```javascript
function clearAll() {
    firstNumber = '';
    operation = '';
    secondNumber = '';
    displayValue = '0';
    updateDisplay();
    updateDebug();
}

document.getElementById('btn-clear').addEventListener('click', function() {
    clearAll();
});
```

### Lägg till CSS för Clear-knapp
```css
.clear {
    background-color: #a6a6a6;
    color: white;
}
```

### Lägg till multiplication (×) och division (÷)
- Följ samma mönster som minus
- Tänk på division med noll!

---

## BONUS: Grid Layout 📐

När du har många knappar, ändra CSS:en för bättre layout:
```css
.buttons {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;  /* 4 kolumner */
    gap: 10px;
}
```

---

## Lärande-reflektion 🤓

**Vad har du lärt dig?**
1. **CSS-problem:** Hur styling påverkar användarupplevelse
2. **String vs Number:** Viktigt att konvertera datatyper
3. **Event Listeners:** Koppla HTML till JavaScript
4. **Mönster:** Samma kod-struktur för liknande funktionalitet
5. **Grid Layout:** Organisera element på sidan

**Nästa steg:** Kan du lägga till tangentbordsstöd? Decimaler? Historik?

Grattis! Du har byggt en riktig kalkylator genom att lösa verkliga programmeringsproblem! 🎉

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

